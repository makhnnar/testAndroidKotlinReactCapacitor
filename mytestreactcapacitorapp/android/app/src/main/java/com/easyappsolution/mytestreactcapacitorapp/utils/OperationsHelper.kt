package com.easyappsolution.mytestreactcapacitorapp.utils

class OperationsHelper {

    fun getAsArrayOfInts(arrayOfInts: String):Array<Int>{
        val reg = "([\\s|\\,])+"
        val resAsInts: List<Int> = arrayOfInts
                .split(Regex(reg)).map {
                    it.toInt()
                }
        return resAsInts.toTypedArray()
    }

    fun sumValues(arrayOfInts: String):Int{
        return sumValues(
                getAsArrayOfInts(
                        arrayOfInts
                )
        )
    }

    fun sumValues(values: Array<Int>):Int{
        var result : Int = 0
        for (value in values){
            result+=value
        }
        return result
    }

}