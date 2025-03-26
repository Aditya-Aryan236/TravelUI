# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:


# Preserve React Native classes
-keep class com.facebook.react.** { *; }

# Keep entry point for React Native
-keep public class com.facebook.react.PackageList { *; }

# Keep native modules
-keep class com.facebook.react.bridge.** { *; }

# Do not obfuscate JavaScript interfaces
-keep interface com.facebook.react.** { *; }

# Keep classes used by Flipper (only if Flipper is enabled)
-keep class com.facebook.flipper.** { *; }
