package com.easyappsolution.mytestreactcapacitorapp;

import android.os.Bundle;

import com.easyappsolution.mytestreactcapacitorapp.utils.DeviceProperties;
import com.easyappsolution.mytestreactcapacitorapp.utils.OperationsPlugin;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(
            savedInstanceState,
            new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(DeviceProperties.class);
      add(OperationsPlugin.class);
    }});
  }
}
