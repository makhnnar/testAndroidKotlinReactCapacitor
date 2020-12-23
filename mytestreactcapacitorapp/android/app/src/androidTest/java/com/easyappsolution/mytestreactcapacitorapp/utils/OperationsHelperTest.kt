package com.easyappsolution.mytestreactcapacitorapp.utils

import androidx.core.content.contentValuesOf
import junit.framework.TestCase
import java.util.*

class OperationsHelperTest : TestCase() {

    fun testGetAsArrayOfInts(){
        val operationsHelper = OperationsHelper()
        assertTrue(
                arrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9).contentDeepEquals(operationsHelper.getAsArrayOfInts(
                        "1 2 3 4 5 6 7 8 9"
                ))
        )
    }

    fun testSumValues() {
        val operationsHelper = OperationsHelper()
        assertEquals(
                45,
                operationsHelper.sumValues(
                        "1 2 3 4 5 6 7 8 9"
                )
        )
    }

    fun testTestSumValues() {
        val operationsHelper = OperationsHelper()
        assertEquals(
                45,
                operationsHelper.sumValues(
                        arrayOf( 1, 2, 3, 4, 5, 6, 7, 8, 9)
                )
        )
    }
}