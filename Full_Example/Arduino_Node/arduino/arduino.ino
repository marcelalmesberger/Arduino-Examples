int valHR = 0; 
int heartRatePin = 0;  


String sensor_type_raw = "heart rate sensor raw";
String sensor_unit_raw = "raw";



void setup() {
  Serial.begin(115200);    //  setup serial
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB
  }

}

void loop() {
  valHR = random(100);
  Serial.println("{\"timestamp\": " + String(millis()) + ","+"\"type\": \"" + sensor_type_raw + "\","+"\"unit\": \"" + sensor_unit_raw + "\","+"\"value\": "+valHR+"}");
    
    
  delay(500);
    

}
