//Example 05 Printing Hello World repeatedly to Serial Monitor

void setup(){
  Serial.begin(9600);              // set up Serial library at 9600 bps
}

void loop(){
  Serial.println("Hello world!");  // prints hello with ending line break
  delay(1000);
}
