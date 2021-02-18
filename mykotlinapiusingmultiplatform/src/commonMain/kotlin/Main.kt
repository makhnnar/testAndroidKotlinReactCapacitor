import io.ktor.client.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import kotlin.js.JsName
import kotlin.random.Random

class Main {

    private val scope = MainScope()

    val client = HttpClient {
        install(JsonFeature) {
            serializer = KotlinxSerializer(
                kotlinx.serialization.json.Json {
                    prettyPrint = true
                    isLenient = true
                    ignoreUnknownKeys = true
                }
            )
        }
    }

    @JsName("getRandomNumber")
    fun getRandomNumber():Int = Random(32).nextInt()

    @JsName("callApiHour")
    private suspend fun callApiHour():TimeResponse{
        return client.request<TimeResponse>("http://worldtimeapi.org/api/timezone/America/Argentina/Salta"){
            method = HttpMethod.Get
        }
    }

    /*@JsName("getHour")
    fun getHour(){
        scope.launch {
            val hour = callApiHour()
            println(hour.unixtime)
        }
    }*/

    @JsName("getHour")
    fun getHour( callback: (m: String) -> Unit){
        scope.launch {
            val hour = callApiHour()
            callback("${hour.unixtime}")
        }
    }



}