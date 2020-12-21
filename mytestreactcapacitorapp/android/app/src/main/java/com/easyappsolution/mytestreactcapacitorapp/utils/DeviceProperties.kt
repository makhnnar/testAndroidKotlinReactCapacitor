package com.easyappsolution.mytestreactcapacitorapp.utils

import android.annotation.SuppressLint
import android.provider.Settings
import android.util.Log
import com.getcapacitor.*

@NativePlugin
class DeviceProperties : Plugin() {

    @PluginMethod
    fun getIdDevice(call: PluginCall){
        @SuppressLint("HardwareIds") val uuid = Settings.Secure.getString(
                context.contentResolver,
                Settings.Secure.ANDROID_ID
        )
        Log.i("getIdDevice", "getIdDevice: $uuid")
        val toReturn = JSObject()
        toReturn.put("idDevice",uuid)
        call.resolve(toReturn)
    }

}