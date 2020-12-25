import kotlin.random.Random

class Main {

    @JsName("getRandomNumber")
    fun getRandomNumber():Int = Random(32).nextInt()

}