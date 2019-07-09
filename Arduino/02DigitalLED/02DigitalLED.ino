// Example 02 Blink a LED connected to Digital Pin via a 330 Ohm resistors.

int ledPin = 8;

void setup() {
  // put your setup code here, to run once:
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(ledPin, HIGH);   // sets the LED on
  delay(500);                   // waits for a second
  digitalWrite(ledPin, LOW);    // sets the LED off
  delay(500);                   // waits for a second
}
