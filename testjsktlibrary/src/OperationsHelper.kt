class OperationsHelper {

    @JsName("getAsArrayOfInts")
    fun getAsArrayOfInts(arrayOfInts: String):Array<Int>{
        val reg = "([\\s|\\,])+"
        val resAsInts: List<Int> = arrayOfInts
                .split(Regex(reg)).map {
                    it.toInt()
                }
        return resAsInts.toTypedArray()
    }

    @JsName("sumValuesInString")
    fun sumValues(arrayOfInts: String):Int{
        return sumValues(
                getAsArrayOfInts(
                        arrayOfInts
                )
        )
    }

    @JsName("sumValuesInArray")
    fun sumValues(values: Array<Int>):Int{
        var result : Int = 0
        for (value in values){
            result+=value
        }
        return result
    }

}