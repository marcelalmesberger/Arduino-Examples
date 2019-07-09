// Example 09 Part 2 Measure Time with Millis

long previousMillis = 0;        // will store last time LED was updated
long interval = 1000;           // interval at which to blink (milliseconds)

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  unsigned long currentMillis = millis();
  
  if(currentMillis - previousMillis > interval) {
    // save the last time you blinked the LED 
    previousMillis = currentMillis;   
    digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
  }
}
