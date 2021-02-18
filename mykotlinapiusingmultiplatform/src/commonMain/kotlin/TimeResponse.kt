import kotlinx.serialization.Serializable

@Serializable
data class TimeResponse(
    val unixtime: Long,
    val utc_datetime : String
)