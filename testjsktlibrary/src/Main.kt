import kotlin.random.Random

class Main {

    @JsName("getRandomNumber")
    fun getRandomNumber():Int = Random(32).nextInt()

    @JsName("sumValues")
    fun sumValues(values:Array<Int>):Int{
        var result : Int = 0
        for (value in values){
            result+=value
        }
        return result
    }

}