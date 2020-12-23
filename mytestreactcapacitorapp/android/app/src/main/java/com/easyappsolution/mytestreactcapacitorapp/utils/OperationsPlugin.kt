package com.easyappsolution.mytestreactcapacitorapp.utils

import com.getcapacitor.*

@NativePlugin
class OperationsPlugin : Plugin()  {

    @PluginMethod
    fun sumValues(call: PluginCall){
        val toReturn = JSObject()
        toReturn.put("result",
                OperationsHelper().sumValues(
                        call.getString("values")
                )
        )
        call.resolve(toReturn)
    }

}