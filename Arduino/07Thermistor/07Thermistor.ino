//Example 07 Measure Celsius with Thermistor

// which analog pin to connect
#define THERMISTORPIN A0           
// how many samples to take and average, more takes longer
// but is more 'smooth'
#define NUMSAMPLES 5
// the value of the 'other' resistor
#define SERIESRESISTOR 60500    
 
int samples[NUMSAMPLES];
 
void setup(void) {
  Serial.begin(9600);
}
 
void loop(void) {
  uint8_t i;
  float average;
 
  // take N samples in a row, with a slight delay
  for (i=0; i< NUMSAMPLES; i++) {
    samples[i] = analogRead(THERMISTORPIN);
    delay(10);
  }
 
  // average all the samples out
  average = 0;
  for (i=0; i< NUMSAMPLES; i++) {
    average += samples[i];
  }
  average /= NUMSAMPLES;
 
  Serial.print("Average analog reading "); 
  Serial.println(average);
 
  // convert the value to resistance
  average = 1023 / average - 1;
  average = SERIESRESISTOR / average;
  Serial.print("Thermistor resistance "); 
  Serial.println(average);

  // convert to Celsius
  double steinhart = (1/(0.00096564 +(0.00021068 * log(average) ) +(0.000000085826*( pow( log(average) ,3)))))-273.15;
  
  Serial.print("Temperature "); 
  Serial.print(steinhart);
  Serial.println(" *C");
 
  delay(1000);
}
