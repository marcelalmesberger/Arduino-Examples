int ledPin = 9;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  
}

void loop() {
  // put your main code here, to run repeatedly:
  Serial.print("Hello world\n");
  Serial.println(ledPin);
  delay(1000);
}
