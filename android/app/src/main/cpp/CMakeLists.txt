set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Specify the minimum version of CMake
cmake_minimum_required(VERSION 3.10.2)

# Define the project name
project(nativeapp)

# Handle React Native variables (avoid CMake warnings)
if(DEFINED PROJECT_BUILD_DIR)
  message(STATUS "PROJECT_BUILD_DIR: ${PROJECT_BUILD_DIR}")
endif()

if(DEFINED PROJECT_ROOT_DIR)
  message(STATUS "PROJECT_ROOT_DIR: ${PROJECT_ROOT_DIR}")
endif()

if(DEFINED REACT_ANDROID_DIR)
  message(STATUS "REACT_ANDROID_DIR: ${REACT_ANDROID_DIR}")
endif()

# Include the React Native Android directory
include_directories(${REACT_ANDROID_DIR})

# Add your native library
add_library(
  native-lib
  SHARED
  native-lib.cpp
)

# Link the log and Android libraries (required for JNI)
target_link_libraries(
  native-lib
    android
    log
    atomic
    c++_shared
)
