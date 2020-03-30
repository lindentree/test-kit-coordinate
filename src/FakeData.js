const TestProviders = [
  {
  id:1,
  provider_name: "Hayward COVID-19 Testing Center",
 address:  "Hayward Fire Station #7, 28270 Huntwood Avenue, Hayward, CA 94544",
phone_number: "510-583-4949",
email: "",
operating_hours:[["Tuesday", "9-6"], ["Wednesday", "9-6"]],
geolocation: [37.632780, -122.064390],
tests_available: 58,
current_status: "overloaded",
testing_capacity: "medium",
testing_criteria: "Priority 3",
needed_materials: [
   ["swabs", false], 
   ["gloves", true], 
   ["sample_collection_tubes", true],
   ["samples", false],
   ["reagents", false]

 ]
},
{
  id:2,
  provider_name: "SF Dept. of Public Health",
 address:  "101 Grove St, San Francisco, CA 94102",
phone_number: "510-583-4949",
email: "",
operating_hours:[],
geolocation: [37.778060, -122.418660],
tests_available: 58,
current_status: "underused",
testing_capacity: "medium",
testing_criteria: "Priority 1",
needed_materials: [
   ["swabs", false], 
   ["gloves", false], 
   ["sample_collection_tubes", false],
   ["samples", false],
   ["reagents", false]
 ]
},
{
  id:3,
  provider_name: "San Mateo Event Center",
 address: "1346 Saratoga Dr, San Mateo, CA 94403",
phone_number: "510-583-4949",
email:"",
operating_hours:[["Tuesday", "9-6"], ["Wednesday", "9-6"]],
geolocation: [37.547901, -122.29683],
tests_available: 58,
current_status: "normal",
testing_capacity: "medium",
testing_criteria: "Priority 1",
needed_materials: [
   ["swabs", false], 
   ["gloves", false], 
   ["sample_collection_tubes", false],
   ["samples", false],
   ["reagents", false]
 ]
},
{
  id:4,
  provider_name: "UCSF Laurel Heights",
 address:  "3333 California St, San Francisco, CA 94118",
phone_number: "510-583-4949",
email:"",
operating_hours:[["Tuesday", "9-6"], ["Wednesday", "9-6"]],
geolocation: [37.786089, -122.448631],
tests_available: 58,
current_status: "normal",
testing_capacity: "medium",
testing_criteria: "Priority 1",
 needed_materials: [
   ["swabs", false], 
   ["gloves", false], 
   ["sample_collection_tubes", false],
   ["samples", false],
   ["reagents", false]
 ]
},
{
  id:5,
  provider_name: "Viral and Rickettsial Disease Laboratory",
 address:  "850 Marina Bay Parkway, Richmond, CA 94804",
phone_number: "510-583-4949",
email:"",
operating_hours:[["Tuesday", "9-6"], ["Wednesday", "9-6"]],
geolocation: [37.919120, -122.344560],
tests_available: 58,
current_status: "normal",
testing_capacity: "medium",
testing_criteria: "Priority 1",
 needed_materials: [
   ["swabs", false], 
   ["gloves", false], 
   ["sample_collection_tubes", false],
   ["samples", false],
   ["reagents", false]
 ]
},
{
  id:6,
  provider_name: "Highland Hospital",
 address:  "1411 E 31st St, Oakland, CA 94602",
phone_number: "510-583-4949",
email:"",
operating_hours:[["Tuesday", "9-6"], ["Wednesday", "9-6"]],
geolocation: [37.799234, -122.231199],
tests_available: 58,
current_status: "normal",
testing_capacity: "medium",
testing_criteria: "Priority 1",
 needed_materials: [
   ["swabs", false], 
   ["gloves", false], 
   ["sample_collection_tubes", false],
   ["samples", false],
   ["reagents", false]
 ]
}


];

//101 Grove St, San Francisco, CA 94102 SF Public Health
// 1346 Saratoga Dr, San Mateo, CA 94403 San Mateo Event Center
//3333 California St, San Francisco, CA 94118 UCSF Laurel Heights
//Richmond (510) 307-8585   VIRAL AND RICKETTSIAL DISEASE LABORATORY 850 Marina Bay Parkway
//Richmond, CA 94804

export default TestProviders

