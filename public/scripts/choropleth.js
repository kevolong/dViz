//Choropleth Education Data
const educationDataset = [
	{
		"fips": 1001,
		"state": "AL",
		"area_name": "Autauga County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 1003,
		"state": "AL",
		"area_name": "Baldwin County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 1005,
		"state": "AL",
		"area_name": "Barbour County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 1007,
		"state": "AL",
		"area_name": "Bibb County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 1009,
		"state": "AL",
		"area_name": "Blount County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 1011,
		"state": "AL",
		"area_name": "Bullock County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 1013,
		"state": "AL",
		"area_name": "Butler County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 1015,
		"state": "AL",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 1017,
		"state": "AL",
		"area_name": "Chambers County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 1019,
		"state": "AL",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 1021,
		"state": "AL",
		"area_name": "Chilton County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 1023,
		"state": "AL",
		"area_name": "Choctaw County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 1025,
		"state": "AL",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 1027,
		"state": "AL",
		"area_name": "Clay County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 1029,
		"state": "AL",
		"area_name": "Cleburne County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 1031,
		"state": "AL",
		"area_name": "Coffee County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 1033,
		"state": "AL",
		"area_name": "Colbert County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 1035,
		"state": "AL",
		"area_name": "Conecuh County",
		"bachelorsOrHigher": 8.3
	},
	{
		"fips": 1037,
		"state": "AL",
		"area_name": "Coosa County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 1039,
		"state": "AL",
		"area_name": "Covington County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 1041,
		"state": "AL",
		"area_name": "Crenshaw County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 1043,
		"state": "AL",
		"area_name": "Cullman County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 1045,
		"state": "AL",
		"area_name": "Dale County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 1047,
		"state": "AL",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 1049,
		"state": "AL",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 1051,
		"state": "AL",
		"area_name": "Elmore County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 1053,
		"state": "AL",
		"area_name": "Escambia County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 1055,
		"state": "AL",
		"area_name": "Etowah County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 1057,
		"state": "AL",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 1059,
		"state": "AL",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 1061,
		"state": "AL",
		"area_name": "Geneva County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 1063,
		"state": "AL",
		"area_name": "Greene County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 1065,
		"state": "AL",
		"area_name": "Hale County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 1067,
		"state": "AL",
		"area_name": "Henry County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 1069,
		"state": "AL",
		"area_name": "Houston County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 1071,
		"state": "AL",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 1073,
		"state": "AL",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 30.3
	},
	{
		"fips": 1075,
		"state": "AL",
		"area_name": "Lamar County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 1077,
		"state": "AL",
		"area_name": "Lauderdale County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 1079,
		"state": "AL",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 1081,
		"state": "AL",
		"area_name": "Lee County",
		"bachelorsOrHigher": 33.2
	},
	{
		"fips": 1083,
		"state": "AL",
		"area_name": "Limestone County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 1085,
		"state": "AL",
		"area_name": "Lowndes County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 1087,
		"state": "AL",
		"area_name": "Macon County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 1089,
		"state": "AL",
		"area_name": "Madison County",
		"bachelorsOrHigher": 38.6
	},
	{
		"fips": 1091,
		"state": "AL",
		"area_name": "Marengo County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 1093,
		"state": "AL",
		"area_name": "Marion County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 1095,
		"state": "AL",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 1097,
		"state": "AL",
		"area_name": "Mobile County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 1099,
		"state": "AL",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 1101,
		"state": "AL",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 1103,
		"state": "AL",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 1105,
		"state": "AL",
		"area_name": "Perry County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 1107,
		"state": "AL",
		"area_name": "Pickens County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 1109,
		"state": "AL",
		"area_name": "Pike County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 1111,
		"state": "AL",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 1113,
		"state": "AL",
		"area_name": "Russell County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 1115,
		"state": "AL",
		"area_name": "St. Clair County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 1117,
		"state": "AL",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 40.2
	},
	{
		"fips": 1119,
		"state": "AL",
		"area_name": "Sumter County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 1121,
		"state": "AL",
		"area_name": "Talladega County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 1123,
		"state": "AL",
		"area_name": "Tallapoosa County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 1125,
		"state": "AL",
		"area_name": "Tuscaloosa County",
		"bachelorsOrHigher": 27.7
	},
	{
		"fips": 1127,
		"state": "AL",
		"area_name": "Walker County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 1129,
		"state": "AL",
		"area_name": "Washington County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 1131,
		"state": "AL",
		"area_name": "Wilcox County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 1133,
		"state": "AL",
		"area_name": "Winston County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 2013,
		"state": "AK",
		"area_name": "Aleutians East Borough",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 2016,
		"state": "AK",
		"area_name": "Aleutians West Census Area",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 2020,
		"state": "AK",
		"area_name": "Anchorage Municipality",
		"bachelorsOrHigher": 32.9
	},
	{
		"fips": 2050,
		"state": "AK",
		"area_name": "Bethel Census Area",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 2060,
		"state": "AK",
		"area_name": "Bristol Bay Borough",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 2068,
		"state": "AK",
		"area_name": "Denali Borough",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 2070,
		"state": "AK",
		"area_name": "Dillingham Census Area",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 2090,
		"state": "AK",
		"area_name": "Fairbanks North Star Borough",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 2100,
		"state": "AK",
		"area_name": "Haines Borough",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 2105,
		"state": "AK",
		"area_name": "Hoonah-Angoon Census Area",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 2110,
		"state": "AK",
		"area_name": "Juneau City and Borough",
		"bachelorsOrHigher": 37.8
	},
	{
		"fips": 2122,
		"state": "AK",
		"area_name": "Kenai Peninsula Borough",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 2130,
		"state": "AK",
		"area_name": "Ketchikan Gateway Borough",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 2150,
		"state": "AK",
		"area_name": "Kodiak Island Borough",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 2164,
		"state": "AK",
		"area_name": "Lake and Peninsula Borough",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 2170,
		"state": "AK",
		"area_name": "Matanuska-Susitna Borough",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 2180,
		"state": "AK",
		"area_name": "Nome Census Area",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 2185,
		"state": "AK",
		"area_name": "North Slope Borough",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 2188,
		"state": "AK",
		"area_name": "Northwest Arctic Borough",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 2195,
		"state": "AK",
		"area_name": "Petersburg Census Area",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 2198,
		"state": "AK",
		"area_name": "Prince of Wales-Hyder Census Area",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 2220,
		"state": "AK",
		"area_name": "Sitka City and Borough",
		"bachelorsOrHigher": 32.9
	},
	{
		"fips": 2230,
		"state": "AK",
		"area_name": "Skagway Municipality",
		"bachelorsOrHigher": 34.6
	},
	{
		"fips": 2240,
		"state": "AK",
		"area_name": "Southeast Fairbanks Census Area",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 2261,
		"state": "AK",
		"area_name": "Valdez-Cordova Census Area",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 2158,
		"state": "AK",
		"area_name": "Kusilvak Census Area",
		"bachelorsOrHigher": 4.5
	},
	{
		"fips": 2275,
		"state": "AK",
		"area_name": "Wrangell City and Borough",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 2282,
		"state": "AK",
		"area_name": "Yakutat City and Borough",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 2290,
		"state": "AK",
		"area_name": "Yukon-Koyukuk Census Area",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 4001,
		"state": "AZ",
		"area_name": "Apache County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 4003,
		"state": "AZ",
		"area_name": "Cochise County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 4005,
		"state": "AZ",
		"area_name": "Coconino County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 4007,
		"state": "AZ",
		"area_name": "Gila County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 4009,
		"state": "AZ",
		"area_name": "Graham County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 4011,
		"state": "AZ",
		"area_name": "Greenlee County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 4012,
		"state": "AZ",
		"area_name": "La Paz County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 4013,
		"state": "AZ",
		"area_name": "Maricopa County",
		"bachelorsOrHigher": 30
	},
	{
		"fips": 4015,
		"state": "AZ",
		"area_name": "Mohave County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 4017,
		"state": "AZ",
		"area_name": "Navajo County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 4019,
		"state": "AZ",
		"area_name": "Pima County",
		"bachelorsOrHigher": 30.1
	},
	{
		"fips": 4021,
		"state": "AZ",
		"area_name": "Pinal County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 4023,
		"state": "AZ",
		"area_name": "Santa Cruz County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 4025,
		"state": "AZ",
		"area_name": "Yavapai County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 4027,
		"state": "AZ",
		"area_name": "Yuma County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 5001,
		"state": "AR",
		"area_name": "Arkansas County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 5003,
		"state": "AR",
		"area_name": "Ashley County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 5005,
		"state": "AR",
		"area_name": "Baxter County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 5007,
		"state": "AR",
		"area_name": "Benton County",
		"bachelorsOrHigher": 29.6
	},
	{
		"fips": 5009,
		"state": "AR",
		"area_name": "Boone County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 5011,
		"state": "AR",
		"area_name": "Bradley County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 5013,
		"state": "AR",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 5015,
		"state": "AR",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 5017,
		"state": "AR",
		"area_name": "Chicot County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 5019,
		"state": "AR",
		"area_name": "Clark County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 5021,
		"state": "AR",
		"area_name": "Clay County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 5023,
		"state": "AR",
		"area_name": "Cleburne County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 5025,
		"state": "AR",
		"area_name": "Cleveland County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 5027,
		"state": "AR",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 5029,
		"state": "AR",
		"area_name": "Conway County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 5031,
		"state": "AR",
		"area_name": "Craighead County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 5033,
		"state": "AR",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 5035,
		"state": "AR",
		"area_name": "Crittenden County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 5037,
		"state": "AR",
		"area_name": "Cross County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 5039,
		"state": "AR",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5041,
		"state": "AR",
		"area_name": "Desha County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 5043,
		"state": "AR",
		"area_name": "Drew County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 5045,
		"state": "AR",
		"area_name": "Faulkner County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 5047,
		"state": "AR",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 5049,
		"state": "AR",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 5051,
		"state": "AR",
		"area_name": "Garland County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 5053,
		"state": "AR",
		"area_name": "Grant County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 5055,
		"state": "AR",
		"area_name": "Greene County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 5057,
		"state": "AR",
		"area_name": "Hempstead County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 5059,
		"state": "AR",
		"area_name": "Hot Spring County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 5061,
		"state": "AR",
		"area_name": "Howard County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 5063,
		"state": "AR",
		"area_name": "Independence County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 5065,
		"state": "AR",
		"area_name": "Izard County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 5067,
		"state": "AR",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 7.9
	},
	{
		"fips": 5069,
		"state": "AR",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 5071,
		"state": "AR",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 5073,
		"state": "AR",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 5075,
		"state": "AR",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5077,
		"state": "AR",
		"area_name": "Lee County",
		"bachelorsOrHigher": 6.4
	},
	{
		"fips": 5079,
		"state": "AR",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 5081,
		"state": "AR",
		"area_name": "Little River County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5083,
		"state": "AR",
		"area_name": "Logan County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5085,
		"state": "AR",
		"area_name": "Lonoke County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 5087,
		"state": "AR",
		"area_name": "Madison County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 5089,
		"state": "AR",
		"area_name": "Marion County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 5091,
		"state": "AR",
		"area_name": "Miller County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 5093,
		"state": "AR",
		"area_name": "Mississippi County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 5095,
		"state": "AR",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 5097,
		"state": "AR",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 5099,
		"state": "AR",
		"area_name": "Nevada County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 5101,
		"state": "AR",
		"area_name": "Newton County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 5103,
		"state": "AR",
		"area_name": "Ouachita County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 5105,
		"state": "AR",
		"area_name": "Perry County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 5107,
		"state": "AR",
		"area_name": "Phillips County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 5109,
		"state": "AR",
		"area_name": "Pike County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 5111,
		"state": "AR",
		"area_name": "Poinsett County",
		"bachelorsOrHigher": 8
	},
	{
		"fips": 5113,
		"state": "AR",
		"area_name": "Polk County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 5115,
		"state": "AR",
		"area_name": "Pope County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 5117,
		"state": "AR",
		"area_name": "Prairie County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 5119,
		"state": "AR",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 5121,
		"state": "AR",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 5123,
		"state": "AR",
		"area_name": "St. Francis County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 5125,
		"state": "AR",
		"area_name": "Saline County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 5127,
		"state": "AR",
		"area_name": "Scott County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 5129,
		"state": "AR",
		"area_name": "Searcy County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 5131,
		"state": "AR",
		"area_name": "Sebastian County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 5133,
		"state": "AR",
		"area_name": "Sevier County",
		"bachelorsOrHigher": 8.3
	},
	{
		"fips": 5135,
		"state": "AR",
		"area_name": "Sharp County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 5137,
		"state": "AR",
		"area_name": "Stone County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 5139,
		"state": "AR",
		"area_name": "Union County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 5141,
		"state": "AR",
		"area_name": "Van Buren County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 5143,
		"state": "AR",
		"area_name": "Washington County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 5145,
		"state": "AR",
		"area_name": "White County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 5147,
		"state": "AR",
		"area_name": "Woodruff County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 5149,
		"state": "AR",
		"area_name": "Yell County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 6001,
		"state": "CA",
		"area_name": "Alameda County",
		"bachelorsOrHigher": 42.1
	},
	{
		"fips": 6003,
		"state": "CA",
		"area_name": "Alpine County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 6005,
		"state": "CA",
		"area_name": "Amador County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 6007,
		"state": "CA",
		"area_name": "Butte County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 6009,
		"state": "CA",
		"area_name": "Calaveras County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 6011,
		"state": "CA",
		"area_name": "Colusa County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 6013,
		"state": "CA",
		"area_name": "Contra Costa County",
		"bachelorsOrHigher": 39.4
	},
	{
		"fips": 6015,
		"state": "CA",
		"area_name": "Del Norte County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 6017,
		"state": "CA",
		"area_name": "El Dorado County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 6019,
		"state": "CA",
		"area_name": "Fresno County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 6021,
		"state": "CA",
		"area_name": "Glenn County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 6023,
		"state": "CA",
		"area_name": "Humboldt County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 6025,
		"state": "CA",
		"area_name": "Imperial County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 6027,
		"state": "CA",
		"area_name": "Inyo County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 6029,
		"state": "CA",
		"area_name": "Kern County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 6031,
		"state": "CA",
		"area_name": "Kings County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 6033,
		"state": "CA",
		"area_name": "Lake County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 6035,
		"state": "CA",
		"area_name": "Lassen County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 6037,
		"state": "CA",
		"area_name": "Los Angeles County",
		"bachelorsOrHigher": 29.9
	},
	{
		"fips": 6039,
		"state": "CA",
		"area_name": "Madera County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 6041,
		"state": "CA",
		"area_name": "Marin County",
		"bachelorsOrHigher": 54.8
	},
	{
		"fips": 6043,
		"state": "CA",
		"area_name": "Mariposa County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 6045,
		"state": "CA",
		"area_name": "Mendocino County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 6047,
		"state": "CA",
		"area_name": "Merced County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 6049,
		"state": "CA",
		"area_name": "Modoc County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 6051,
		"state": "CA",
		"area_name": "Mono County",
		"bachelorsOrHigher": 33.3
	},
	{
		"fips": 6053,
		"state": "CA",
		"area_name": "Monterey County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 6055,
		"state": "CA",
		"area_name": "Napa County",
		"bachelorsOrHigher": 31.9
	},
	{
		"fips": 6057,
		"state": "CA",
		"area_name": "Nevada County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 6059,
		"state": "CA",
		"area_name": "Orange County",
		"bachelorsOrHigher": 37.3
	},
	{
		"fips": 6061,
		"state": "CA",
		"area_name": "Placer County",
		"bachelorsOrHigher": 35.7
	},
	{
		"fips": 6063,
		"state": "CA",
		"area_name": "Plumas County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 6065,
		"state": "CA",
		"area_name": "Riverside County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 6067,
		"state": "CA",
		"area_name": "Sacramento County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 6069,
		"state": "CA",
		"area_name": "San Benito County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 6071,
		"state": "CA",
		"area_name": "San Bernardino County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 6073,
		"state": "CA",
		"area_name": "San Diego County",
		"bachelorsOrHigher": 35.1
	},
	{
		"fips": 6075,
		"state": "CA",
		"area_name": "San Francisco County",
		"bachelorsOrHigher": 52.9
	},
	{
		"fips": 6077,
		"state": "CA",
		"area_name": "San Joaquin County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 6079,
		"state": "CA",
		"area_name": "San Luis Obispo County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 6081,
		"state": "CA",
		"area_name": "San Mateo County",
		"bachelorsOrHigher": 45
	},
	{
		"fips": 6083,
		"state": "CA",
		"area_name": "Santa Barbara County",
		"bachelorsOrHigher": 31.4
	},
	{
		"fips": 6085,
		"state": "CA",
		"area_name": "Santa Clara County",
		"bachelorsOrHigher": 47.3
	},
	{
		"fips": 6087,
		"state": "CA",
		"area_name": "Santa Cruz County",
		"bachelorsOrHigher": 37.5
	},
	{
		"fips": 6089,
		"state": "CA",
		"area_name": "Shasta County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 6091,
		"state": "CA",
		"area_name": "Sierra County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 6093,
		"state": "CA",
		"area_name": "Siskiyou County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 6095,
		"state": "CA",
		"area_name": "Solano County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 6097,
		"state": "CA",
		"area_name": "Sonoma County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 6099,
		"state": "CA",
		"area_name": "Stanislaus County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 6101,
		"state": "CA",
		"area_name": "Sutter County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 6103,
		"state": "CA",
		"area_name": "Tehama County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 6105,
		"state": "CA",
		"area_name": "Trinity County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 6107,
		"state": "CA",
		"area_name": "Tulare County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 6109,
		"state": "CA",
		"area_name": "Tuolumne County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 6111,
		"state": "CA",
		"area_name": "Ventura County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 6113,
		"state": "CA",
		"area_name": "Yolo County",
		"bachelorsOrHigher": 38.3
	},
	{
		"fips": 6115,
		"state": "CA",
		"area_name": "Yuba County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 8001,
		"state": "CO",
		"area_name": "Adams County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 8003,
		"state": "CO",
		"area_name": "Alamosa County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 8005,
		"state": "CO",
		"area_name": "Arapahoe County",
		"bachelorsOrHigher": 39.4
	},
	{
		"fips": 8007,
		"state": "CO",
		"area_name": "Archuleta County",
		"bachelorsOrHigher": 35.3
	},
	{
		"fips": 8009,
		"state": "CO",
		"area_name": "Baca County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 8011,
		"state": "CO",
		"area_name": "Bent County",
		"bachelorsOrHigher": 7.5
	},
	{
		"fips": 8013,
		"state": "CO",
		"area_name": "Boulder County",
		"bachelorsOrHigher": 58.2
	},
	{
		"fips": 8014,
		"state": "CO",
		"area_name": "Broomfield County",
		"bachelorsOrHigher": 49.5
	},
	{
		"fips": 8015,
		"state": "CO",
		"area_name": "Chaffee County",
		"bachelorsOrHigher": 34.2
	},
	{
		"fips": 8017,
		"state": "CO",
		"area_name": "Cheyenne County",
		"bachelorsOrHigher": 21.8
	},
	{
		"fips": 8019,
		"state": "CO",
		"area_name": "Clear Creek County",
		"bachelorsOrHigher": 40.8
	},
	{
		"fips": 8021,
		"state": "CO",
		"area_name": "Conejos County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 8023,
		"state": "CO",
		"area_name": "Costilla County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 8025,
		"state": "CO",
		"area_name": "Crowley County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 8027,
		"state": "CO",
		"area_name": "Custer County",
		"bachelorsOrHigher": 34.8
	},
	{
		"fips": 8029,
		"state": "CO",
		"area_name": "Delta County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 8031,
		"state": "CO",
		"area_name": "Denver County",
		"bachelorsOrHigher": 43.7
	},
	{
		"fips": 8033,
		"state": "CO",
		"area_name": "Dolores County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 8035,
		"state": "CO",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 55.9
	},
	{
		"fips": 8037,
		"state": "CO",
		"area_name": "Eagle County",
		"bachelorsOrHigher": 47.3
	},
	{
		"fips": 8039,
		"state": "CO",
		"area_name": "Elbert County",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 8041,
		"state": "CO",
		"area_name": "El Paso County",
		"bachelorsOrHigher": 35.2
	},
	{
		"fips": 8043,
		"state": "CO",
		"area_name": "Fremont County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 8045,
		"state": "CO",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 8047,
		"state": "CO",
		"area_name": "Gilpin County",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 8049,
		"state": "CO",
		"area_name": "Grand County",
		"bachelorsOrHigher": 36.3
	},
	{
		"fips": 8051,
		"state": "CO",
		"area_name": "Gunnison County",
		"bachelorsOrHigher": 54.4
	},
	{
		"fips": 8053,
		"state": "CO",
		"area_name": "Hinsdale County",
		"bachelorsOrHigher": 41.3
	},
	{
		"fips": 8055,
		"state": "CO",
		"area_name": "Huerfano County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 8057,
		"state": "CO",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 8059,
		"state": "CO",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 41.1
	},
	{
		"fips": 8061,
		"state": "CO",
		"area_name": "Kiowa County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 8063,
		"state": "CO",
		"area_name": "Kit Carson County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 8065,
		"state": "CO",
		"area_name": "Lake County",
		"bachelorsOrHigher": 30.3
	},
	{
		"fips": 8067,
		"state": "CO",
		"area_name": "La Plata County",
		"bachelorsOrHigher": 43.4
	},
	{
		"fips": 8069,
		"state": "CO",
		"area_name": "Larimer County",
		"bachelorsOrHigher": 44.1
	},
	{
		"fips": 8071,
		"state": "CO",
		"area_name": "Las Animas County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 8073,
		"state": "CO",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 8075,
		"state": "CO",
		"area_name": "Logan County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 8077,
		"state": "CO",
		"area_name": "Mesa County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 8079,
		"state": "CO",
		"area_name": "Mineral County",
		"bachelorsOrHigher": 39.4
	},
	{
		"fips": 8081,
		"state": "CO",
		"area_name": "Moffat County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 8083,
		"state": "CO",
		"area_name": "Montezuma County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 8085,
		"state": "CO",
		"area_name": "Montrose County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 8087,
		"state": "CO",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 8089,
		"state": "CO",
		"area_name": "Otero County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 8091,
		"state": "CO",
		"area_name": "Ouray County",
		"bachelorsOrHigher": 50
	},
	{
		"fips": 8093,
		"state": "CO",
		"area_name": "Park County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 8095,
		"state": "CO",
		"area_name": "Phillips County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 8097,
		"state": "CO",
		"area_name": "Pitkin County",
		"bachelorsOrHigher": 56.4
	},
	{
		"fips": 8099,
		"state": "CO",
		"area_name": "Prowers County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 8101,
		"state": "CO",
		"area_name": "Pueblo County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 8103,
		"state": "CO",
		"area_name": "Rio Blanco County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 8105,
		"state": "CO",
		"area_name": "Rio Grande County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 8107,
		"state": "CO",
		"area_name": "Routt County",
		"bachelorsOrHigher": 48.7
	},
	{
		"fips": 8109,
		"state": "CO",
		"area_name": "Saguache County",
		"bachelorsOrHigher": 25.7
	},
	{
		"fips": 8111,
		"state": "CO",
		"area_name": "San Juan County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 8113,
		"state": "CO",
		"area_name": "San Miguel County",
		"bachelorsOrHigher": 54.4
	},
	{
		"fips": 8115,
		"state": "CO",
		"area_name": "Sedgwick County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 8117,
		"state": "CO",
		"area_name": "Summit County",
		"bachelorsOrHigher": 48.1
	},
	{
		"fips": 8119,
		"state": "CO",
		"area_name": "Teller County",
		"bachelorsOrHigher": 30.9
	},
	{
		"fips": 8121,
		"state": "CO",
		"area_name": "Washington County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 8123,
		"state": "CO",
		"area_name": "Weld County",
		"bachelorsOrHigher": 25.9
	},
	{
		"fips": 8125,
		"state": "CO",
		"area_name": "Yuma County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 9001,
		"state": "CT",
		"area_name": "Fairfield County",
		"bachelorsOrHigher": 45.4
	},
	{
		"fips": 9003,
		"state": "CT",
		"area_name": "Hartford County",
		"bachelorsOrHigher": 35.6
	},
	{
		"fips": 9005,
		"state": "CT",
		"area_name": "Litchfield County",
		"bachelorsOrHigher": 33.7
	},
	{
		"fips": 9007,
		"state": "CT",
		"area_name": "Middlesex County",
		"bachelorsOrHigher": 39.7
	},
	{
		"fips": 9009,
		"state": "CT",
		"area_name": "New Haven County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 9011,
		"state": "CT",
		"area_name": "New London County",
		"bachelorsOrHigher": 31.5
	},
	{
		"fips": 9013,
		"state": "CT",
		"area_name": "Tolland County",
		"bachelorsOrHigher": 36.8
	},
	{
		"fips": 9015,
		"state": "CT",
		"area_name": "Windham County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 10001,
		"state": "DE",
		"area_name": "Kent County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 10003,
		"state": "DE",
		"area_name": "New Castle County",
		"bachelorsOrHigher": 34.5
	},
	{
		"fips": 10005,
		"state": "DE",
		"area_name": "Sussex County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 11001,
		"state": "DC",
		"area_name": "District of Columbia",
		"bachelorsOrHigher": 53.4
	},
	{
		"fips": 12001,
		"state": "FL",
		"area_name": "Alachua County",
		"bachelorsOrHigher": 40.8
	},
	{
		"fips": 12003,
		"state": "FL",
		"area_name": "Baker County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 12005,
		"state": "FL",
		"area_name": "Bay County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 12007,
		"state": "FL",
		"area_name": "Bradford County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 12009,
		"state": "FL",
		"area_name": "Brevard County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 12011,
		"state": "FL",
		"area_name": "Broward County",
		"bachelorsOrHigher": 30.2
	},
	{
		"fips": 12013,
		"state": "FL",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 12015,
		"state": "FL",
		"area_name": "Charlotte County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 12017,
		"state": "FL",
		"area_name": "Citrus County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 12019,
		"state": "FL",
		"area_name": "Clay County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 12021,
		"state": "FL",
		"area_name": "Collier County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 12023,
		"state": "FL",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 12027,
		"state": "FL",
		"area_name": "DeSoto County",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 12029,
		"state": "FL",
		"area_name": "Dixie County",
		"bachelorsOrHigher": 7.5
	},
	{
		"fips": 12031,
		"state": "FL",
		"area_name": "Duval County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 12033,
		"state": "FL",
		"area_name": "Escambia County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 12035,
		"state": "FL",
		"area_name": "Flagler County",
		"bachelorsOrHigher": 23.4
	},
	{
		"fips": 12037,
		"state": "FL",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 12039,
		"state": "FL",
		"area_name": "Gadsden County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 12041,
		"state": "FL",
		"area_name": "Gilchrist County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 12043,
		"state": "FL",
		"area_name": "Glades County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 12045,
		"state": "FL",
		"area_name": "Gulf County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 12047,
		"state": "FL",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 12049,
		"state": "FL",
		"area_name": "Hardee County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 12051,
		"state": "FL",
		"area_name": "Hendry County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 12053,
		"state": "FL",
		"area_name": "Hernando County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 12055,
		"state": "FL",
		"area_name": "Highlands County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 12057,
		"state": "FL",
		"area_name": "Hillsborough County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 12059,
		"state": "FL",
		"area_name": "Holmes County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 12061,
		"state": "FL",
		"area_name": "Indian River County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 12063,
		"state": "FL",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 12065,
		"state": "FL",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 12067,
		"state": "FL",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 12069,
		"state": "FL",
		"area_name": "Lake County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 12071,
		"state": "FL",
		"area_name": "Lee County",
		"bachelorsOrHigher": 25.3
	},
	{
		"fips": 12073,
		"state": "FL",
		"area_name": "Leon County",
		"bachelorsOrHigher": 44.3
	},
	{
		"fips": 12075,
		"state": "FL",
		"area_name": "Levy County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 12077,
		"state": "FL",
		"area_name": "Liberty County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 12079,
		"state": "FL",
		"area_name": "Madison County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 12081,
		"state": "FL",
		"area_name": "Manatee County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 12083,
		"state": "FL",
		"area_name": "Marion County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 12085,
		"state": "FL",
		"area_name": "Martin County",
		"bachelorsOrHigher": 31.2
	},
	{
		"fips": 12086,
		"state": "FL",
		"area_name": "Miami-Dade County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 12087,
		"state": "FL",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 29.7
	},
	{
		"fips": 12089,
		"state": "FL",
		"area_name": "Nassau County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 12091,
		"state": "FL",
		"area_name": "Okaloosa County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 12093,
		"state": "FL",
		"area_name": "Okeechobee County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 12095,
		"state": "FL",
		"area_name": "Orange County",
		"bachelorsOrHigher": 30.6
	},
	{
		"fips": 12097,
		"state": "FL",
		"area_name": "Osceola County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 12099,
		"state": "FL",
		"area_name": "Palm Beach County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 12101,
		"state": "FL",
		"area_name": "Pasco County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 12103,
		"state": "FL",
		"area_name": "Pinellas County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 12105,
		"state": "FL",
		"area_name": "Polk County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 12107,
		"state": "FL",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 12109,
		"state": "FL",
		"area_name": "St. Johns County",
		"bachelorsOrHigher": 41.4
	},
	{
		"fips": 12111,
		"state": "FL",
		"area_name": "St. Lucie County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 12113,
		"state": "FL",
		"area_name": "Santa Rosa County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 12115,
		"state": "FL",
		"area_name": "Sarasota County",
		"bachelorsOrHigher": 31.1
	},
	{
		"fips": 12117,
		"state": "FL",
		"area_name": "Seminole County",
		"bachelorsOrHigher": 35
	},
	{
		"fips": 12119,
		"state": "FL",
		"area_name": "Sumter County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 12121,
		"state": "FL",
		"area_name": "Suwannee County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 12123,
		"state": "FL",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 12125,
		"state": "FL",
		"area_name": "Union County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 12127,
		"state": "FL",
		"area_name": "Volusia County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 12129,
		"state": "FL",
		"area_name": "Wakulla County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 12131,
		"state": "FL",
		"area_name": "Walton County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 12133,
		"state": "FL",
		"area_name": "Washington County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 13001,
		"state": "GA",
		"area_name": "Appling County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 13003,
		"state": "GA",
		"area_name": "Atkinson County",
		"bachelorsOrHigher": 7.7
	},
	{
		"fips": 13005,
		"state": "GA",
		"area_name": "Bacon County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 13007,
		"state": "GA",
		"area_name": "Baker County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 13009,
		"state": "GA",
		"area_name": "Baldwin County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 13011,
		"state": "GA",
		"area_name": "Banks County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 13013,
		"state": "GA",
		"area_name": "Barrow County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 13015,
		"state": "GA",
		"area_name": "Bartow County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 13017,
		"state": "GA",
		"area_name": "Ben Hill County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 13019,
		"state": "GA",
		"area_name": "Berrien County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 13021,
		"state": "GA",
		"area_name": "Bibb County",
		"bachelorsOrHigher": 23.4
	},
	{
		"fips": 13023,
		"state": "GA",
		"area_name": "Bleckley County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 13025,
		"state": "GA",
		"area_name": "Brantley County",
		"bachelorsOrHigher": 6.9
	},
	{
		"fips": 13027,
		"state": "GA",
		"area_name": "Brooks County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 13029,
		"state": "GA",
		"area_name": "Bryan County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 13031,
		"state": "GA",
		"area_name": "Bulloch County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 13033,
		"state": "GA",
		"area_name": "Burke County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 13035,
		"state": "GA",
		"area_name": "Butts County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 13037,
		"state": "GA",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 13039,
		"state": "GA",
		"area_name": "Camden County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 13043,
		"state": "GA",
		"area_name": "Candler County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 13045,
		"state": "GA",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 13047,
		"state": "GA",
		"area_name": "Catoosa County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 13049,
		"state": "GA",
		"area_name": "Charlton County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 13051,
		"state": "GA",
		"area_name": "Chatham County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 13053,
		"state": "GA",
		"area_name": "Chattahoochee County",
		"bachelorsOrHigher": 31.5
	},
	{
		"fips": 13055,
		"state": "GA",
		"area_name": "Chattooga County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 13057,
		"state": "GA",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 13059,
		"state": "GA",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 39.3
	},
	{
		"fips": 13061,
		"state": "GA",
		"area_name": "Clay County",
		"bachelorsOrHigher": 6.9
	},
	{
		"fips": 13063,
		"state": "GA",
		"area_name": "Clayton County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 13065,
		"state": "GA",
		"area_name": "Clinch County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 13067,
		"state": "GA",
		"area_name": "Cobb County",
		"bachelorsOrHigher": 43.8
	},
	{
		"fips": 13069,
		"state": "GA",
		"area_name": "Coffee County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 13071,
		"state": "GA",
		"area_name": "Colquitt County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 13073,
		"state": "GA",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 34.2
	},
	{
		"fips": 13075,
		"state": "GA",
		"area_name": "Cook County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 13077,
		"state": "GA",
		"area_name": "Coweta County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 13079,
		"state": "GA",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 13081,
		"state": "GA",
		"area_name": "Crisp County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 13083,
		"state": "GA",
		"area_name": "Dade County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 13085,
		"state": "GA",
		"area_name": "Dawson County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 13087,
		"state": "GA",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 13089,
		"state": "GA",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 40.3
	},
	{
		"fips": 13091,
		"state": "GA",
		"area_name": "Dodge County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 13093,
		"state": "GA",
		"area_name": "Dooly County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 13095,
		"state": "GA",
		"area_name": "Dougherty County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 13097,
		"state": "GA",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 13099,
		"state": "GA",
		"area_name": "Early County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 13101,
		"state": "GA",
		"area_name": "Echols County",
		"bachelorsOrHigher": 7.5
	},
	{
		"fips": 13103,
		"state": "GA",
		"area_name": "Effingham County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 13105,
		"state": "GA",
		"area_name": "Elbert County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 13107,
		"state": "GA",
		"area_name": "Emanuel County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 13109,
		"state": "GA",
		"area_name": "Evans County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 13111,
		"state": "GA",
		"area_name": "Fannin County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 13113,
		"state": "GA",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 43.3
	},
	{
		"fips": 13115,
		"state": "GA",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 13117,
		"state": "GA",
		"area_name": "Forsyth County",
		"bachelorsOrHigher": 44.6
	},
	{
		"fips": 13119,
		"state": "GA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 13121,
		"state": "GA",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 48.6
	},
	{
		"fips": 13123,
		"state": "GA",
		"area_name": "Gilmer County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 13125,
		"state": "GA",
		"area_name": "Glascock County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 13127,
		"state": "GA",
		"area_name": "Glynn County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 13129,
		"state": "GA",
		"area_name": "Gordon County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 13131,
		"state": "GA",
		"area_name": "Grady County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 13133,
		"state": "GA",
		"area_name": "Greene County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 13135,
		"state": "GA",
		"area_name": "Gwinnett County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 13137,
		"state": "GA",
		"area_name": "Habersham County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 13139,
		"state": "GA",
		"area_name": "Hall County",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 13141,
		"state": "GA",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 13143,
		"state": "GA",
		"area_name": "Haralson County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 13145,
		"state": "GA",
		"area_name": "Harris County",
		"bachelorsOrHigher": 27.8
	},
	{
		"fips": 13147,
		"state": "GA",
		"area_name": "Hart County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 13149,
		"state": "GA",
		"area_name": "Heard County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 13151,
		"state": "GA",
		"area_name": "Henry County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 13153,
		"state": "GA",
		"area_name": "Houston County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 13155,
		"state": "GA",
		"area_name": "Irwin County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 13157,
		"state": "GA",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 13159,
		"state": "GA",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 13161,
		"state": "GA",
		"area_name": "Jeff Davis County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 13163,
		"state": "GA",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 13165,
		"state": "GA",
		"area_name": "Jenkins County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 13167,
		"state": "GA",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 13169,
		"state": "GA",
		"area_name": "Jones County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 13171,
		"state": "GA",
		"area_name": "Lamar County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 13173,
		"state": "GA",
		"area_name": "Lanier County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 13175,
		"state": "GA",
		"area_name": "Laurens County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 13177,
		"state": "GA",
		"area_name": "Lee County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 13179,
		"state": "GA",
		"area_name": "Liberty County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 13181,
		"state": "GA",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 13183,
		"state": "GA",
		"area_name": "Long County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 13185,
		"state": "GA",
		"area_name": "Lowndes County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 13187,
		"state": "GA",
		"area_name": "Lumpkin County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 13189,
		"state": "GA",
		"area_name": "McDuffie County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 13191,
		"state": "GA",
		"area_name": "McIntosh County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 13193,
		"state": "GA",
		"area_name": "Macon County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 13195,
		"state": "GA",
		"area_name": "Madison County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 13197,
		"state": "GA",
		"area_name": "Marion County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 13199,
		"state": "GA",
		"area_name": "Meriwether County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 13201,
		"state": "GA",
		"area_name": "Miller County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 13205,
		"state": "GA",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 13207,
		"state": "GA",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 13209,
		"state": "GA",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 13211,
		"state": "GA",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 13213,
		"state": "GA",
		"area_name": "Murray County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 13215,
		"state": "GA",
		"area_name": "Muscogee County",
		"bachelorsOrHigher": 23.7
	},
	{
		"fips": 13217,
		"state": "GA",
		"area_name": "Newton County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 13219,
		"state": "GA",
		"area_name": "Oconee County",
		"bachelorsOrHigher": 44.6
	},
	{
		"fips": 13221,
		"state": "GA",
		"area_name": "Oglethorpe County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 13223,
		"state": "GA",
		"area_name": "Paulding County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 13225,
		"state": "GA",
		"area_name": "Peach County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 13227,
		"state": "GA",
		"area_name": "Pickens County",
		"bachelorsOrHigher": 23.7
	},
	{
		"fips": 13229,
		"state": "GA",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 13231,
		"state": "GA",
		"area_name": "Pike County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 13233,
		"state": "GA",
		"area_name": "Polk County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 13235,
		"state": "GA",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 13237,
		"state": "GA",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 13239,
		"state": "GA",
		"area_name": "Quitman County",
		"bachelorsOrHigher": 7.2
	},
	{
		"fips": 13241,
		"state": "GA",
		"area_name": "Rabun County",
		"bachelorsOrHigher": 25.8
	},
	{
		"fips": 13243,
		"state": "GA",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 13245,
		"state": "GA",
		"area_name": "Richmond County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 13247,
		"state": "GA",
		"area_name": "Rockdale County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 13249,
		"state": "GA",
		"area_name": "Schley County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 13251,
		"state": "GA",
		"area_name": "Screven County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 13253,
		"state": "GA",
		"area_name": "Seminole County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 13255,
		"state": "GA",
		"area_name": "Spalding County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 13257,
		"state": "GA",
		"area_name": "Stephens County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 13259,
		"state": "GA",
		"area_name": "Stewart County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 13261,
		"state": "GA",
		"area_name": "Sumter County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 13263,
		"state": "GA",
		"area_name": "Talbot County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 13265,
		"state": "GA",
		"area_name": "Taliaferro County",
		"bachelorsOrHigher": 8.3
	},
	{
		"fips": 13267,
		"state": "GA",
		"area_name": "Tattnall County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 13269,
		"state": "GA",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 13271,
		"state": "GA",
		"area_name": "Telfair County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 13273,
		"state": "GA",
		"area_name": "Terrell County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 13275,
		"state": "GA",
		"area_name": "Thomas County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 13277,
		"state": "GA",
		"area_name": "Tift County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 13279,
		"state": "GA",
		"area_name": "Toombs County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 13281,
		"state": "GA",
		"area_name": "Towns County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 13283,
		"state": "GA",
		"area_name": "Treutlen County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 13285,
		"state": "GA",
		"area_name": "Troup County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 13287,
		"state": "GA",
		"area_name": "Turner County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 13289,
		"state": "GA",
		"area_name": "Twiggs County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 13291,
		"state": "GA",
		"area_name": "Union County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 13293,
		"state": "GA",
		"area_name": "Upson County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 13295,
		"state": "GA",
		"area_name": "Walker County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 13297,
		"state": "GA",
		"area_name": "Walton County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 13299,
		"state": "GA",
		"area_name": "Ware County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 13301,
		"state": "GA",
		"area_name": "Warren County",
		"bachelorsOrHigher": 8
	},
	{
		"fips": 13303,
		"state": "GA",
		"area_name": "Washington County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 13305,
		"state": "GA",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 13307,
		"state": "GA",
		"area_name": "Webster County",
		"bachelorsOrHigher": 6
	},
	{
		"fips": 13309,
		"state": "GA",
		"area_name": "Wheeler County",
		"bachelorsOrHigher": 8.1
	},
	{
		"fips": 13311,
		"state": "GA",
		"area_name": "White County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 13313,
		"state": "GA",
		"area_name": "Whitfield County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 13315,
		"state": "GA",
		"area_name": "Wilcox County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 13317,
		"state": "GA",
		"area_name": "Wilkes County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 13319,
		"state": "GA",
		"area_name": "Wilkinson County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 13321,
		"state": "GA",
		"area_name": "Worth County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 15001,
		"state": "HI",
		"area_name": "Hawaii County",
		"bachelorsOrHigher": 25.9
	},
	{
		"fips": 15003,
		"state": "HI",
		"area_name": "Honolulu County",
		"bachelorsOrHigher": 32.5
	},
	{
		"fips": 15005,
		"state": "HI",
		"area_name": "Kalawao County",
		"bachelorsOrHigher": 43.3
	},
	{
		"fips": 15007,
		"state": "HI",
		"area_name": "Kauai County",
		"bachelorsOrHigher": 26.9
	},
	{
		"fips": 15009,
		"state": "HI",
		"area_name": "Maui County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 16001,
		"state": "ID",
		"area_name": "Ada County",
		"bachelorsOrHigher": 36.4
	},
	{
		"fips": 16003,
		"state": "ID",
		"area_name": "Adams County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 16005,
		"state": "ID",
		"area_name": "Bannock County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 16007,
		"state": "ID",
		"area_name": "Bear Lake County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 16009,
		"state": "ID",
		"area_name": "Benewah County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 16011,
		"state": "ID",
		"area_name": "Bingham County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 16013,
		"state": "ID",
		"area_name": "Blaine County",
		"bachelorsOrHigher": 44.8
	},
	{
		"fips": 16015,
		"state": "ID",
		"area_name": "Boise County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 16017,
		"state": "ID",
		"area_name": "Bonner County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 16019,
		"state": "ID",
		"area_name": "Bonneville County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 16021,
		"state": "ID",
		"area_name": "Boundary County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 16023,
		"state": "ID",
		"area_name": "Butte County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 16025,
		"state": "ID",
		"area_name": "Camas County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 16027,
		"state": "ID",
		"area_name": "Canyon County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 16029,
		"state": "ID",
		"area_name": "Caribou County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 16031,
		"state": "ID",
		"area_name": "Cassia County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 16033,
		"state": "ID",
		"area_name": "Clark County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 16035,
		"state": "ID",
		"area_name": "Clearwater County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 16037,
		"state": "ID",
		"area_name": "Custer County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 16039,
		"state": "ID",
		"area_name": "Elmore County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 16041,
		"state": "ID",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 16043,
		"state": "ID",
		"area_name": "Fremont County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 16045,
		"state": "ID",
		"area_name": "Gem County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 16047,
		"state": "ID",
		"area_name": "Gooding County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 16049,
		"state": "ID",
		"area_name": "Idaho County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 16051,
		"state": "ID",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 16053,
		"state": "ID",
		"area_name": "Jerome County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 16055,
		"state": "ID",
		"area_name": "Kootenai County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 16057,
		"state": "ID",
		"area_name": "Latah County",
		"bachelorsOrHigher": 44
	},
	{
		"fips": 16059,
		"state": "ID",
		"area_name": "Lemhi County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 16061,
		"state": "ID",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 16063,
		"state": "ID",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 16065,
		"state": "ID",
		"area_name": "Madison County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 16067,
		"state": "ID",
		"area_name": "Minidoka County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 16069,
		"state": "ID",
		"area_name": "Nez Perce County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 16071,
		"state": "ID",
		"area_name": "Oneida County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 16073,
		"state": "ID",
		"area_name": "Owyhee County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 16075,
		"state": "ID",
		"area_name": "Payette County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 16077,
		"state": "ID",
		"area_name": "Power County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 16079,
		"state": "ID",
		"area_name": "Shoshone County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 16081,
		"state": "ID",
		"area_name": "Teton County",
		"bachelorsOrHigher": 38.2
	},
	{
		"fips": 16083,
		"state": "ID",
		"area_name": "Twin Falls County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 16085,
		"state": "ID",
		"area_name": "Valley County",
		"bachelorsOrHigher": 34
	},
	{
		"fips": 16087,
		"state": "ID",
		"area_name": "Washington County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 17001,
		"state": "IL",
		"area_name": "Adams County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 17003,
		"state": "IL",
		"area_name": "Alexander County",
		"bachelorsOrHigher": 7.7
	},
	{
		"fips": 17005,
		"state": "IL",
		"area_name": "Bond County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 17007,
		"state": "IL",
		"area_name": "Boone County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 17009,
		"state": "IL",
		"area_name": "Brown County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 17011,
		"state": "IL",
		"area_name": "Bureau County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 17013,
		"state": "IL",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 17015,
		"state": "IL",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 17017,
		"state": "IL",
		"area_name": "Cass County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 17019,
		"state": "IL",
		"area_name": "Champaign County",
		"bachelorsOrHigher": 42.5
	},
	{
		"fips": 17021,
		"state": "IL",
		"area_name": "Christian County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 17023,
		"state": "IL",
		"area_name": "Clark County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 17025,
		"state": "IL",
		"area_name": "Clay County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 17027,
		"state": "IL",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 17029,
		"state": "IL",
		"area_name": "Coles County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 17031,
		"state": "IL",
		"area_name": "Cook County",
		"bachelorsOrHigher": 35.3
	},
	{
		"fips": 17033,
		"state": "IL",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 17035,
		"state": "IL",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 17037,
		"state": "IL",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 29.9
	},
	{
		"fips": 17039,
		"state": "IL",
		"area_name": "De Witt County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 17041,
		"state": "IL",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 17043,
		"state": "IL",
		"area_name": "DuPage County",
		"bachelorsOrHigher": 46.7
	},
	{
		"fips": 17045,
		"state": "IL",
		"area_name": "Edgar County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 17047,
		"state": "IL",
		"area_name": "Edwards County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 17049,
		"state": "IL",
		"area_name": "Effingham County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 17051,
		"state": "IL",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 17053,
		"state": "IL",
		"area_name": "Ford County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 17055,
		"state": "IL",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 17057,
		"state": "IL",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 17059,
		"state": "IL",
		"area_name": "Gallatin County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 17061,
		"state": "IL",
		"area_name": "Greene County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 17063,
		"state": "IL",
		"area_name": "Grundy County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 17065,
		"state": "IL",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 17067,
		"state": "IL",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 17069,
		"state": "IL",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 17071,
		"state": "IL",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 17073,
		"state": "IL",
		"area_name": "Henry County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 17075,
		"state": "IL",
		"area_name": "Iroquois County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 17077,
		"state": "IL",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 33.8
	},
	{
		"fips": 17079,
		"state": "IL",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 17081,
		"state": "IL",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 17083,
		"state": "IL",
		"area_name": "Jersey County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 17085,
		"state": "IL",
		"area_name": "Jo Daviess County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 17087,
		"state": "IL",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 17089,
		"state": "IL",
		"area_name": "Kane County",
		"bachelorsOrHigher": 31.8
	},
	{
		"fips": 17091,
		"state": "IL",
		"area_name": "Kankakee County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 17093,
		"state": "IL",
		"area_name": "Kendall County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 17095,
		"state": "IL",
		"area_name": "Knox County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 17097,
		"state": "IL",
		"area_name": "Lake County",
		"bachelorsOrHigher": 42.7
	},
	{
		"fips": 17099,
		"state": "IL",
		"area_name": "La Salle County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 17101,
		"state": "IL",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 17103,
		"state": "IL",
		"area_name": "Lee County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 17105,
		"state": "IL",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 17107,
		"state": "IL",
		"area_name": "Logan County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 17109,
		"state": "IL",
		"area_name": "McDonough County",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 17111,
		"state": "IL",
		"area_name": "McHenry County",
		"bachelorsOrHigher": 32.2
	},
	{
		"fips": 17113,
		"state": "IL",
		"area_name": "McLean County",
		"bachelorsOrHigher": 43.4
	},
	{
		"fips": 17115,
		"state": "IL",
		"area_name": "Macon County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 17117,
		"state": "IL",
		"area_name": "Macoupin County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 17119,
		"state": "IL",
		"area_name": "Madison County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 17121,
		"state": "IL",
		"area_name": "Marion County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 17123,
		"state": "IL",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 17125,
		"state": "IL",
		"area_name": "Mason County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 17127,
		"state": "IL",
		"area_name": "Massac County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 17129,
		"state": "IL",
		"area_name": "Menard County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 17131,
		"state": "IL",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 17133,
		"state": "IL",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 17135,
		"state": "IL",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 17137,
		"state": "IL",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 17139,
		"state": "IL",
		"area_name": "Moultrie County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 17141,
		"state": "IL",
		"area_name": "Ogle County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 17143,
		"state": "IL",
		"area_name": "Peoria County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 17145,
		"state": "IL",
		"area_name": "Perry County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 17147,
		"state": "IL",
		"area_name": "Piatt County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 17149,
		"state": "IL",
		"area_name": "Pike County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 17151,
		"state": "IL",
		"area_name": "Pope County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 17153,
		"state": "IL",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 17155,
		"state": "IL",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 17157,
		"state": "IL",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 17159,
		"state": "IL",
		"area_name": "Richland County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 17161,
		"state": "IL",
		"area_name": "Rock Island County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 17163,
		"state": "IL",
		"area_name": "St. Clair County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 17165,
		"state": "IL",
		"area_name": "Saline County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 17167,
		"state": "IL",
		"area_name": "Sangamon County",
		"bachelorsOrHigher": 33
	},
	{
		"fips": 17169,
		"state": "IL",
		"area_name": "Schuyler County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 17171,
		"state": "IL",
		"area_name": "Scott County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 17173,
		"state": "IL",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 17175,
		"state": "IL",
		"area_name": "Stark County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 17177,
		"state": "IL",
		"area_name": "Stephenson County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 17179,
		"state": "IL",
		"area_name": "Tazewell County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 17181,
		"state": "IL",
		"area_name": "Union County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 17183,
		"state": "IL",
		"area_name": "Vermilion County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 17185,
		"state": "IL",
		"area_name": "Wabash County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 17187,
		"state": "IL",
		"area_name": "Warren County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 17189,
		"state": "IL",
		"area_name": "Washington County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 17191,
		"state": "IL",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 17193,
		"state": "IL",
		"area_name": "White County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 17195,
		"state": "IL",
		"area_name": "Whiteside County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 17197,
		"state": "IL",
		"area_name": "Will County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 17199,
		"state": "IL",
		"area_name": "Williamson County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 17201,
		"state": "IL",
		"area_name": "Winnebago County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 17203,
		"state": "IL",
		"area_name": "Woodford County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 18001,
		"state": "IN",
		"area_name": "Adams County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 18003,
		"state": "IN",
		"area_name": "Allen County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 18005,
		"state": "IN",
		"area_name": "Bartholomew County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 18007,
		"state": "IN",
		"area_name": "Benton County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 18009,
		"state": "IN",
		"area_name": "Blackford County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 18011,
		"state": "IN",
		"area_name": "Boone County",
		"bachelorsOrHigher": 42.5
	},
	{
		"fips": 18013,
		"state": "IN",
		"area_name": "Brown County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 18015,
		"state": "IN",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 18017,
		"state": "IN",
		"area_name": "Cass County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 18019,
		"state": "IN",
		"area_name": "Clark County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 18021,
		"state": "IN",
		"area_name": "Clay County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 18023,
		"state": "IN",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 18025,
		"state": "IN",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 18027,
		"state": "IN",
		"area_name": "Daviess County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 18029,
		"state": "IN",
		"area_name": "Dearborn County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 18031,
		"state": "IN",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 18033,
		"state": "IN",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 18035,
		"state": "IN",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 18037,
		"state": "IN",
		"area_name": "Dubois County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 18039,
		"state": "IN",
		"area_name": "Elkhart County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 18041,
		"state": "IN",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 18043,
		"state": "IN",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 18045,
		"state": "IN",
		"area_name": "Fountain County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 18047,
		"state": "IN",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 18049,
		"state": "IN",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 18051,
		"state": "IN",
		"area_name": "Gibson County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 18053,
		"state": "IN",
		"area_name": "Grant County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 18055,
		"state": "IN",
		"area_name": "Greene County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 18057,
		"state": "IN",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 55.6
	},
	{
		"fips": 18059,
		"state": "IN",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 18061,
		"state": "IN",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 18063,
		"state": "IN",
		"area_name": "Hendricks County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 18065,
		"state": "IN",
		"area_name": "Henry County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 18067,
		"state": "IN",
		"area_name": "Howard County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 18069,
		"state": "IN",
		"area_name": "Huntington County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 18071,
		"state": "IN",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 18073,
		"state": "IN",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 18075,
		"state": "IN",
		"area_name": "Jay County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 18077,
		"state": "IN",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 18079,
		"state": "IN",
		"area_name": "Jennings County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 18081,
		"state": "IN",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 18083,
		"state": "IN",
		"area_name": "Knox County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 18085,
		"state": "IN",
		"area_name": "Kosciusko County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 18087,
		"state": "IN",
		"area_name": "LaGrange County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 18089,
		"state": "IN",
		"area_name": "Lake County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 18091,
		"state": "IN",
		"area_name": "LaPorte County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 18093,
		"state": "IN",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 18095,
		"state": "IN",
		"area_name": "Madison County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 18097,
		"state": "IN",
		"area_name": "Marion County",
		"bachelorsOrHigher": 27.7
	},
	{
		"fips": 18099,
		"state": "IN",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 18101,
		"state": "IN",
		"area_name": "Martin County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 18103,
		"state": "IN",
		"area_name": "Miami County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 18105,
		"state": "IN",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 44.2
	},
	{
		"fips": 18107,
		"state": "IN",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 18109,
		"state": "IN",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 18111,
		"state": "IN",
		"area_name": "Newton County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 18113,
		"state": "IN",
		"area_name": "Noble County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 18115,
		"state": "IN",
		"area_name": "Ohio County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 18117,
		"state": "IN",
		"area_name": "Orange County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 18119,
		"state": "IN",
		"area_name": "Owen County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 18121,
		"state": "IN",
		"area_name": "Parke County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 18123,
		"state": "IN",
		"area_name": "Perry County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 18125,
		"state": "IN",
		"area_name": "Pike County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 18127,
		"state": "IN",
		"area_name": "Porter County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 18129,
		"state": "IN",
		"area_name": "Posey County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 18131,
		"state": "IN",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 18133,
		"state": "IN",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 18135,
		"state": "IN",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 18137,
		"state": "IN",
		"area_name": "Ripley County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 18139,
		"state": "IN",
		"area_name": "Rush County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 18141,
		"state": "IN",
		"area_name": "St. Joseph County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 18143,
		"state": "IN",
		"area_name": "Scott County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 18145,
		"state": "IN",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 18147,
		"state": "IN",
		"area_name": "Spencer County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 18149,
		"state": "IN",
		"area_name": "Starke County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 18151,
		"state": "IN",
		"area_name": "Steuben County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 18153,
		"state": "IN",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 18155,
		"state": "IN",
		"area_name": "Switzerland County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 18157,
		"state": "IN",
		"area_name": "Tippecanoe County",
		"bachelorsOrHigher": 35.2
	},
	{
		"fips": 18159,
		"state": "IN",
		"area_name": "Tipton County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 18161,
		"state": "IN",
		"area_name": "Union County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 18163,
		"state": "IN",
		"area_name": "Vanderburgh County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 18165,
		"state": "IN",
		"area_name": "Vermillion County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 18167,
		"state": "IN",
		"area_name": "Vigo County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 18169,
		"state": "IN",
		"area_name": "Wabash County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 18171,
		"state": "IN",
		"area_name": "Warren County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 18173,
		"state": "IN",
		"area_name": "Warrick County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 18175,
		"state": "IN",
		"area_name": "Washington County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 18177,
		"state": "IN",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 18179,
		"state": "IN",
		"area_name": "Wells County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 18181,
		"state": "IN",
		"area_name": "White County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 18183,
		"state": "IN",
		"area_name": "Whitley County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 19001,
		"state": "IA",
		"area_name": "Adair County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 19003,
		"state": "IA",
		"area_name": "Adams County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 19005,
		"state": "IA",
		"area_name": "Allamakee County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 19007,
		"state": "IA",
		"area_name": "Appanoose County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 19009,
		"state": "IA",
		"area_name": "Audubon County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 19011,
		"state": "IA",
		"area_name": "Benton County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 19013,
		"state": "IA",
		"area_name": "Black Hawk County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 19015,
		"state": "IA",
		"area_name": "Boone County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 19017,
		"state": "IA",
		"area_name": "Bremer County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 19019,
		"state": "IA",
		"area_name": "Buchanan County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 19021,
		"state": "IA",
		"area_name": "Buena Vista County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 19023,
		"state": "IA",
		"area_name": "Butler County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 19025,
		"state": "IA",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 19027,
		"state": "IA",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 19029,
		"state": "IA",
		"area_name": "Cass County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 19031,
		"state": "IA",
		"area_name": "Cedar County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 19033,
		"state": "IA",
		"area_name": "Cerro Gordo County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 19035,
		"state": "IA",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 19037,
		"state": "IA",
		"area_name": "Chickasaw County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 19039,
		"state": "IA",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 19041,
		"state": "IA",
		"area_name": "Clay County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 19043,
		"state": "IA",
		"area_name": "Clayton County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 19045,
		"state": "IA",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 19047,
		"state": "IA",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 19049,
		"state": "IA",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 43.7
	},
	{
		"fips": 19051,
		"state": "IA",
		"area_name": "Davis County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 19053,
		"state": "IA",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 19055,
		"state": "IA",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 19057,
		"state": "IA",
		"area_name": "Des Moines County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 19059,
		"state": "IA",
		"area_name": "Dickinson County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 19061,
		"state": "IA",
		"area_name": "Dubuque County",
		"bachelorsOrHigher": 27.8
	},
	{
		"fips": 19063,
		"state": "IA",
		"area_name": "Emmet County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 19065,
		"state": "IA",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 19067,
		"state": "IA",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 19069,
		"state": "IA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 19071,
		"state": "IA",
		"area_name": "Fremont County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 19073,
		"state": "IA",
		"area_name": "Greene County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 19075,
		"state": "IA",
		"area_name": "Grundy County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 19077,
		"state": "IA",
		"area_name": "Guthrie County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 19079,
		"state": "IA",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 19081,
		"state": "IA",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 19083,
		"state": "IA",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 19085,
		"state": "IA",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 19087,
		"state": "IA",
		"area_name": "Henry County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 19089,
		"state": "IA",
		"area_name": "Howard County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 19091,
		"state": "IA",
		"area_name": "Humboldt County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 19093,
		"state": "IA",
		"area_name": "Ida County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 19095,
		"state": "IA",
		"area_name": "Iowa County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 19097,
		"state": "IA",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 19099,
		"state": "IA",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 19101,
		"state": "IA",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 33
	},
	{
		"fips": 19103,
		"state": "IA",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 51.7
	},
	{
		"fips": 19105,
		"state": "IA",
		"area_name": "Jones County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 19107,
		"state": "IA",
		"area_name": "Keokuk County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 19109,
		"state": "IA",
		"area_name": "Kossuth County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 19111,
		"state": "IA",
		"area_name": "Lee County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 19113,
		"state": "IA",
		"area_name": "Linn County",
		"bachelorsOrHigher": 31.7
	},
	{
		"fips": 19115,
		"state": "IA",
		"area_name": "Louisa County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 19117,
		"state": "IA",
		"area_name": "Lucas County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 19119,
		"state": "IA",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 19121,
		"state": "IA",
		"area_name": "Madison County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 19123,
		"state": "IA",
		"area_name": "Mahaska County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 19125,
		"state": "IA",
		"area_name": "Marion County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 19127,
		"state": "IA",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 19129,
		"state": "IA",
		"area_name": "Mills County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 19131,
		"state": "IA",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 19133,
		"state": "IA",
		"area_name": "Monona County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 19135,
		"state": "IA",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 19137,
		"state": "IA",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 19139,
		"state": "IA",
		"area_name": "Muscatine County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 19141,
		"state": "IA",
		"area_name": "O'Brien County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 19143,
		"state": "IA",
		"area_name": "Osceola County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 19145,
		"state": "IA",
		"area_name": "Page County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 19147,
		"state": "IA",
		"area_name": "Palo Alto County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 19149,
		"state": "IA",
		"area_name": "Plymouth County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 19151,
		"state": "IA",
		"area_name": "Pocahontas County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 19153,
		"state": "IA",
		"area_name": "Polk County",
		"bachelorsOrHigher": 35.4
	},
	{
		"fips": 19155,
		"state": "IA",
		"area_name": "Pottawattamie County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 19157,
		"state": "IA",
		"area_name": "Poweshiek County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 19159,
		"state": "IA",
		"area_name": "Ringgold County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 19161,
		"state": "IA",
		"area_name": "Sac County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 19163,
		"state": "IA",
		"area_name": "Scott County",
		"bachelorsOrHigher": 31.9
	},
	{
		"fips": 19165,
		"state": "IA",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 19167,
		"state": "IA",
		"area_name": "Sioux County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 19169,
		"state": "IA",
		"area_name": "Story County",
		"bachelorsOrHigher": 48.5
	},
	{
		"fips": 19171,
		"state": "IA",
		"area_name": "Tama County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 19173,
		"state": "IA",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 19175,
		"state": "IA",
		"area_name": "Union County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 19177,
		"state": "IA",
		"area_name": "Van Buren County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 19179,
		"state": "IA",
		"area_name": "Wapello County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 19181,
		"state": "IA",
		"area_name": "Warren County",
		"bachelorsOrHigher": 28.5
	},
	{
		"fips": 19183,
		"state": "IA",
		"area_name": "Washington County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 19185,
		"state": "IA",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 19187,
		"state": "IA",
		"area_name": "Webster County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 19189,
		"state": "IA",
		"area_name": "Winnebago County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 19191,
		"state": "IA",
		"area_name": "Winneshiek County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 19193,
		"state": "IA",
		"area_name": "Woodbury County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 19195,
		"state": "IA",
		"area_name": "Worth County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 19197,
		"state": "IA",
		"area_name": "Wright County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 20001,
		"state": "KS",
		"area_name": "Allen County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 20003,
		"state": "KS",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 20005,
		"state": "KS",
		"area_name": "Atchison County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 20007,
		"state": "KS",
		"area_name": "Barber County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 20009,
		"state": "KS",
		"area_name": "Barton County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 20011,
		"state": "KS",
		"area_name": "Bourbon County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 20013,
		"state": "KS",
		"area_name": "Brown County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 20015,
		"state": "KS",
		"area_name": "Butler County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 20017,
		"state": "KS",
		"area_name": "Chase County",
		"bachelorsOrHigher": 24.7
	},
	{
		"fips": 20019,
		"state": "KS",
		"area_name": "Chautauqua County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 20021,
		"state": "KS",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 20023,
		"state": "KS",
		"area_name": "Cheyenne County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 20025,
		"state": "KS",
		"area_name": "Clark County",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 20027,
		"state": "KS",
		"area_name": "Clay County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 20029,
		"state": "KS",
		"area_name": "Cloud County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 20031,
		"state": "KS",
		"area_name": "Coffey County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 20033,
		"state": "KS",
		"area_name": "Comanche County",
		"bachelorsOrHigher": 26
	},
	{
		"fips": 20035,
		"state": "KS",
		"area_name": "Cowley County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 20037,
		"state": "KS",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 20039,
		"state": "KS",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 20041,
		"state": "KS",
		"area_name": "Dickinson County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 20043,
		"state": "KS",
		"area_name": "Doniphan County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 20045,
		"state": "KS",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 49.4
	},
	{
		"fips": 20047,
		"state": "KS",
		"area_name": "Edwards County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 20049,
		"state": "KS",
		"area_name": "Elk County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 20051,
		"state": "KS",
		"area_name": "Ellis County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 20053,
		"state": "KS",
		"area_name": "Ellsworth County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 20055,
		"state": "KS",
		"area_name": "Finney County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 20057,
		"state": "KS",
		"area_name": "Ford County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 20059,
		"state": "KS",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 20061,
		"state": "KS",
		"area_name": "Geary County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 20063,
		"state": "KS",
		"area_name": "Gove County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 20065,
		"state": "KS",
		"area_name": "Graham County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 20067,
		"state": "KS",
		"area_name": "Grant County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 20069,
		"state": "KS",
		"area_name": "Gray County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 20071,
		"state": "KS",
		"area_name": "Greeley County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 20073,
		"state": "KS",
		"area_name": "Greenwood County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 20075,
		"state": "KS",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 20077,
		"state": "KS",
		"area_name": "Harper County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 20079,
		"state": "KS",
		"area_name": "Harvey County",
		"bachelorsOrHigher": 25.8
	},
	{
		"fips": 20081,
		"state": "KS",
		"area_name": "Haskell County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 20083,
		"state": "KS",
		"area_name": "Hodgeman County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 20085,
		"state": "KS",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 20087,
		"state": "KS",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 20089,
		"state": "KS",
		"area_name": "Jewell County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 20091,
		"state": "KS",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 52.1
	},
	{
		"fips": 20093,
		"state": "KS",
		"area_name": "Kearny County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 20095,
		"state": "KS",
		"area_name": "Kingman County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 20097,
		"state": "KS",
		"area_name": "Kiowa County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 20099,
		"state": "KS",
		"area_name": "Labette County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 20101,
		"state": "KS",
		"area_name": "Lane County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 20103,
		"state": "KS",
		"area_name": "Leavenworth County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 20105,
		"state": "KS",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 20107,
		"state": "KS",
		"area_name": "Linn County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 20109,
		"state": "KS",
		"area_name": "Logan County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 20111,
		"state": "KS",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 20113,
		"state": "KS",
		"area_name": "McPherson County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 20115,
		"state": "KS",
		"area_name": "Marion County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 20117,
		"state": "KS",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 20119,
		"state": "KS",
		"area_name": "Meade County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 20121,
		"state": "KS",
		"area_name": "Miami County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 20123,
		"state": "KS",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 20125,
		"state": "KS",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 20127,
		"state": "KS",
		"area_name": "Morris County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 20129,
		"state": "KS",
		"area_name": "Morton County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 20131,
		"state": "KS",
		"area_name": "Nemaha County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 20133,
		"state": "KS",
		"area_name": "Neosho County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 20135,
		"state": "KS",
		"area_name": "Ness County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 20137,
		"state": "KS",
		"area_name": "Norton County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 20139,
		"state": "KS",
		"area_name": "Osage County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 20141,
		"state": "KS",
		"area_name": "Osborne County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 20143,
		"state": "KS",
		"area_name": "Ottawa County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 20145,
		"state": "KS",
		"area_name": "Pawnee County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 20147,
		"state": "KS",
		"area_name": "Phillips County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 20149,
		"state": "KS",
		"area_name": "Pottawatomie County",
		"bachelorsOrHigher": 32.2
	},
	{
		"fips": 20151,
		"state": "KS",
		"area_name": "Pratt County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 20153,
		"state": "KS",
		"area_name": "Rawlins County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 20155,
		"state": "KS",
		"area_name": "Reno County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 20157,
		"state": "KS",
		"area_name": "Republic County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 20159,
		"state": "KS",
		"area_name": "Rice County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 20161,
		"state": "KS",
		"area_name": "Riley County",
		"bachelorsOrHigher": 45.5
	},
	{
		"fips": 20163,
		"state": "KS",
		"area_name": "Rooks County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 20165,
		"state": "KS",
		"area_name": "Rush County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 20167,
		"state": "KS",
		"area_name": "Russell County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 20169,
		"state": "KS",
		"area_name": "Saline County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 20171,
		"state": "KS",
		"area_name": "Scott County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 20173,
		"state": "KS",
		"area_name": "Sedgwick County",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 20175,
		"state": "KS",
		"area_name": "Seward County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 20177,
		"state": "KS",
		"area_name": "Shawnee County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 20179,
		"state": "KS",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 20181,
		"state": "KS",
		"area_name": "Sherman County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 20183,
		"state": "KS",
		"area_name": "Smith County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 20185,
		"state": "KS",
		"area_name": "Stafford County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 20187,
		"state": "KS",
		"area_name": "Stanton County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 20189,
		"state": "KS",
		"area_name": "Stevens County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 20191,
		"state": "KS",
		"area_name": "Sumner County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 20193,
		"state": "KS",
		"area_name": "Thomas County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 20195,
		"state": "KS",
		"area_name": "Trego County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 20197,
		"state": "KS",
		"area_name": "Wabaunsee County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 20199,
		"state": "KS",
		"area_name": "Wallace County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 20201,
		"state": "KS",
		"area_name": "Washington County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 20203,
		"state": "KS",
		"area_name": "Wichita County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 20205,
		"state": "KS",
		"area_name": "Wilson County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 20207,
		"state": "KS",
		"area_name": "Woodson County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 20209,
		"state": "KS",
		"area_name": "Wyandotte County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 21001,
		"state": "KY",
		"area_name": "Adair County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 21003,
		"state": "KY",
		"area_name": "Allen County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 21005,
		"state": "KY",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 21007,
		"state": "KY",
		"area_name": "Ballard County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 21009,
		"state": "KY",
		"area_name": "Barren County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 21011,
		"state": "KY",
		"area_name": "Bath County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 21013,
		"state": "KY",
		"area_name": "Bell County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21015,
		"state": "KY",
		"area_name": "Boone County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 21017,
		"state": "KY",
		"area_name": "Bourbon County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 21019,
		"state": "KY",
		"area_name": "Boyd County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 21021,
		"state": "KY",
		"area_name": "Boyle County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 21023,
		"state": "KY",
		"area_name": "Bracken County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 21025,
		"state": "KY",
		"area_name": "Breathitt County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 21027,
		"state": "KY",
		"area_name": "Breckinridge County",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 21029,
		"state": "KY",
		"area_name": "Bullitt County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 21031,
		"state": "KY",
		"area_name": "Butler County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 21033,
		"state": "KY",
		"area_name": "Caldwell County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 21035,
		"state": "KY",
		"area_name": "Calloway County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 21037,
		"state": "KY",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 21039,
		"state": "KY",
		"area_name": "Carlisle County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 21041,
		"state": "KY",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21043,
		"state": "KY",
		"area_name": "Carter County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21045,
		"state": "KY",
		"area_name": "Casey County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 21047,
		"state": "KY",
		"area_name": "Christian County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 21049,
		"state": "KY",
		"area_name": "Clark County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 21051,
		"state": "KY",
		"area_name": "Clay County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 21053,
		"state": "KY",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 21055,
		"state": "KY",
		"area_name": "Crittenden County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 21057,
		"state": "KY",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 21059,
		"state": "KY",
		"area_name": "Daviess County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 21061,
		"state": "KY",
		"area_name": "Edmonson County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 21063,
		"state": "KY",
		"area_name": "Elliott County",
		"bachelorsOrHigher": 6.4
	},
	{
		"fips": 21065,
		"state": "KY",
		"area_name": "Estill County",
		"bachelorsOrHigher": 8.4
	},
	{
		"fips": 21067,
		"state": "KY",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 40.2
	},
	{
		"fips": 21069,
		"state": "KY",
		"area_name": "Fleming County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 21071,
		"state": "KY",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 21073,
		"state": "KY",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 21075,
		"state": "KY",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 21077,
		"state": "KY",
		"area_name": "Gallatin County",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 21079,
		"state": "KY",
		"area_name": "Garrard County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 21081,
		"state": "KY",
		"area_name": "Grant County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 21083,
		"state": "KY",
		"area_name": "Graves County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 21085,
		"state": "KY",
		"area_name": "Grayson County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 21087,
		"state": "KY",
		"area_name": "Green County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 21089,
		"state": "KY",
		"area_name": "Greenup County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 21091,
		"state": "KY",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 21093,
		"state": "KY",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 21095,
		"state": "KY",
		"area_name": "Harlan County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21097,
		"state": "KY",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 21099,
		"state": "KY",
		"area_name": "Hart County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 21101,
		"state": "KY",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 21103,
		"state": "KY",
		"area_name": "Henry County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 21105,
		"state": "KY",
		"area_name": "Hickman County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 21107,
		"state": "KY",
		"area_name": "Hopkins County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 21109,
		"state": "KY",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 21111,
		"state": "KY",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 21113,
		"state": "KY",
		"area_name": "Jessamine County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 21115,
		"state": "KY",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 21117,
		"state": "KY",
		"area_name": "Kenton County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 21119,
		"state": "KY",
		"area_name": "Knott County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 21121,
		"state": "KY",
		"area_name": "Knox County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21123,
		"state": "KY",
		"area_name": "Larue County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 21125,
		"state": "KY",
		"area_name": "Laurel County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 21127,
		"state": "KY",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 21129,
		"state": "KY",
		"area_name": "Lee County",
		"bachelorsOrHigher": 7
	},
	{
		"fips": 21131,
		"state": "KY",
		"area_name": "Leslie County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 21133,
		"state": "KY",
		"area_name": "Letcher County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 21135,
		"state": "KY",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 21137,
		"state": "KY",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21139,
		"state": "KY",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 21141,
		"state": "KY",
		"area_name": "Logan County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 21143,
		"state": "KY",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 21145,
		"state": "KY",
		"area_name": "McCracken County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 21147,
		"state": "KY",
		"area_name": "McCreary County",
		"bachelorsOrHigher": 7.5
	},
	{
		"fips": 21149,
		"state": "KY",
		"area_name": "McLean County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21151,
		"state": "KY",
		"area_name": "Madison County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 21153,
		"state": "KY",
		"area_name": "Magoffin County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 21155,
		"state": "KY",
		"area_name": "Marion County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 21157,
		"state": "KY",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 21159,
		"state": "KY",
		"area_name": "Martin County",
		"bachelorsOrHigher": 7.3
	},
	{
		"fips": 21161,
		"state": "KY",
		"area_name": "Mason County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 21163,
		"state": "KY",
		"area_name": "Meade County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 21165,
		"state": "KY",
		"area_name": "Menifee County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 21167,
		"state": "KY",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 21169,
		"state": "KY",
		"area_name": "Metcalfe County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21171,
		"state": "KY",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 21173,
		"state": "KY",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 21175,
		"state": "KY",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 21177,
		"state": "KY",
		"area_name": "Muhlenberg County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 21179,
		"state": "KY",
		"area_name": "Nelson County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 21181,
		"state": "KY",
		"area_name": "Nicholas County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 21183,
		"state": "KY",
		"area_name": "Ohio County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 21185,
		"state": "KY",
		"area_name": "Oldham County",
		"bachelorsOrHigher": 39.8
	},
	{
		"fips": 21187,
		"state": "KY",
		"area_name": "Owen County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 21189,
		"state": "KY",
		"area_name": "Owsley County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 21191,
		"state": "KY",
		"area_name": "Pendleton County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 21193,
		"state": "KY",
		"area_name": "Perry County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 21195,
		"state": "KY",
		"area_name": "Pike County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 21197,
		"state": "KY",
		"area_name": "Powell County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 21199,
		"state": "KY",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 21201,
		"state": "KY",
		"area_name": "Robertson County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 21203,
		"state": "KY",
		"area_name": "Rockcastle County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 21205,
		"state": "KY",
		"area_name": "Rowan County",
		"bachelorsOrHigher": 25.5
	},
	{
		"fips": 21207,
		"state": "KY",
		"area_name": "Russell County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 21209,
		"state": "KY",
		"area_name": "Scott County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 21211,
		"state": "KY",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 23.7
	},
	{
		"fips": 21213,
		"state": "KY",
		"area_name": "Simpson County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 21215,
		"state": "KY",
		"area_name": "Spencer County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 21217,
		"state": "KY",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 21219,
		"state": "KY",
		"area_name": "Todd County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 21221,
		"state": "KY",
		"area_name": "Trigg County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 21223,
		"state": "KY",
		"area_name": "Trimble County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 21225,
		"state": "KY",
		"area_name": "Union County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 21227,
		"state": "KY",
		"area_name": "Warren County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 21229,
		"state": "KY",
		"area_name": "Washington County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 21231,
		"state": "KY",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 21233,
		"state": "KY",
		"area_name": "Webster County",
		"bachelorsOrHigher": 7.9
	},
	{
		"fips": 21235,
		"state": "KY",
		"area_name": "Whitley County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 21237,
		"state": "KY",
		"area_name": "Wolfe County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 21239,
		"state": "KY",
		"area_name": "Woodford County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 22001,
		"state": "LA",
		"area_name": "Acadia Parish",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 22003,
		"state": "LA",
		"area_name": "Allen Parish",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 22005,
		"state": "LA",
		"area_name": "Ascension Parish",
		"bachelorsOrHigher": 25.8
	},
	{
		"fips": 22007,
		"state": "LA",
		"area_name": "Assumption Parish",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 22009,
		"state": "LA",
		"area_name": "Avoyelles Parish",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 22011,
		"state": "LA",
		"area_name": "Beauregard Parish",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 22013,
		"state": "LA",
		"area_name": "Bienville Parish",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 22015,
		"state": "LA",
		"area_name": "Bossier Parish",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 22017,
		"state": "LA",
		"area_name": "Caddo Parish",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 22019,
		"state": "LA",
		"area_name": "Calcasieu Parish",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 22021,
		"state": "LA",
		"area_name": "Caldwell Parish",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 22023,
		"state": "LA",
		"area_name": "Cameron Parish",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 22025,
		"state": "LA",
		"area_name": "Catahoula Parish",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 22027,
		"state": "LA",
		"area_name": "Claiborne Parish",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 22029,
		"state": "LA",
		"area_name": "Concordia Parish",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 22031,
		"state": "LA",
		"area_name": "De Soto Parish",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 22033,
		"state": "LA",
		"area_name": "East Baton Rouge Parish",
		"bachelorsOrHigher": 34.1
	},
	{
		"fips": 22035,
		"state": "LA",
		"area_name": "East Carroll Parish",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 22037,
		"state": "LA",
		"area_name": "East Feliciana Parish",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 22039,
		"state": "LA",
		"area_name": "Evangeline Parish",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 22041,
		"state": "LA",
		"area_name": "Franklin Parish",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 22043,
		"state": "LA",
		"area_name": "Grant Parish",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 22045,
		"state": "LA",
		"area_name": "Iberia Parish",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 22047,
		"state": "LA",
		"area_name": "Iberville Parish",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 22049,
		"state": "LA",
		"area_name": "Jackson Parish",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 22051,
		"state": "LA",
		"area_name": "Jefferson Parish",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 22053,
		"state": "LA",
		"area_name": "Jefferson Davis Parish",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 22055,
		"state": "LA",
		"area_name": "Lafayette Parish",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 22057,
		"state": "LA",
		"area_name": "Lafourche Parish",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 22059,
		"state": "LA",
		"area_name": "La Salle Parish",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 22061,
		"state": "LA",
		"area_name": "Lincoln Parish",
		"bachelorsOrHigher": 34.6
	},
	{
		"fips": 22063,
		"state": "LA",
		"area_name": "Livingston Parish",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 22065,
		"state": "LA",
		"area_name": "Madison Parish",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 22067,
		"state": "LA",
		"area_name": "Morehouse Parish",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 22069,
		"state": "LA",
		"area_name": "Natchitoches Parish",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 22071,
		"state": "LA",
		"area_name": "Orleans Parish",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 22073,
		"state": "LA",
		"area_name": "Ouachita Parish",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 22075,
		"state": "LA",
		"area_name": "Plaquemines Parish",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 22077,
		"state": "LA",
		"area_name": "Pointe Coupee Parish",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 22079,
		"state": "LA",
		"area_name": "Rapides Parish",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 22081,
		"state": "LA",
		"area_name": "Red River Parish",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 22083,
		"state": "LA",
		"area_name": "Richland Parish",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 22085,
		"state": "LA",
		"area_name": "Sabine Parish",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 22087,
		"state": "LA",
		"area_name": "St. Bernard Parish",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 22089,
		"state": "LA",
		"area_name": "St. Charles Parish",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 22091,
		"state": "LA",
		"area_name": "St. Helena Parish",
		"bachelorsOrHigher": 8.9
	},
	{
		"fips": 22093,
		"state": "LA",
		"area_name": "St. James Parish",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 22095,
		"state": "LA",
		"area_name": "St. John the Baptist Parish",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 22097,
		"state": "LA",
		"area_name": "St. Landry Parish",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 22099,
		"state": "LA",
		"area_name": "St. Martin Parish",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 22101,
		"state": "LA",
		"area_name": "St. Mary Parish",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 22103,
		"state": "LA",
		"area_name": "St. Tammany Parish",
		"bachelorsOrHigher": 30.4
	},
	{
		"fips": 22105,
		"state": "LA",
		"area_name": "Tangipahoa Parish",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 22107,
		"state": "LA",
		"area_name": "Tensas Parish",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 22109,
		"state": "LA",
		"area_name": "Terrebonne Parish",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 22111,
		"state": "LA",
		"area_name": "Union Parish",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 22113,
		"state": "LA",
		"area_name": "Vermilion Parish",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 22115,
		"state": "LA",
		"area_name": "Vernon Parish",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 22117,
		"state": "LA",
		"area_name": "Washington Parish",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 22119,
		"state": "LA",
		"area_name": "Webster Parish",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 22121,
		"state": "LA",
		"area_name": "West Baton Rouge Parish",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 22123,
		"state": "LA",
		"area_name": "West Carroll Parish",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 22125,
		"state": "LA",
		"area_name": "West Feliciana Parish",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 22127,
		"state": "LA",
		"area_name": "Winn Parish",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 23001,
		"state": "ME",
		"area_name": "Androscoggin County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 23003,
		"state": "ME",
		"area_name": "Aroostook County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 23005,
		"state": "ME",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 42
	},
	{
		"fips": 23007,
		"state": "ME",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 23009,
		"state": "ME",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 23011,
		"state": "ME",
		"area_name": "Kennebec County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 23013,
		"state": "ME",
		"area_name": "Knox County",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 23015,
		"state": "ME",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 23017,
		"state": "ME",
		"area_name": "Oxford County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 23019,
		"state": "ME",
		"area_name": "Penobscot County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 23021,
		"state": "ME",
		"area_name": "Piscataquis County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 23023,
		"state": "ME",
		"area_name": "Sagadahoc County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 23025,
		"state": "ME",
		"area_name": "Somerset County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 23027,
		"state": "ME",
		"area_name": "Waldo County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 23029,
		"state": "ME",
		"area_name": "Washington County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 23031,
		"state": "ME",
		"area_name": "York County",
		"bachelorsOrHigher": 29.1
	},
	{
		"fips": 24001,
		"state": "MD",
		"area_name": "Allegany County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 24003,
		"state": "MD",
		"area_name": "Anne Arundel County",
		"bachelorsOrHigher": 37.6
	},
	{
		"fips": 24005,
		"state": "MD",
		"area_name": "Baltimore County",
		"bachelorsOrHigher": 36
	},
	{
		"fips": 24009,
		"state": "MD",
		"area_name": "Calvert County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 24011,
		"state": "MD",
		"area_name": "Caroline County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 24013,
		"state": "MD",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 32.7
	},
	{
		"fips": 24015,
		"state": "MD",
		"area_name": "Cecil County",
		"bachelorsOrHigher": 21.8
	},
	{
		"fips": 24017,
		"state": "MD",
		"area_name": "Charles County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 24019,
		"state": "MD",
		"area_name": "Dorchester County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 24021,
		"state": "MD",
		"area_name": "Frederick County",
		"bachelorsOrHigher": 38.8
	},
	{
		"fips": 24023,
		"state": "MD",
		"area_name": "Garrett County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 24025,
		"state": "MD",
		"area_name": "Harford County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 24027,
		"state": "MD",
		"area_name": "Howard County",
		"bachelorsOrHigher": 60.4
	},
	{
		"fips": 24029,
		"state": "MD",
		"area_name": "Kent County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 24031,
		"state": "MD",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 57.4
	},
	{
		"fips": 24033,
		"state": "MD",
		"area_name": "Prince George's County",
		"bachelorsOrHigher": 30.4
	},
	{
		"fips": 24035,
		"state": "MD",
		"area_name": "Queen Anne's County",
		"bachelorsOrHigher": 34.1
	},
	{
		"fips": 24037,
		"state": "MD",
		"area_name": "St. Mary's County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 24039,
		"state": "MD",
		"area_name": "Somerset County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 24041,
		"state": "MD",
		"area_name": "Talbot County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 24043,
		"state": "MD",
		"area_name": "Washington County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 24045,
		"state": "MD",
		"area_name": "Wicomico County",
		"bachelorsOrHigher": 27.7
	},
	{
		"fips": 24047,
		"state": "MD",
		"area_name": "Worcester County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 24510,
		"state": "MD",
		"area_name": "Baltimore city",
		"bachelorsOrHigher": 27.7
	},
	{
		"fips": 25001,
		"state": "MA",
		"area_name": "Barnstable County",
		"bachelorsOrHigher": 39.9
	},
	{
		"fips": 25003,
		"state": "MA",
		"area_name": "Berkshire County",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 25005,
		"state": "MA",
		"area_name": "Bristol County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 25007,
		"state": "MA",
		"area_name": "Dukes County",
		"bachelorsOrHigher": 41.2
	},
	{
		"fips": 25009,
		"state": "MA",
		"area_name": "Essex County",
		"bachelorsOrHigher": 37.2
	},
	{
		"fips": 25011,
		"state": "MA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 25013,
		"state": "MA",
		"area_name": "Hampden County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 25015,
		"state": "MA",
		"area_name": "Hampshire County",
		"bachelorsOrHigher": 43.2
	},
	{
		"fips": 25017,
		"state": "MA",
		"area_name": "Middlesex County",
		"bachelorsOrHigher": 51.3
	},
	{
		"fips": 25019,
		"state": "MA",
		"area_name": "Nantucket County",
		"bachelorsOrHigher": 45.7
	},
	{
		"fips": 25021,
		"state": "MA",
		"area_name": "Norfolk County",
		"bachelorsOrHigher": 49.9
	},
	{
		"fips": 25023,
		"state": "MA",
		"area_name": "Plymouth County",
		"bachelorsOrHigher": 34
	},
	{
		"fips": 25025,
		"state": "MA",
		"area_name": "Suffolk County",
		"bachelorsOrHigher": 41
	},
	{
		"fips": 25027,
		"state": "MA",
		"area_name": "Worcester County",
		"bachelorsOrHigher": 34.1
	},
	{
		"fips": 26001,
		"state": "MI",
		"area_name": "Alcona County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 26003,
		"state": "MI",
		"area_name": "Alger County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 26005,
		"state": "MI",
		"area_name": "Allegan County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 26007,
		"state": "MI",
		"area_name": "Alpena County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 26009,
		"state": "MI",
		"area_name": "Antrim County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 26011,
		"state": "MI",
		"area_name": "Arenac County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 26013,
		"state": "MI",
		"area_name": "Baraga County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 26015,
		"state": "MI",
		"area_name": "Barry County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 26017,
		"state": "MI",
		"area_name": "Bay County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 26019,
		"state": "MI",
		"area_name": "Benzie County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 26021,
		"state": "MI",
		"area_name": "Berrien County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 26023,
		"state": "MI",
		"area_name": "Branch County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 26025,
		"state": "MI",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 26027,
		"state": "MI",
		"area_name": "Cass County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 26029,
		"state": "MI",
		"area_name": "Charlevoix County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 26031,
		"state": "MI",
		"area_name": "Cheboygan County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 26033,
		"state": "MI",
		"area_name": "Chippewa County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 26035,
		"state": "MI",
		"area_name": "Clare County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 26037,
		"state": "MI",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 26039,
		"state": "MI",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 26041,
		"state": "MI",
		"area_name": "Delta County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 26043,
		"state": "MI",
		"area_name": "Dickinson County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 26045,
		"state": "MI",
		"area_name": "Eaton County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 26047,
		"state": "MI",
		"area_name": "Emmet County",
		"bachelorsOrHigher": 33.3
	},
	{
		"fips": 26049,
		"state": "MI",
		"area_name": "Genesee County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 26051,
		"state": "MI",
		"area_name": "Gladwin County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 26053,
		"state": "MI",
		"area_name": "Gogebic County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 26055,
		"state": "MI",
		"area_name": "Grand Traverse County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 26057,
		"state": "MI",
		"area_name": "Gratiot County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 26059,
		"state": "MI",
		"area_name": "Hillsdale County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 26061,
		"state": "MI",
		"area_name": "Houghton County",
		"bachelorsOrHigher": 29.6
	},
	{
		"fips": 26063,
		"state": "MI",
		"area_name": "Huron County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 26065,
		"state": "MI",
		"area_name": "Ingham County",
		"bachelorsOrHigher": 36.5
	},
	{
		"fips": 26067,
		"state": "MI",
		"area_name": "Ionia County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 26069,
		"state": "MI",
		"area_name": "Iosco County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 26071,
		"state": "MI",
		"area_name": "Iron County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 26073,
		"state": "MI",
		"area_name": "Isabella County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 26075,
		"state": "MI",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 26077,
		"state": "MI",
		"area_name": "Kalamazoo County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 26079,
		"state": "MI",
		"area_name": "Kalkaska County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 26081,
		"state": "MI",
		"area_name": "Kent County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 26083,
		"state": "MI",
		"area_name": "Keweenaw County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 26085,
		"state": "MI",
		"area_name": "Lake County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 26087,
		"state": "MI",
		"area_name": "Lapeer County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 26089,
		"state": "MI",
		"area_name": "Leelanau County",
		"bachelorsOrHigher": 39.5
	},
	{
		"fips": 26091,
		"state": "MI",
		"area_name": "Lenawee County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 26093,
		"state": "MI",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 33
	},
	{
		"fips": 26095,
		"state": "MI",
		"area_name": "Luce County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 26097,
		"state": "MI",
		"area_name": "Mackinac County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 26099,
		"state": "MI",
		"area_name": "Macomb County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 26101,
		"state": "MI",
		"area_name": "Manistee County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 26103,
		"state": "MI",
		"area_name": "Marquette County",
		"bachelorsOrHigher": 28.8
	},
	{
		"fips": 26105,
		"state": "MI",
		"area_name": "Mason County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 26107,
		"state": "MI",
		"area_name": "Mecosta County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 26109,
		"state": "MI",
		"area_name": "Menominee County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 26111,
		"state": "MI",
		"area_name": "Midland County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 26113,
		"state": "MI",
		"area_name": "Missaukee County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 26115,
		"state": "MI",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 26117,
		"state": "MI",
		"area_name": "Montcalm County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 26119,
		"state": "MI",
		"area_name": "Montmorency County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 26121,
		"state": "MI",
		"area_name": "Muskegon County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 26123,
		"state": "MI",
		"area_name": "Newaygo County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 26125,
		"state": "MI",
		"area_name": "Oakland County",
		"bachelorsOrHigher": 43.7
	},
	{
		"fips": 26127,
		"state": "MI",
		"area_name": "Oceana County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 26129,
		"state": "MI",
		"area_name": "Ogemaw County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 26131,
		"state": "MI",
		"area_name": "Ontonagon County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 26133,
		"state": "MI",
		"area_name": "Osceola County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 26135,
		"state": "MI",
		"area_name": "Oscoda County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 26137,
		"state": "MI",
		"area_name": "Otsego County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 26139,
		"state": "MI",
		"area_name": "Ottawa County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 26141,
		"state": "MI",
		"area_name": "Presque Isle County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 26143,
		"state": "MI",
		"area_name": "Roscommon County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 26145,
		"state": "MI",
		"area_name": "Saginaw County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 26147,
		"state": "MI",
		"area_name": "St. Clair County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 26149,
		"state": "MI",
		"area_name": "St. Joseph County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 26151,
		"state": "MI",
		"area_name": "Sanilac County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 26153,
		"state": "MI",
		"area_name": "Schoolcraft County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 26155,
		"state": "MI",
		"area_name": "Shiawassee County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 26157,
		"state": "MI",
		"area_name": "Tuscola County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 26159,
		"state": "MI",
		"area_name": "Van Buren County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 26161,
		"state": "MI",
		"area_name": "Washtenaw County",
		"bachelorsOrHigher": 51.8
	},
	{
		"fips": 26163,
		"state": "MI",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 26165,
		"state": "MI",
		"area_name": "Wexford County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 27001,
		"state": "MN",
		"area_name": "Aitkin County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 27003,
		"state": "MN",
		"area_name": "Anoka County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 27005,
		"state": "MN",
		"area_name": "Becker County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 27007,
		"state": "MN",
		"area_name": "Beltrami County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 27009,
		"state": "MN",
		"area_name": "Benton County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 27011,
		"state": "MN",
		"area_name": "Big Stone County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 27013,
		"state": "MN",
		"area_name": "Blue Earth County",
		"bachelorsOrHigher": 30.4
	},
	{
		"fips": 27015,
		"state": "MN",
		"area_name": "Brown County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 27017,
		"state": "MN",
		"area_name": "Carlton County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 27019,
		"state": "MN",
		"area_name": "Carver County",
		"bachelorsOrHigher": 45
	},
	{
		"fips": 27021,
		"state": "MN",
		"area_name": "Cass County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 27023,
		"state": "MN",
		"area_name": "Chippewa County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 27025,
		"state": "MN",
		"area_name": "Chisago County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 27027,
		"state": "MN",
		"area_name": "Clay County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 27029,
		"state": "MN",
		"area_name": "Clearwater County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 27031,
		"state": "MN",
		"area_name": "Cook County",
		"bachelorsOrHigher": 40.6
	},
	{
		"fips": 27033,
		"state": "MN",
		"area_name": "Cottonwood County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 27035,
		"state": "MN",
		"area_name": "Crow Wing County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 27037,
		"state": "MN",
		"area_name": "Dakota County",
		"bachelorsOrHigher": 39.5
	},
	{
		"fips": 27039,
		"state": "MN",
		"area_name": "Dodge County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 27041,
		"state": "MN",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 27043,
		"state": "MN",
		"area_name": "Faribault County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 27045,
		"state": "MN",
		"area_name": "Fillmore County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 27047,
		"state": "MN",
		"area_name": "Freeborn County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 27049,
		"state": "MN",
		"area_name": "Goodhue County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 27051,
		"state": "MN",
		"area_name": "Grant County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 27053,
		"state": "MN",
		"area_name": "Hennepin County",
		"bachelorsOrHigher": 46.4
	},
	{
		"fips": 27055,
		"state": "MN",
		"area_name": "Houston County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 27057,
		"state": "MN",
		"area_name": "Hubbard County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 27059,
		"state": "MN",
		"area_name": "Isanti County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 27061,
		"state": "MN",
		"area_name": "Itasca County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 27063,
		"state": "MN",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 27065,
		"state": "MN",
		"area_name": "Kanabec County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 27067,
		"state": "MN",
		"area_name": "Kandiyohi County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 27069,
		"state": "MN",
		"area_name": "Kittson County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 27071,
		"state": "MN",
		"area_name": "Koochiching County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 27073,
		"state": "MN",
		"area_name": "Lac qui Parle County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 27075,
		"state": "MN",
		"area_name": "Lake County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 27077,
		"state": "MN",
		"area_name": "Lake of the Woods County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 27079,
		"state": "MN",
		"area_name": "Le Sueur County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 27081,
		"state": "MN",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 27083,
		"state": "MN",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 27085,
		"state": "MN",
		"area_name": "McLeod County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 27087,
		"state": "MN",
		"area_name": "Mahnomen County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 27089,
		"state": "MN",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 27091,
		"state": "MN",
		"area_name": "Martin County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 27093,
		"state": "MN",
		"area_name": "Meeker County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 27095,
		"state": "MN",
		"area_name": "Mille Lacs County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 27097,
		"state": "MN",
		"area_name": "Morrison County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 27099,
		"state": "MN",
		"area_name": "Mower County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 27101,
		"state": "MN",
		"area_name": "Murray County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 27103,
		"state": "MN",
		"area_name": "Nicollet County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 27105,
		"state": "MN",
		"area_name": "Nobles County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 27107,
		"state": "MN",
		"area_name": "Norman County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 27109,
		"state": "MN",
		"area_name": "Olmsted County",
		"bachelorsOrHigher": 40.2
	},
	{
		"fips": 27111,
		"state": "MN",
		"area_name": "Otter Tail County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 27113,
		"state": "MN",
		"area_name": "Pennington County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 27115,
		"state": "MN",
		"area_name": "Pine County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 27117,
		"state": "MN",
		"area_name": "Pipestone County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 27119,
		"state": "MN",
		"area_name": "Polk County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 27121,
		"state": "MN",
		"area_name": "Pope County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 27123,
		"state": "MN",
		"area_name": "Ramsey County",
		"bachelorsOrHigher": 39.8
	},
	{
		"fips": 27125,
		"state": "MN",
		"area_name": "Red Lake County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 27127,
		"state": "MN",
		"area_name": "Redwood County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 27129,
		"state": "MN",
		"area_name": "Renville County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 27131,
		"state": "MN",
		"area_name": "Rice County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 27133,
		"state": "MN",
		"area_name": "Rock County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 27135,
		"state": "MN",
		"area_name": "Roseau County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 27137,
		"state": "MN",
		"area_name": "St. Louis County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 27139,
		"state": "MN",
		"area_name": "Scott County",
		"bachelorsOrHigher": 38.3
	},
	{
		"fips": 27141,
		"state": "MN",
		"area_name": "Sherburne County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 27143,
		"state": "MN",
		"area_name": "Sibley County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 27145,
		"state": "MN",
		"area_name": "Stearns County",
		"bachelorsOrHigher": 25.5
	},
	{
		"fips": 27147,
		"state": "MN",
		"area_name": "Steele County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 27149,
		"state": "MN",
		"area_name": "Stevens County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 27151,
		"state": "MN",
		"area_name": "Swift County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 27153,
		"state": "MN",
		"area_name": "Todd County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 27155,
		"state": "MN",
		"area_name": "Traverse County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 27157,
		"state": "MN",
		"area_name": "Wabasha County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 27159,
		"state": "MN",
		"area_name": "Wadena County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 27161,
		"state": "MN",
		"area_name": "Waseca County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 27163,
		"state": "MN",
		"area_name": "Washington County",
		"bachelorsOrHigher": 41.3
	},
	{
		"fips": 27165,
		"state": "MN",
		"area_name": "Watonwan County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 27167,
		"state": "MN",
		"area_name": "Wilkin County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 27169,
		"state": "MN",
		"area_name": "Winona County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 27171,
		"state": "MN",
		"area_name": "Wright County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 27173,
		"state": "MN",
		"area_name": "Yellow Medicine County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 28001,
		"state": "MS",
		"area_name": "Adams County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 28003,
		"state": "MS",
		"area_name": "Alcorn County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 28005,
		"state": "MS",
		"area_name": "Amite County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 28007,
		"state": "MS",
		"area_name": "Attala County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 28009,
		"state": "MS",
		"area_name": "Benton County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 28011,
		"state": "MS",
		"area_name": "Bolivar County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 28013,
		"state": "MS",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 28015,
		"state": "MS",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 28017,
		"state": "MS",
		"area_name": "Chickasaw County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 28019,
		"state": "MS",
		"area_name": "Choctaw County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 28021,
		"state": "MS",
		"area_name": "Claiborne County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 28023,
		"state": "MS",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 28025,
		"state": "MS",
		"area_name": "Clay County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 28027,
		"state": "MS",
		"area_name": "Coahoma County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 28029,
		"state": "MS",
		"area_name": "Copiah County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 28031,
		"state": "MS",
		"area_name": "Covington County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 28033,
		"state": "MS",
		"area_name": "DeSoto County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 28035,
		"state": "MS",
		"area_name": "Forrest County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 28037,
		"state": "MS",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 28039,
		"state": "MS",
		"area_name": "George County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 28041,
		"state": "MS",
		"area_name": "Greene County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 28043,
		"state": "MS",
		"area_name": "Grenada County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 28045,
		"state": "MS",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 28047,
		"state": "MS",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 28049,
		"state": "MS",
		"area_name": "Hinds County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 28051,
		"state": "MS",
		"area_name": "Holmes County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 28053,
		"state": "MS",
		"area_name": "Humphreys County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 28055,
		"state": "MS",
		"area_name": "Issaquena County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 28057,
		"state": "MS",
		"area_name": "Itawamba County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 28059,
		"state": "MS",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 28061,
		"state": "MS",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 28063,
		"state": "MS",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 28065,
		"state": "MS",
		"area_name": "Jefferson Davis County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 28067,
		"state": "MS",
		"area_name": "Jones County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 28069,
		"state": "MS",
		"area_name": "Kemper County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 28071,
		"state": "MS",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 36.9
	},
	{
		"fips": 28073,
		"state": "MS",
		"area_name": "Lamar County",
		"bachelorsOrHigher": 34.1
	},
	{
		"fips": 28075,
		"state": "MS",
		"area_name": "Lauderdale County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 28077,
		"state": "MS",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 28079,
		"state": "MS",
		"area_name": "Leake County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 28081,
		"state": "MS",
		"area_name": "Lee County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 28083,
		"state": "MS",
		"area_name": "Leflore County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 28085,
		"state": "MS",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 28087,
		"state": "MS",
		"area_name": "Lowndes County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 28089,
		"state": "MS",
		"area_name": "Madison County",
		"bachelorsOrHigher": 46.3
	},
	{
		"fips": 28091,
		"state": "MS",
		"area_name": "Marion County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 28093,
		"state": "MS",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 28095,
		"state": "MS",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 28097,
		"state": "MS",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 28099,
		"state": "MS",
		"area_name": "Neshoba County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 28101,
		"state": "MS",
		"area_name": "Newton County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 28103,
		"state": "MS",
		"area_name": "Noxubee County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 28105,
		"state": "MS",
		"area_name": "Oktibbeha County",
		"bachelorsOrHigher": 42.6
	},
	{
		"fips": 28107,
		"state": "MS",
		"area_name": "Panola County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 28109,
		"state": "MS",
		"area_name": "Pearl River County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 28111,
		"state": "MS",
		"area_name": "Perry County",
		"bachelorsOrHigher": 8.4
	},
	{
		"fips": 28113,
		"state": "MS",
		"area_name": "Pike County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 28115,
		"state": "MS",
		"area_name": "Pontotoc County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 28117,
		"state": "MS",
		"area_name": "Prentiss County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 28119,
		"state": "MS",
		"area_name": "Quitman County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 28121,
		"state": "MS",
		"area_name": "Rankin County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 28123,
		"state": "MS",
		"area_name": "Scott County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 28125,
		"state": "MS",
		"area_name": "Sharkey County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 28127,
		"state": "MS",
		"area_name": "Simpson County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 28129,
		"state": "MS",
		"area_name": "Smith County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 28131,
		"state": "MS",
		"area_name": "Stone County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 28133,
		"state": "MS",
		"area_name": "Sunflower County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 28135,
		"state": "MS",
		"area_name": "Tallahatchie County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 28137,
		"state": "MS",
		"area_name": "Tate County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 28139,
		"state": "MS",
		"area_name": "Tippah County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 28141,
		"state": "MS",
		"area_name": "Tishomingo County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 28143,
		"state": "MS",
		"area_name": "Tunica County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 28145,
		"state": "MS",
		"area_name": "Union County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 28147,
		"state": "MS",
		"area_name": "Walthall County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 28149,
		"state": "MS",
		"area_name": "Warren County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 28151,
		"state": "MS",
		"area_name": "Washington County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 28153,
		"state": "MS",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 28155,
		"state": "MS",
		"area_name": "Webster County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 28157,
		"state": "MS",
		"area_name": "Wilkinson County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 28159,
		"state": "MS",
		"area_name": "Winston County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 28161,
		"state": "MS",
		"area_name": "Yalobusha County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 28163,
		"state": "MS",
		"area_name": "Yazoo County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 29001,
		"state": "MO",
		"area_name": "Adair County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 29003,
		"state": "MO",
		"area_name": "Andrew County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 29005,
		"state": "MO",
		"area_name": "Atchison County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 29007,
		"state": "MO",
		"area_name": "Audrain County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 29009,
		"state": "MO",
		"area_name": "Barry County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 29011,
		"state": "MO",
		"area_name": "Barton County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 29013,
		"state": "MO",
		"area_name": "Bates County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 29015,
		"state": "MO",
		"area_name": "Benton County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 29017,
		"state": "MO",
		"area_name": "Bollinger County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 29019,
		"state": "MO",
		"area_name": "Boone County",
		"bachelorsOrHigher": 47.7
	},
	{
		"fips": 29021,
		"state": "MO",
		"area_name": "Buchanan County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 29023,
		"state": "MO",
		"area_name": "Butler County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 29025,
		"state": "MO",
		"area_name": "Caldwell County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 29027,
		"state": "MO",
		"area_name": "Callaway County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 29029,
		"state": "MO",
		"area_name": "Camden County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 29031,
		"state": "MO",
		"area_name": "Cape Girardeau County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 29033,
		"state": "MO",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 29035,
		"state": "MO",
		"area_name": "Carter County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 29037,
		"state": "MO",
		"area_name": "Cass County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 29039,
		"state": "MO",
		"area_name": "Cedar County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 29041,
		"state": "MO",
		"area_name": "Chariton County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 29043,
		"state": "MO",
		"area_name": "Christian County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 29045,
		"state": "MO",
		"area_name": "Clark County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 29047,
		"state": "MO",
		"area_name": "Clay County",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 29049,
		"state": "MO",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 29051,
		"state": "MO",
		"area_name": "Cole County",
		"bachelorsOrHigher": 30.9
	},
	{
		"fips": 29053,
		"state": "MO",
		"area_name": "Cooper County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 29055,
		"state": "MO",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 29057,
		"state": "MO",
		"area_name": "Dade County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 29059,
		"state": "MO",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 29061,
		"state": "MO",
		"area_name": "Daviess County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 29063,
		"state": "MO",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 29065,
		"state": "MO",
		"area_name": "Dent County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 29067,
		"state": "MO",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 29069,
		"state": "MO",
		"area_name": "Dunklin County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 29071,
		"state": "MO",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 29073,
		"state": "MO",
		"area_name": "Gasconade County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 29075,
		"state": "MO",
		"area_name": "Gentry County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 29077,
		"state": "MO",
		"area_name": "Greene County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 29079,
		"state": "MO",
		"area_name": "Grundy County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 29081,
		"state": "MO",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 29083,
		"state": "MO",
		"area_name": "Henry County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 29085,
		"state": "MO",
		"area_name": "Hickory County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 29087,
		"state": "MO",
		"area_name": "Holt County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 29089,
		"state": "MO",
		"area_name": "Howard County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 29091,
		"state": "MO",
		"area_name": "Howell County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 29093,
		"state": "MO",
		"area_name": "Iron County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 29095,
		"state": "MO",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 29097,
		"state": "MO",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 29099,
		"state": "MO",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 29101,
		"state": "MO",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 26
	},
	{
		"fips": 29103,
		"state": "MO",
		"area_name": "Knox County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 29105,
		"state": "MO",
		"area_name": "Laclede County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 29107,
		"state": "MO",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 29109,
		"state": "MO",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 29111,
		"state": "MO",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 29113,
		"state": "MO",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 29115,
		"state": "MO",
		"area_name": "Linn County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 29117,
		"state": "MO",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 29119,
		"state": "MO",
		"area_name": "McDonald County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 29121,
		"state": "MO",
		"area_name": "Macon County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 29123,
		"state": "MO",
		"area_name": "Madison County",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 29125,
		"state": "MO",
		"area_name": "Maries County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 29127,
		"state": "MO",
		"area_name": "Marion County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 29129,
		"state": "MO",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 29131,
		"state": "MO",
		"area_name": "Miller County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 29133,
		"state": "MO",
		"area_name": "Mississippi County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 29135,
		"state": "MO",
		"area_name": "Moniteau County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 29137,
		"state": "MO",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 29139,
		"state": "MO",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 29141,
		"state": "MO",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 29143,
		"state": "MO",
		"area_name": "New Madrid County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 29145,
		"state": "MO",
		"area_name": "Newton County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 29147,
		"state": "MO",
		"area_name": "Nodaway County",
		"bachelorsOrHigher": 23.4
	},
	{
		"fips": 29149,
		"state": "MO",
		"area_name": "Oregon County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 29151,
		"state": "MO",
		"area_name": "Osage County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 29153,
		"state": "MO",
		"area_name": "Ozark County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 29155,
		"state": "MO",
		"area_name": "Pemiscot County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 29157,
		"state": "MO",
		"area_name": "Perry County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 29159,
		"state": "MO",
		"area_name": "Pettis County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 29161,
		"state": "MO",
		"area_name": "Phelps County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 29163,
		"state": "MO",
		"area_name": "Pike County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 29165,
		"state": "MO",
		"area_name": "Platte County",
		"bachelorsOrHigher": 39.2
	},
	{
		"fips": 29167,
		"state": "MO",
		"area_name": "Polk County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 29169,
		"state": "MO",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 29171,
		"state": "MO",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 29173,
		"state": "MO",
		"area_name": "Ralls County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 29175,
		"state": "MO",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 29177,
		"state": "MO",
		"area_name": "Ray County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 29179,
		"state": "MO",
		"area_name": "Reynolds County",
		"bachelorsOrHigher": 6.2
	},
	{
		"fips": 29181,
		"state": "MO",
		"area_name": "Ripley County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 29183,
		"state": "MO",
		"area_name": "St. Charles County",
		"bachelorsOrHigher": 35.5
	},
	{
		"fips": 29185,
		"state": "MO",
		"area_name": "St. Clair County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 29186,
		"state": "MO",
		"area_name": "Ste. Genevieve County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 29187,
		"state": "MO",
		"area_name": "St. Francois County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 29189,
		"state": "MO",
		"area_name": "St. Louis County",
		"bachelorsOrHigher": 41.4
	},
	{
		"fips": 29195,
		"state": "MO",
		"area_name": "Saline County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 29197,
		"state": "MO",
		"area_name": "Schuyler County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 29199,
		"state": "MO",
		"area_name": "Scotland County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 29201,
		"state": "MO",
		"area_name": "Scott County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 29203,
		"state": "MO",
		"area_name": "Shannon County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 29205,
		"state": "MO",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 29207,
		"state": "MO",
		"area_name": "Stoddard County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 29209,
		"state": "MO",
		"area_name": "Stone County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 29211,
		"state": "MO",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 29213,
		"state": "MO",
		"area_name": "Taney County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 29215,
		"state": "MO",
		"area_name": "Texas County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 29217,
		"state": "MO",
		"area_name": "Vernon County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 29219,
		"state": "MO",
		"area_name": "Warren County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 29221,
		"state": "MO",
		"area_name": "Washington County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 29223,
		"state": "MO",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 29225,
		"state": "MO",
		"area_name": "Webster County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 29227,
		"state": "MO",
		"area_name": "Worth County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 29229,
		"state": "MO",
		"area_name": "Wright County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 29510,
		"state": "MO",
		"area_name": "St. Louis city",
		"bachelorsOrHigher": 30.4
	},
	{
		"fips": 30001,
		"state": "MT",
		"area_name": "Beaverhead County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 30003,
		"state": "MT",
		"area_name": "Big Horn County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 30005,
		"state": "MT",
		"area_name": "Blaine County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 30007,
		"state": "MT",
		"area_name": "Broadwater County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 30009,
		"state": "MT",
		"area_name": "Carbon County",
		"bachelorsOrHigher": 29.1
	},
	{
		"fips": 30011,
		"state": "MT",
		"area_name": "Carter County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 30013,
		"state": "MT",
		"area_name": "Cascade County",
		"bachelorsOrHigher": 25.5
	},
	{
		"fips": 30015,
		"state": "MT",
		"area_name": "Chouteau County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 30017,
		"state": "MT",
		"area_name": "Custer County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 30019,
		"state": "MT",
		"area_name": "Daniels County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 30021,
		"state": "MT",
		"area_name": "Dawson County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 30023,
		"state": "MT",
		"area_name": "Deer Lodge County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 30025,
		"state": "MT",
		"area_name": "Fallon County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 30027,
		"state": "MT",
		"area_name": "Fergus County",
		"bachelorsOrHigher": 27.6
	},
	{
		"fips": 30029,
		"state": "MT",
		"area_name": "Flathead County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 30031,
		"state": "MT",
		"area_name": "Gallatin County",
		"bachelorsOrHigher": 46.7
	},
	{
		"fips": 30033,
		"state": "MT",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 30035,
		"state": "MT",
		"area_name": "Glacier County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 30037,
		"state": "MT",
		"area_name": "Golden Valley County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 30039,
		"state": "MT",
		"area_name": "Granite County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 30041,
		"state": "MT",
		"area_name": "Hill County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 30043,
		"state": "MT",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 30045,
		"state": "MT",
		"area_name": "Judith Basin County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 30047,
		"state": "MT",
		"area_name": "Lake County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 30049,
		"state": "MT",
		"area_name": "Lewis and Clark County",
		"bachelorsOrHigher": 37.6
	},
	{
		"fips": 30051,
		"state": "MT",
		"area_name": "Liberty County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 30053,
		"state": "MT",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 30055,
		"state": "MT",
		"area_name": "McCone County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 30057,
		"state": "MT",
		"area_name": "Madison County",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 30059,
		"state": "MT",
		"area_name": "Meagher County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 30061,
		"state": "MT",
		"area_name": "Mineral County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 30063,
		"state": "MT",
		"area_name": "Missoula County",
		"bachelorsOrHigher": 40.2
	},
	{
		"fips": 30065,
		"state": "MT",
		"area_name": "Musselshell County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 30067,
		"state": "MT",
		"area_name": "Park County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 30069,
		"state": "MT",
		"area_name": "Petroleum County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 30071,
		"state": "MT",
		"area_name": "Phillips County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 30073,
		"state": "MT",
		"area_name": "Pondera County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 30075,
		"state": "MT",
		"area_name": "Powder River County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 30077,
		"state": "MT",
		"area_name": "Powell County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 30079,
		"state": "MT",
		"area_name": "Prairie County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 30081,
		"state": "MT",
		"area_name": "Ravalli County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 30083,
		"state": "MT",
		"area_name": "Richland County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 30085,
		"state": "MT",
		"area_name": "Roosevelt County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 30087,
		"state": "MT",
		"area_name": "Rosebud County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 30089,
		"state": "MT",
		"area_name": "Sanders County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 30091,
		"state": "MT",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 30093,
		"state": "MT",
		"area_name": "Silver Bow County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 30095,
		"state": "MT",
		"area_name": "Stillwater County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 30097,
		"state": "MT",
		"area_name": "Sweet Grass County",
		"bachelorsOrHigher": 27.8
	},
	{
		"fips": 30099,
		"state": "MT",
		"area_name": "Teton County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 30101,
		"state": "MT",
		"area_name": "Toole County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 30103,
		"state": "MT",
		"area_name": "Treasure County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 30105,
		"state": "MT",
		"area_name": "Valley County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 30107,
		"state": "MT",
		"area_name": "Wheatland County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 30109,
		"state": "MT",
		"area_name": "Wibaux County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 30111,
		"state": "MT",
		"area_name": "Yellowstone County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 31001,
		"state": "NE",
		"area_name": "Adams County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 31003,
		"state": "NE",
		"area_name": "Antelope County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 31005,
		"state": "NE",
		"area_name": "Arthur County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 31007,
		"state": "NE",
		"area_name": "Banner County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 31009,
		"state": "NE",
		"area_name": "Blaine County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 31011,
		"state": "NE",
		"area_name": "Boone County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 31013,
		"state": "NE",
		"area_name": "Box Butte County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 31015,
		"state": "NE",
		"area_name": "Boyd County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 31017,
		"state": "NE",
		"area_name": "Brown County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 31019,
		"state": "NE",
		"area_name": "Buffalo County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 31021,
		"state": "NE",
		"area_name": "Burt County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 31023,
		"state": "NE",
		"area_name": "Butler County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 31025,
		"state": "NE",
		"area_name": "Cass County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 31027,
		"state": "NE",
		"area_name": "Cedar County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 31029,
		"state": "NE",
		"area_name": "Chase County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 31031,
		"state": "NE",
		"area_name": "Cherry County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 31033,
		"state": "NE",
		"area_name": "Cheyenne County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 31035,
		"state": "NE",
		"area_name": "Clay County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 31037,
		"state": "NE",
		"area_name": "Colfax County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 31039,
		"state": "NE",
		"area_name": "Cuming County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 31041,
		"state": "NE",
		"area_name": "Custer County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 31043,
		"state": "NE",
		"area_name": "Dakota County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 31045,
		"state": "NE",
		"area_name": "Dawes County",
		"bachelorsOrHigher": 39.1
	},
	{
		"fips": 31047,
		"state": "NE",
		"area_name": "Dawson County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 31049,
		"state": "NE",
		"area_name": "Deuel County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 31051,
		"state": "NE",
		"area_name": "Dixon County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 31053,
		"state": "NE",
		"area_name": "Dodge County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 31055,
		"state": "NE",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 36.6
	},
	{
		"fips": 31057,
		"state": "NE",
		"area_name": "Dundy County",
		"bachelorsOrHigher": 21.8
	},
	{
		"fips": 31059,
		"state": "NE",
		"area_name": "Fillmore County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 31061,
		"state": "NE",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 31063,
		"state": "NE",
		"area_name": "Frontier County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 31065,
		"state": "NE",
		"area_name": "Furnas County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 31067,
		"state": "NE",
		"area_name": "Gage County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 31069,
		"state": "NE",
		"area_name": "Garden County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 31071,
		"state": "NE",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 31073,
		"state": "NE",
		"area_name": "Gosper County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 31075,
		"state": "NE",
		"area_name": "Grant County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 31077,
		"state": "NE",
		"area_name": "Greeley County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 31079,
		"state": "NE",
		"area_name": "Hall County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 31081,
		"state": "NE",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 31083,
		"state": "NE",
		"area_name": "Harlan County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 31085,
		"state": "NE",
		"area_name": "Hayes County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 31087,
		"state": "NE",
		"area_name": "Hitchcock County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 31089,
		"state": "NE",
		"area_name": "Holt County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 31091,
		"state": "NE",
		"area_name": "Hooker County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 31093,
		"state": "NE",
		"area_name": "Howard County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 31095,
		"state": "NE",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 31097,
		"state": "NE",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 31099,
		"state": "NE",
		"area_name": "Kearney County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 31101,
		"state": "NE",
		"area_name": "Keith County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 31103,
		"state": "NE",
		"area_name": "Keya Paha County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 31105,
		"state": "NE",
		"area_name": "Kimball County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 31107,
		"state": "NE",
		"area_name": "Knox County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 31109,
		"state": "NE",
		"area_name": "Lancaster County",
		"bachelorsOrHigher": 36.2
	},
	{
		"fips": 31111,
		"state": "NE",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 31113,
		"state": "NE",
		"area_name": "Logan County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 31115,
		"state": "NE",
		"area_name": "Loup County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 31117,
		"state": "NE",
		"area_name": "McPherson County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 31119,
		"state": "NE",
		"area_name": "Madison County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 31121,
		"state": "NE",
		"area_name": "Merrick County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 31123,
		"state": "NE",
		"area_name": "Morrill County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 31125,
		"state": "NE",
		"area_name": "Nance County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 31127,
		"state": "NE",
		"area_name": "Nemaha County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 31129,
		"state": "NE",
		"area_name": "Nuckolls County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 31131,
		"state": "NE",
		"area_name": "Otoe County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 31133,
		"state": "NE",
		"area_name": "Pawnee County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 31135,
		"state": "NE",
		"area_name": "Perkins County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 31137,
		"state": "NE",
		"area_name": "Phelps County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 31139,
		"state": "NE",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 31141,
		"state": "NE",
		"area_name": "Platte County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 31143,
		"state": "NE",
		"area_name": "Polk County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 31145,
		"state": "NE",
		"area_name": "Red Willow County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 31147,
		"state": "NE",
		"area_name": "Richardson County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 31149,
		"state": "NE",
		"area_name": "Rock County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 31151,
		"state": "NE",
		"area_name": "Saline County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 31153,
		"state": "NE",
		"area_name": "Sarpy County",
		"bachelorsOrHigher": 36.6
	},
	{
		"fips": 31155,
		"state": "NE",
		"area_name": "Saunders County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 31157,
		"state": "NE",
		"area_name": "Scotts Bluff County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 31159,
		"state": "NE",
		"area_name": "Seward County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 31161,
		"state": "NE",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 31163,
		"state": "NE",
		"area_name": "Sherman County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 31165,
		"state": "NE",
		"area_name": "Sioux County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 31167,
		"state": "NE",
		"area_name": "Stanton County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 31169,
		"state": "NE",
		"area_name": "Thayer County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 31171,
		"state": "NE",
		"area_name": "Thomas County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 31173,
		"state": "NE",
		"area_name": "Thurston County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 31175,
		"state": "NE",
		"area_name": "Valley County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 31177,
		"state": "NE",
		"area_name": "Washington County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 31179,
		"state": "NE",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 36.4
	},
	{
		"fips": 31181,
		"state": "NE",
		"area_name": "Webster County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 31183,
		"state": "NE",
		"area_name": "Wheeler County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 31185,
		"state": "NE",
		"area_name": "York County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 32001,
		"state": "NV",
		"area_name": "Churchill County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 32003,
		"state": "NV",
		"area_name": "Clark County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 32005,
		"state": "NV",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 32007,
		"state": "NV",
		"area_name": "Elko County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 32009,
		"state": "NV",
		"area_name": "Esmeralda County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 32011,
		"state": "NV",
		"area_name": "Eureka County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 32013,
		"state": "NV",
		"area_name": "Humboldt County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 32015,
		"state": "NV",
		"area_name": "Lander County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 32017,
		"state": "NV",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 32019,
		"state": "NV",
		"area_name": "Lyon County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 32021,
		"state": "NV",
		"area_name": "Mineral County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 32023,
		"state": "NV",
		"area_name": "Nye County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 32027,
		"state": "NV",
		"area_name": "Pershing County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 32029,
		"state": "NV",
		"area_name": "Storey County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 32031,
		"state": "NV",
		"area_name": "Washoe County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 32033,
		"state": "NV",
		"area_name": "White Pine County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 32510,
		"state": "NV",
		"area_name": "Carson City",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 33001,
		"state": "NH",
		"area_name": "Belknap County",
		"bachelorsOrHigher": 29.2
	},
	{
		"fips": 33003,
		"state": "NH",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 32.2
	},
	{
		"fips": 33005,
		"state": "NH",
		"area_name": "Cheshire County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 33007,
		"state": "NH",
		"area_name": "Coos County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 33009,
		"state": "NH",
		"area_name": "Grafton County",
		"bachelorsOrHigher": 37.5
	},
	{
		"fips": 33011,
		"state": "NH",
		"area_name": "Hillsborough County",
		"bachelorsOrHigher": 35.5
	},
	{
		"fips": 33013,
		"state": "NH",
		"area_name": "Merrimack County",
		"bachelorsOrHigher": 33.7
	},
	{
		"fips": 33015,
		"state": "NH",
		"area_name": "Rockingham County",
		"bachelorsOrHigher": 38
	},
	{
		"fips": 33017,
		"state": "NH",
		"area_name": "Strafford County",
		"bachelorsOrHigher": 33.2
	},
	{
		"fips": 33019,
		"state": "NH",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 34001,
		"state": "NJ",
		"area_name": "Atlantic County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 34003,
		"state": "NJ",
		"area_name": "Bergen County",
		"bachelorsOrHigher": 46.1
	},
	{
		"fips": 34005,
		"state": "NJ",
		"area_name": "Burlington County",
		"bachelorsOrHigher": 35.3
	},
	{
		"fips": 34007,
		"state": "NJ",
		"area_name": "Camden County",
		"bachelorsOrHigher": 29.7
	},
	{
		"fips": 34009,
		"state": "NJ",
		"area_name": "Cape May County",
		"bachelorsOrHigher": 29.2
	},
	{
		"fips": 34011,
		"state": "NJ",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 34013,
		"state": "NJ",
		"area_name": "Essex County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 34015,
		"state": "NJ",
		"area_name": "Gloucester County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 34017,
		"state": "NJ",
		"area_name": "Hudson County",
		"bachelorsOrHigher": 36.8
	},
	{
		"fips": 34019,
		"state": "NJ",
		"area_name": "Hunterdon County",
		"bachelorsOrHigher": 48.3
	},
	{
		"fips": 34021,
		"state": "NJ",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 39.8
	},
	{
		"fips": 34023,
		"state": "NJ",
		"area_name": "Middlesex County",
		"bachelorsOrHigher": 40.7
	},
	{
		"fips": 34025,
		"state": "NJ",
		"area_name": "Monmouth County",
		"bachelorsOrHigher": 42
	},
	{
		"fips": 34027,
		"state": "NJ",
		"area_name": "Morris County",
		"bachelorsOrHigher": 50.6
	},
	{
		"fips": 34029,
		"state": "NJ",
		"area_name": "Ocean County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 34031,
		"state": "NJ",
		"area_name": "Passaic County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 34033,
		"state": "NJ",
		"area_name": "Salem County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 34035,
		"state": "NJ",
		"area_name": "Somerset County",
		"bachelorsOrHigher": 52
	},
	{
		"fips": 34037,
		"state": "NJ",
		"area_name": "Sussex County",
		"bachelorsOrHigher": 33.1
	},
	{
		"fips": 34039,
		"state": "NJ",
		"area_name": "Union County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 34041,
		"state": "NJ",
		"area_name": "Warren County",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 35001,
		"state": "NM",
		"area_name": "Bernalillo County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 35003,
		"state": "NM",
		"area_name": "Catron County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 35005,
		"state": "NM",
		"area_name": "Chaves County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 35006,
		"state": "NM",
		"area_name": "Cibola County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 35007,
		"state": "NM",
		"area_name": "Colfax County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 35009,
		"state": "NM",
		"area_name": "Curry County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 35011,
		"state": "NM",
		"area_name": "De Baca County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 35013,
		"state": "NM",
		"area_name": "Dona Ana County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 35015,
		"state": "NM",
		"area_name": "Eddy County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 35017,
		"state": "NM",
		"area_name": "Grant County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 35019,
		"state": "NM",
		"area_name": "Guadalupe County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 35021,
		"state": "NM",
		"area_name": "Harding County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 35023,
		"state": "NM",
		"area_name": "Hidalgo County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 35025,
		"state": "NM",
		"area_name": "Lea County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 35027,
		"state": "NM",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 35028,
		"state": "NM",
		"area_name": "Los Alamos County",
		"bachelorsOrHigher": 64
	},
	{
		"fips": 35029,
		"state": "NM",
		"area_name": "Luna County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 35031,
		"state": "NM",
		"area_name": "McKinley County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 35033,
		"state": "NM",
		"area_name": "Mora County",
		"bachelorsOrHigher": 8
	},
	{
		"fips": 35035,
		"state": "NM",
		"area_name": "Otero County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 35037,
		"state": "NM",
		"area_name": "Quay County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 35039,
		"state": "NM",
		"area_name": "Rio Arriba County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 35041,
		"state": "NM",
		"area_name": "Roosevelt County",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 35043,
		"state": "NM",
		"area_name": "Sandoval County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 35045,
		"state": "NM",
		"area_name": "San Juan County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 35047,
		"state": "NM",
		"area_name": "San Miguel County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 35049,
		"state": "NM",
		"area_name": "Santa Fe County",
		"bachelorsOrHigher": 39.9
	},
	{
		"fips": 35051,
		"state": "NM",
		"area_name": "Sierra County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 35053,
		"state": "NM",
		"area_name": "Socorro County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 35055,
		"state": "NM",
		"area_name": "Taos County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 35057,
		"state": "NM",
		"area_name": "Torrance County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 35059,
		"state": "NM",
		"area_name": "Union County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 35061,
		"state": "NM",
		"area_name": "Valencia County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 36001,
		"state": "NY",
		"area_name": "Albany County",
		"bachelorsOrHigher": 38.7
	},
	{
		"fips": 36003,
		"state": "NY",
		"area_name": "Allegany County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 36005,
		"state": "NY",
		"area_name": "Bronx County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 36007,
		"state": "NY",
		"area_name": "Broome County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 36009,
		"state": "NY",
		"area_name": "Cattaraugus County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 36011,
		"state": "NY",
		"area_name": "Cayuga County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 36013,
		"state": "NY",
		"area_name": "Chautauqua County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 36015,
		"state": "NY",
		"area_name": "Chemung County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 36017,
		"state": "NY",
		"area_name": "Chenango County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 36019,
		"state": "NY",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 36021,
		"state": "NY",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 28.5
	},
	{
		"fips": 36023,
		"state": "NY",
		"area_name": "Cortland County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 36025,
		"state": "NY",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 36027,
		"state": "NY",
		"area_name": "Dutchess County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 36029,
		"state": "NY",
		"area_name": "Erie County",
		"bachelorsOrHigher": 31.2
	},
	{
		"fips": 36031,
		"state": "NY",
		"area_name": "Essex County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 36033,
		"state": "NY",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 36035,
		"state": "NY",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 36037,
		"state": "NY",
		"area_name": "Genesee County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 36039,
		"state": "NY",
		"area_name": "Greene County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 36041,
		"state": "NY",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 36043,
		"state": "NY",
		"area_name": "Herkimer County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 36045,
		"state": "NY",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 36047,
		"state": "NY",
		"area_name": "Kings County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 36049,
		"state": "NY",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 36051,
		"state": "NY",
		"area_name": "Livingston County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 36053,
		"state": "NY",
		"area_name": "Madison County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 36055,
		"state": "NY",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 35.9
	},
	{
		"fips": 36057,
		"state": "NY",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 36059,
		"state": "NY",
		"area_name": "Nassau County",
		"bachelorsOrHigher": 42.3
	},
	{
		"fips": 36061,
		"state": "NY",
		"area_name": "New York County",
		"bachelorsOrHigher": 59.3
	},
	{
		"fips": 36063,
		"state": "NY",
		"area_name": "Niagara County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 36065,
		"state": "NY",
		"area_name": "Oneida County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 36067,
		"state": "NY",
		"area_name": "Onondaga County",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 36069,
		"state": "NY",
		"area_name": "Ontario County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 36071,
		"state": "NY",
		"area_name": "Orange County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 36073,
		"state": "NY",
		"area_name": "Orleans County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 36075,
		"state": "NY",
		"area_name": "Oswego County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 36077,
		"state": "NY",
		"area_name": "Otsego County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 36079,
		"state": "NY",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 38.2
	},
	{
		"fips": 36081,
		"state": "NY",
		"area_name": "Queens County",
		"bachelorsOrHigher": 30.2
	},
	{
		"fips": 36083,
		"state": "NY",
		"area_name": "Rensselaer County",
		"bachelorsOrHigher": 28.5
	},
	{
		"fips": 36085,
		"state": "NY",
		"area_name": "Richmond County",
		"bachelorsOrHigher": 30.6
	},
	{
		"fips": 36087,
		"state": "NY",
		"area_name": "Rockland County",
		"bachelorsOrHigher": 40.7
	},
	{
		"fips": 36089,
		"state": "NY",
		"area_name": "St. Lawrence County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 36091,
		"state": "NY",
		"area_name": "Saratoga County",
		"bachelorsOrHigher": 38
	},
	{
		"fips": 36093,
		"state": "NY",
		"area_name": "Schenectady County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 36095,
		"state": "NY",
		"area_name": "Schoharie County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 36097,
		"state": "NY",
		"area_name": "Schuyler County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 36099,
		"state": "NY",
		"area_name": "Seneca County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 36101,
		"state": "NY",
		"area_name": "Steuben County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 36103,
		"state": "NY",
		"area_name": "Suffolk County",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 36105,
		"state": "NY",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 36107,
		"state": "NY",
		"area_name": "Tioga County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 36109,
		"state": "NY",
		"area_name": "Tompkins County",
		"bachelorsOrHigher": 50.3
	},
	{
		"fips": 36111,
		"state": "NY",
		"area_name": "Ulster County",
		"bachelorsOrHigher": 30.1
	},
	{
		"fips": 36113,
		"state": "NY",
		"area_name": "Warren County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 36115,
		"state": "NY",
		"area_name": "Washington County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 36117,
		"state": "NY",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 36119,
		"state": "NY",
		"area_name": "Westchester County",
		"bachelorsOrHigher": 46
	},
	{
		"fips": 36121,
		"state": "NY",
		"area_name": "Wyoming County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 36123,
		"state": "NY",
		"area_name": "Yates County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 37001,
		"state": "NC",
		"area_name": "Alamance County",
		"bachelorsOrHigher": 21
	},
	{
		"fips": 37003,
		"state": "NC",
		"area_name": "Alexander County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 37005,
		"state": "NC",
		"area_name": "Alleghany County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 37007,
		"state": "NC",
		"area_name": "Anson County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 37009,
		"state": "NC",
		"area_name": "Ashe County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 37011,
		"state": "NC",
		"area_name": "Avery County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 37013,
		"state": "NC",
		"area_name": "Beaufort County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 37015,
		"state": "NC",
		"area_name": "Bertie County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 37017,
		"state": "NC",
		"area_name": "Bladen County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 37019,
		"state": "NC",
		"area_name": "Brunswick County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 37021,
		"state": "NC",
		"area_name": "Buncombe County",
		"bachelorsOrHigher": 35.1
	},
	{
		"fips": 37023,
		"state": "NC",
		"area_name": "Burke County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 37025,
		"state": "NC",
		"area_name": "Cabarrus County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 37027,
		"state": "NC",
		"area_name": "Caldwell County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 37029,
		"state": "NC",
		"area_name": "Camden County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 37031,
		"state": "NC",
		"area_name": "Carteret County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 37033,
		"state": "NC",
		"area_name": "Caswell County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 37035,
		"state": "NC",
		"area_name": "Catawba County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 37037,
		"state": "NC",
		"area_name": "Chatham County",
		"bachelorsOrHigher": 36.2
	},
	{
		"fips": 37039,
		"state": "NC",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37041,
		"state": "NC",
		"area_name": "Chowan County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 37043,
		"state": "NC",
		"area_name": "Clay County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 37045,
		"state": "NC",
		"area_name": "Cleveland County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 37047,
		"state": "NC",
		"area_name": "Columbus County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 37049,
		"state": "NC",
		"area_name": "Craven County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 37051,
		"state": "NC",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 37053,
		"state": "NC",
		"area_name": "Currituck County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 37055,
		"state": "NC",
		"area_name": "Dare County",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 37057,
		"state": "NC",
		"area_name": "Davidson County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 37059,
		"state": "NC",
		"area_name": "Davie County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 37061,
		"state": "NC",
		"area_name": "Duplin County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 37063,
		"state": "NC",
		"area_name": "Durham County",
		"bachelorsOrHigher": 45.6
	},
	{
		"fips": 37065,
		"state": "NC",
		"area_name": "Edgecombe County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 37067,
		"state": "NC",
		"area_name": "Forsyth County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 37069,
		"state": "NC",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 37071,
		"state": "NC",
		"area_name": "Gaston County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 37073,
		"state": "NC",
		"area_name": "Gates County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 37075,
		"state": "NC",
		"area_name": "Graham County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 37077,
		"state": "NC",
		"area_name": "Granville County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 37079,
		"state": "NC",
		"area_name": "Greene County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 37081,
		"state": "NC",
		"area_name": "Guilford County",
		"bachelorsOrHigher": 33.7
	},
	{
		"fips": 37083,
		"state": "NC",
		"area_name": "Halifax County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 37085,
		"state": "NC",
		"area_name": "Harnett County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 37087,
		"state": "NC",
		"area_name": "Haywood County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 37089,
		"state": "NC",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 37091,
		"state": "NC",
		"area_name": "Hertford County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 37093,
		"state": "NC",
		"area_name": "Hoke County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37095,
		"state": "NC",
		"area_name": "Hyde County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 37097,
		"state": "NC",
		"area_name": "Iredell County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 37099,
		"state": "NC",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 37101,
		"state": "NC",
		"area_name": "Johnston County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 37103,
		"state": "NC",
		"area_name": "Jones County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 37105,
		"state": "NC",
		"area_name": "Lee County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 37107,
		"state": "NC",
		"area_name": "Lenoir County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 37109,
		"state": "NC",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 37111,
		"state": "NC",
		"area_name": "McDowell County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 37113,
		"state": "NC",
		"area_name": "Macon County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 37115,
		"state": "NC",
		"area_name": "Madison County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 37117,
		"state": "NC",
		"area_name": "Martin County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 37119,
		"state": "NC",
		"area_name": "Mecklenburg County",
		"bachelorsOrHigher": 41.5
	},
	{
		"fips": 37121,
		"state": "NC",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 37123,
		"state": "NC",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 37125,
		"state": "NC",
		"area_name": "Moore County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 37127,
		"state": "NC",
		"area_name": "Nash County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37129,
		"state": "NC",
		"area_name": "New Hanover County",
		"bachelorsOrHigher": 37.2
	},
	{
		"fips": 37131,
		"state": "NC",
		"area_name": "Northampton County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 37133,
		"state": "NC",
		"area_name": "Onslow County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37135,
		"state": "NC",
		"area_name": "Orange County",
		"bachelorsOrHigher": 56.2
	},
	{
		"fips": 37137,
		"state": "NC",
		"area_name": "Pamlico County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 37139,
		"state": "NC",
		"area_name": "Pasquotank County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 37141,
		"state": "NC",
		"area_name": "Pender County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 37143,
		"state": "NC",
		"area_name": "Perquimans County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 37145,
		"state": "NC",
		"area_name": "Person County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 37147,
		"state": "NC",
		"area_name": "Pitt County",
		"bachelorsOrHigher": 28.8
	},
	{
		"fips": 37149,
		"state": "NC",
		"area_name": "Polk County",
		"bachelorsOrHigher": 30
	},
	{
		"fips": 37151,
		"state": "NC",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 37153,
		"state": "NC",
		"area_name": "Richmond County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 37155,
		"state": "NC",
		"area_name": "Robeson County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 37157,
		"state": "NC",
		"area_name": "Rockingham County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 37159,
		"state": "NC",
		"area_name": "Rowan County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 37161,
		"state": "NC",
		"area_name": "Rutherford County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 37163,
		"state": "NC",
		"area_name": "Sampson County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 37165,
		"state": "NC",
		"area_name": "Scotland County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 37167,
		"state": "NC",
		"area_name": "Stanly County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 37169,
		"state": "NC",
		"area_name": "Stokes County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 37171,
		"state": "NC",
		"area_name": "Surry County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 37173,
		"state": "NC",
		"area_name": "Swain County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 37175,
		"state": "NC",
		"area_name": "Transylvania County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 37177,
		"state": "NC",
		"area_name": "Tyrrell County",
		"bachelorsOrHigher": 8
	},
	{
		"fips": 37179,
		"state": "NC",
		"area_name": "Union County",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 37181,
		"state": "NC",
		"area_name": "Vance County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 37183,
		"state": "NC",
		"area_name": "Wake County",
		"bachelorsOrHigher": 48.3
	},
	{
		"fips": 37185,
		"state": "NC",
		"area_name": "Warren County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 37187,
		"state": "NC",
		"area_name": "Washington County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 37189,
		"state": "NC",
		"area_name": "Watauga County",
		"bachelorsOrHigher": 38
	},
	{
		"fips": 37191,
		"state": "NC",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 37193,
		"state": "NC",
		"area_name": "Wilkes County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 37195,
		"state": "NC",
		"area_name": "Wilson County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 37197,
		"state": "NC",
		"area_name": "Yadkin County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 37199,
		"state": "NC",
		"area_name": "Yancey County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 38001,
		"state": "ND",
		"area_name": "Adams County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 38003,
		"state": "ND",
		"area_name": "Barnes County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 38005,
		"state": "ND",
		"area_name": "Benson County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 38007,
		"state": "ND",
		"area_name": "Billings County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 38009,
		"state": "ND",
		"area_name": "Bottineau County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 38011,
		"state": "ND",
		"area_name": "Bowman County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 38013,
		"state": "ND",
		"area_name": "Burke County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 38015,
		"state": "ND",
		"area_name": "Burleigh County",
		"bachelorsOrHigher": 33.4
	},
	{
		"fips": 38017,
		"state": "ND",
		"area_name": "Cass County",
		"bachelorsOrHigher": 37.4
	},
	{
		"fips": 38019,
		"state": "ND",
		"area_name": "Cavalier County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 38021,
		"state": "ND",
		"area_name": "Dickey County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 38023,
		"state": "ND",
		"area_name": "Divide County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 38025,
		"state": "ND",
		"area_name": "Dunn County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 38027,
		"state": "ND",
		"area_name": "Eddy County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 38029,
		"state": "ND",
		"area_name": "Emmons County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 38031,
		"state": "ND",
		"area_name": "Foster County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 38033,
		"state": "ND",
		"area_name": "Golden Valley County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 38035,
		"state": "ND",
		"area_name": "Grand Forks County",
		"bachelorsOrHigher": 32.6
	},
	{
		"fips": 38037,
		"state": "ND",
		"area_name": "Grant County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 38039,
		"state": "ND",
		"area_name": "Griggs County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 38041,
		"state": "ND",
		"area_name": "Hettinger County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 38043,
		"state": "ND",
		"area_name": "Kidder County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 38045,
		"state": "ND",
		"area_name": "LaMoure County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 38047,
		"state": "ND",
		"area_name": "Logan County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 38049,
		"state": "ND",
		"area_name": "McHenry County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 38051,
		"state": "ND",
		"area_name": "McIntosh County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 38053,
		"state": "ND",
		"area_name": "McKenzie County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 38055,
		"state": "ND",
		"area_name": "McLean County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 38057,
		"state": "ND",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 38059,
		"state": "ND",
		"area_name": "Morton County",
		"bachelorsOrHigher": 25.3
	},
	{
		"fips": 38061,
		"state": "ND",
		"area_name": "Mountrail County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 38063,
		"state": "ND",
		"area_name": "Nelson County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 38065,
		"state": "ND",
		"area_name": "Oliver County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 38067,
		"state": "ND",
		"area_name": "Pembina County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 38069,
		"state": "ND",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 38071,
		"state": "ND",
		"area_name": "Ramsey County",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 38073,
		"state": "ND",
		"area_name": "Ransom County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 38075,
		"state": "ND",
		"area_name": "Renville County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 38077,
		"state": "ND",
		"area_name": "Richland County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 38079,
		"state": "ND",
		"area_name": "Rolette County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 38081,
		"state": "ND",
		"area_name": "Sargent County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 38083,
		"state": "ND",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 38085,
		"state": "ND",
		"area_name": "Sioux County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 38087,
		"state": "ND",
		"area_name": "Slope County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 38089,
		"state": "ND",
		"area_name": "Stark County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 38091,
		"state": "ND",
		"area_name": "Steele County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 38093,
		"state": "ND",
		"area_name": "Stutsman County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 38095,
		"state": "ND",
		"area_name": "Towner County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 38097,
		"state": "ND",
		"area_name": "Traill County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 38099,
		"state": "ND",
		"area_name": "Walsh County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 38101,
		"state": "ND",
		"area_name": "Ward County",
		"bachelorsOrHigher": 25.3
	},
	{
		"fips": 38103,
		"state": "ND",
		"area_name": "Wells County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 38105,
		"state": "ND",
		"area_name": "Williams County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 39001,
		"state": "OH",
		"area_name": "Adams County",
		"bachelorsOrHigher": 9.8
	},
	{
		"fips": 39003,
		"state": "OH",
		"area_name": "Allen County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 39005,
		"state": "OH",
		"area_name": "Ashland County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 39007,
		"state": "OH",
		"area_name": "Ashtabula County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 39009,
		"state": "OH",
		"area_name": "Athens County",
		"bachelorsOrHigher": 28.8
	},
	{
		"fips": 39011,
		"state": "OH",
		"area_name": "Auglaize County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 39013,
		"state": "OH",
		"area_name": "Belmont County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 39015,
		"state": "OH",
		"area_name": "Brown County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 39017,
		"state": "OH",
		"area_name": "Butler County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 39019,
		"state": "OH",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 39021,
		"state": "OH",
		"area_name": "Champaign County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 39023,
		"state": "OH",
		"area_name": "Clark County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 39025,
		"state": "OH",
		"area_name": "Clermont County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 39027,
		"state": "OH",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 39029,
		"state": "OH",
		"area_name": "Columbiana County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 39031,
		"state": "OH",
		"area_name": "Coshocton County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 39033,
		"state": "OH",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 39035,
		"state": "OH",
		"area_name": "Cuyahoga County",
		"bachelorsOrHigher": 30.3
	},
	{
		"fips": 39037,
		"state": "OH",
		"area_name": "Darke County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 39039,
		"state": "OH",
		"area_name": "Defiance County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 39041,
		"state": "OH",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 51.1
	},
	{
		"fips": 39043,
		"state": "OH",
		"area_name": "Erie County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 39045,
		"state": "OH",
		"area_name": "Fairfield County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 39047,
		"state": "OH",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 39049,
		"state": "OH",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 36.7
	},
	{
		"fips": 39051,
		"state": "OH",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 39053,
		"state": "OH",
		"area_name": "Gallia County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 39055,
		"state": "OH",
		"area_name": "Geauga County",
		"bachelorsOrHigher": 36
	},
	{
		"fips": 39057,
		"state": "OH",
		"area_name": "Greene County",
		"bachelorsOrHigher": 36.9
	},
	{
		"fips": 39059,
		"state": "OH",
		"area_name": "Guernsey County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 39061,
		"state": "OH",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 39063,
		"state": "OH",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 39065,
		"state": "OH",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 39067,
		"state": "OH",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 39069,
		"state": "OH",
		"area_name": "Henry County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 39071,
		"state": "OH",
		"area_name": "Highland County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 39073,
		"state": "OH",
		"area_name": "Hocking County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 39075,
		"state": "OH",
		"area_name": "Holmes County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 39077,
		"state": "OH",
		"area_name": "Huron County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 39079,
		"state": "OH",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 39081,
		"state": "OH",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 39083,
		"state": "OH",
		"area_name": "Knox County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 39085,
		"state": "OH",
		"area_name": "Lake County",
		"bachelorsOrHigher": 26
	},
	{
		"fips": 39087,
		"state": "OH",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 39089,
		"state": "OH",
		"area_name": "Licking County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 39091,
		"state": "OH",
		"area_name": "Logan County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 39093,
		"state": "OH",
		"area_name": "Lorain County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 39095,
		"state": "OH",
		"area_name": "Lucas County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 39097,
		"state": "OH",
		"area_name": "Madison County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 39099,
		"state": "OH",
		"area_name": "Mahoning County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 39101,
		"state": "OH",
		"area_name": "Marion County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 39103,
		"state": "OH",
		"area_name": "Medina County",
		"bachelorsOrHigher": 29.9
	},
	{
		"fips": 39105,
		"state": "OH",
		"area_name": "Meigs County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 39107,
		"state": "OH",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 39109,
		"state": "OH",
		"area_name": "Miami County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 39111,
		"state": "OH",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 39113,
		"state": "OH",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 39115,
		"state": "OH",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 39117,
		"state": "OH",
		"area_name": "Morrow County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 39119,
		"state": "OH",
		"area_name": "Muskingum County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 39121,
		"state": "OH",
		"area_name": "Noble County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 39123,
		"state": "OH",
		"area_name": "Ottawa County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 39125,
		"state": "OH",
		"area_name": "Paulding County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 39127,
		"state": "OH",
		"area_name": "Perry County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 39129,
		"state": "OH",
		"area_name": "Pickaway County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 39131,
		"state": "OH",
		"area_name": "Pike County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 39133,
		"state": "OH",
		"area_name": "Portage County",
		"bachelorsOrHigher": 25.5
	},
	{
		"fips": 39135,
		"state": "OH",
		"area_name": "Preble County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 39137,
		"state": "OH",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 39139,
		"state": "OH",
		"area_name": "Richland County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 39141,
		"state": "OH",
		"area_name": "Ross County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 39143,
		"state": "OH",
		"area_name": "Sandusky County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 39145,
		"state": "OH",
		"area_name": "Scioto County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 39147,
		"state": "OH",
		"area_name": "Seneca County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 39149,
		"state": "OH",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 39151,
		"state": "OH",
		"area_name": "Stark County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 39153,
		"state": "OH",
		"area_name": "Summit County",
		"bachelorsOrHigher": 29.9
	},
	{
		"fips": 39155,
		"state": "OH",
		"area_name": "Trumbull County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 39157,
		"state": "OH",
		"area_name": "Tuscarawas County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 39159,
		"state": "OH",
		"area_name": "Union County",
		"bachelorsOrHigher": 26
	},
	{
		"fips": 39161,
		"state": "OH",
		"area_name": "Van Wert County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 39163,
		"state": "OH",
		"area_name": "Vinton County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 39165,
		"state": "OH",
		"area_name": "Warren County",
		"bachelorsOrHigher": 38.7
	},
	{
		"fips": 39167,
		"state": "OH",
		"area_name": "Washington County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 39169,
		"state": "OH",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 39171,
		"state": "OH",
		"area_name": "Williams County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 39173,
		"state": "OH",
		"area_name": "Wood County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 39175,
		"state": "OH",
		"area_name": "Wyandot County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 40001,
		"state": "OK",
		"area_name": "Adair County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 40003,
		"state": "OK",
		"area_name": "Alfalfa County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 40005,
		"state": "OK",
		"area_name": "Atoka County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 40007,
		"state": "OK",
		"area_name": "Beaver County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 40009,
		"state": "OK",
		"area_name": "Beckham County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 40011,
		"state": "OK",
		"area_name": "Blaine County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 40013,
		"state": "OK",
		"area_name": "Bryan County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 40015,
		"state": "OK",
		"area_name": "Caddo County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 40017,
		"state": "OK",
		"area_name": "Canadian County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 40019,
		"state": "OK",
		"area_name": "Carter County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 40021,
		"state": "OK",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 40023,
		"state": "OK",
		"area_name": "Choctaw County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 40025,
		"state": "OK",
		"area_name": "Cimarron County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 40027,
		"state": "OK",
		"area_name": "Cleveland County",
		"bachelorsOrHigher": 31
	},
	{
		"fips": 40029,
		"state": "OK",
		"area_name": "Coal County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 40031,
		"state": "OK",
		"area_name": "Comanche County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 40033,
		"state": "OK",
		"area_name": "Cotton County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 40035,
		"state": "OK",
		"area_name": "Craig County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 40037,
		"state": "OK",
		"area_name": "Creek County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 40039,
		"state": "OK",
		"area_name": "Custer County",
		"bachelorsOrHigher": 27.3
	},
	{
		"fips": 40041,
		"state": "OK",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 40043,
		"state": "OK",
		"area_name": "Dewey County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 40045,
		"state": "OK",
		"area_name": "Ellis County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 40047,
		"state": "OK",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 40049,
		"state": "OK",
		"area_name": "Garvin County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 40051,
		"state": "OK",
		"area_name": "Grady County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 40053,
		"state": "OK",
		"area_name": "Grant County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 40055,
		"state": "OK",
		"area_name": "Greer County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 40057,
		"state": "OK",
		"area_name": "Harmon County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 40059,
		"state": "OK",
		"area_name": "Harper County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 40061,
		"state": "OK",
		"area_name": "Haskell County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 40063,
		"state": "OK",
		"area_name": "Hughes County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 40065,
		"state": "OK",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 40067,
		"state": "OK",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 40069,
		"state": "OK",
		"area_name": "Johnston County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 40071,
		"state": "OK",
		"area_name": "Kay County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 40073,
		"state": "OK",
		"area_name": "Kingfisher County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 40075,
		"state": "OK",
		"area_name": "Kiowa County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 40077,
		"state": "OK",
		"area_name": "Latimer County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 40079,
		"state": "OK",
		"area_name": "Le Flore County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 40081,
		"state": "OK",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 40083,
		"state": "OK",
		"area_name": "Logan County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 40085,
		"state": "OK",
		"area_name": "Love County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 40087,
		"state": "OK",
		"area_name": "McClain County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 40089,
		"state": "OK",
		"area_name": "McCurtain County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 40091,
		"state": "OK",
		"area_name": "McIntosh County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 40093,
		"state": "OK",
		"area_name": "Major County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 40095,
		"state": "OK",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 40097,
		"state": "OK",
		"area_name": "Mayes County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 40099,
		"state": "OK",
		"area_name": "Murray County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 40101,
		"state": "OK",
		"area_name": "Muskogee County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 40103,
		"state": "OK",
		"area_name": "Noble County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 40105,
		"state": "OK",
		"area_name": "Nowata County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 40107,
		"state": "OK",
		"area_name": "Okfuskee County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 40109,
		"state": "OK",
		"area_name": "Oklahoma County",
		"bachelorsOrHigher": 30.2
	},
	{
		"fips": 40111,
		"state": "OK",
		"area_name": "Okmulgee County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 40113,
		"state": "OK",
		"area_name": "Osage County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 40115,
		"state": "OK",
		"area_name": "Ottawa County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 40117,
		"state": "OK",
		"area_name": "Pawnee County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 40119,
		"state": "OK",
		"area_name": "Payne County",
		"bachelorsOrHigher": 36.4
	},
	{
		"fips": 40121,
		"state": "OK",
		"area_name": "Pittsburg County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 40123,
		"state": "OK",
		"area_name": "Pontotoc County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 40125,
		"state": "OK",
		"area_name": "Pottawatomie County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 40127,
		"state": "OK",
		"area_name": "Pushmataha County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 40129,
		"state": "OK",
		"area_name": "Roger Mills County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 40131,
		"state": "OK",
		"area_name": "Rogers County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 40133,
		"state": "OK",
		"area_name": "Seminole County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 40135,
		"state": "OK",
		"area_name": "Sequoyah County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 40137,
		"state": "OK",
		"area_name": "Stephens County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 40139,
		"state": "OK",
		"area_name": "Texas County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 40141,
		"state": "OK",
		"area_name": "Tillman County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 40143,
		"state": "OK",
		"area_name": "Tulsa County",
		"bachelorsOrHigher": 30
	},
	{
		"fips": 40145,
		"state": "OK",
		"area_name": "Wagoner County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 40147,
		"state": "OK",
		"area_name": "Washington County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 40149,
		"state": "OK",
		"area_name": "Washita County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 40151,
		"state": "OK",
		"area_name": "Woods County",
		"bachelorsOrHigher": 25.7
	},
	{
		"fips": 40153,
		"state": "OK",
		"area_name": "Woodward County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 41001,
		"state": "OR",
		"area_name": "Baker County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 41003,
		"state": "OR",
		"area_name": "Benton County",
		"bachelorsOrHigher": 51.4
	},
	{
		"fips": 41005,
		"state": "OR",
		"area_name": "Clackamas County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 41007,
		"state": "OR",
		"area_name": "Clatsop County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 41009,
		"state": "OR",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 41011,
		"state": "OR",
		"area_name": "Coos County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 41013,
		"state": "OR",
		"area_name": "Crook County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 41015,
		"state": "OR",
		"area_name": "Curry County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 41017,
		"state": "OR",
		"area_name": "Deschutes County",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 41019,
		"state": "OR",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 41021,
		"state": "OR",
		"area_name": "Gilliam County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 41023,
		"state": "OR",
		"area_name": "Grant County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 41025,
		"state": "OR",
		"area_name": "Harney County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 41027,
		"state": "OR",
		"area_name": "Hood River County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 41029,
		"state": "OR",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 41031,
		"state": "OR",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 41033,
		"state": "OR",
		"area_name": "Josephine County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 41035,
		"state": "OR",
		"area_name": "Klamath County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 41037,
		"state": "OR",
		"area_name": "Lake County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 41039,
		"state": "OR",
		"area_name": "Lane County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 41041,
		"state": "OR",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 41043,
		"state": "OR",
		"area_name": "Linn County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 41045,
		"state": "OR",
		"area_name": "Malheur County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 41047,
		"state": "OR",
		"area_name": "Marion County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 41049,
		"state": "OR",
		"area_name": "Morrow County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 41051,
		"state": "OR",
		"area_name": "Multnomah County",
		"bachelorsOrHigher": 40.3
	},
	{
		"fips": 41053,
		"state": "OR",
		"area_name": "Polk County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 41055,
		"state": "OR",
		"area_name": "Sherman County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 41057,
		"state": "OR",
		"area_name": "Tillamook County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 41059,
		"state": "OR",
		"area_name": "Umatilla County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 41061,
		"state": "OR",
		"area_name": "Union County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 41063,
		"state": "OR",
		"area_name": "Wallowa County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 41065,
		"state": "OR",
		"area_name": "Wasco County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 41067,
		"state": "OR",
		"area_name": "Washington County",
		"bachelorsOrHigher": 39.7
	},
	{
		"fips": 41069,
		"state": "OR",
		"area_name": "Wheeler County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 41071,
		"state": "OR",
		"area_name": "Yamhill County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 42001,
		"state": "PA",
		"area_name": "Adams County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 42003,
		"state": "PA",
		"area_name": "Allegheny County",
		"bachelorsOrHigher": 36.9
	},
	{
		"fips": 42005,
		"state": "PA",
		"area_name": "Armstrong County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 42007,
		"state": "PA",
		"area_name": "Beaver County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 42009,
		"state": "PA",
		"area_name": "Bedford County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 42011,
		"state": "PA",
		"area_name": "Berks County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 42013,
		"state": "PA",
		"area_name": "Blair County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 42015,
		"state": "PA",
		"area_name": "Bradford County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 42017,
		"state": "PA",
		"area_name": "Bucks County",
		"bachelorsOrHigher": 36.5
	},
	{
		"fips": 42019,
		"state": "PA",
		"area_name": "Butler County",
		"bachelorsOrHigher": 31.7
	},
	{
		"fips": 42021,
		"state": "PA",
		"area_name": "Cambria County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 42023,
		"state": "PA",
		"area_name": "Cameron County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 42025,
		"state": "PA",
		"area_name": "Carbon County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 42027,
		"state": "PA",
		"area_name": "Centre County",
		"bachelorsOrHigher": 40.4
	},
	{
		"fips": 42029,
		"state": "PA",
		"area_name": "Chester County",
		"bachelorsOrHigher": 48.8
	},
	{
		"fips": 42031,
		"state": "PA",
		"area_name": "Clarion County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 42033,
		"state": "PA",
		"area_name": "Clearfield County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 42035,
		"state": "PA",
		"area_name": "Clinton County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 42037,
		"state": "PA",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 42039,
		"state": "PA",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 42041,
		"state": "PA",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 32.8
	},
	{
		"fips": 42043,
		"state": "PA",
		"area_name": "Dauphin County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 42045,
		"state": "PA",
		"area_name": "Delaware County",
		"bachelorsOrHigher": 35.5
	},
	{
		"fips": 42047,
		"state": "PA",
		"area_name": "Elk County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 42049,
		"state": "PA",
		"area_name": "Erie County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 42051,
		"state": "PA",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 42053,
		"state": "PA",
		"area_name": "Forest County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 42055,
		"state": "PA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 42057,
		"state": "PA",
		"area_name": "Fulton County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 42059,
		"state": "PA",
		"area_name": "Greene County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 42061,
		"state": "PA",
		"area_name": "Huntingdon County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 42063,
		"state": "PA",
		"area_name": "Indiana County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 42065,
		"state": "PA",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 42067,
		"state": "PA",
		"area_name": "Juniata County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 42069,
		"state": "PA",
		"area_name": "Lackawanna County",
		"bachelorsOrHigher": 25.7
	},
	{
		"fips": 42071,
		"state": "PA",
		"area_name": "Lancaster County",
		"bachelorsOrHigher": 24.7
	},
	{
		"fips": 42073,
		"state": "PA",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 42075,
		"state": "PA",
		"area_name": "Lebanon County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 42077,
		"state": "PA",
		"area_name": "Lehigh County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 42079,
		"state": "PA",
		"area_name": "Luzerne County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 42081,
		"state": "PA",
		"area_name": "Lycoming County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 42083,
		"state": "PA",
		"area_name": "McKean County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 42085,
		"state": "PA",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 42087,
		"state": "PA",
		"area_name": "Mifflin County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 42089,
		"state": "PA",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 42091,
		"state": "PA",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 46.2
	},
	{
		"fips": 42093,
		"state": "PA",
		"area_name": "Montour County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 42095,
		"state": "PA",
		"area_name": "Northampton County",
		"bachelorsOrHigher": 27.2
	},
	{
		"fips": 42097,
		"state": "PA",
		"area_name": "Northumberland County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 42099,
		"state": "PA",
		"area_name": "Perry County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 42101,
		"state": "PA",
		"area_name": "Philadelphia County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 42103,
		"state": "PA",
		"area_name": "Pike County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 42105,
		"state": "PA",
		"area_name": "Potter County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 42107,
		"state": "PA",
		"area_name": "Schuylkill County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 42109,
		"state": "PA",
		"area_name": "Snyder County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 42111,
		"state": "PA",
		"area_name": "Somerset County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 42113,
		"state": "PA",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 42115,
		"state": "PA",
		"area_name": "Susquehanna County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 42117,
		"state": "PA",
		"area_name": "Tioga County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 42119,
		"state": "PA",
		"area_name": "Union County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 42121,
		"state": "PA",
		"area_name": "Venango County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 42123,
		"state": "PA",
		"area_name": "Warren County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 42125,
		"state": "PA",
		"area_name": "Washington County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 42127,
		"state": "PA",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 42129,
		"state": "PA",
		"area_name": "Westmoreland County",
		"bachelorsOrHigher": 26.2
	},
	{
		"fips": 42131,
		"state": "PA",
		"area_name": "Wyoming County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 42133,
		"state": "PA",
		"area_name": "York County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 44001,
		"state": "RI",
		"area_name": "Bristol County",
		"bachelorsOrHigher": 43.5
	},
	{
		"fips": 44003,
		"state": "RI",
		"area_name": "Kent County",
		"bachelorsOrHigher": 30.1
	},
	{
		"fips": 44005,
		"state": "RI",
		"area_name": "Newport County",
		"bachelorsOrHigher": 44.9
	},
	{
		"fips": 44007,
		"state": "RI",
		"area_name": "Providence County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 44009,
		"state": "RI",
		"area_name": "Washington County",
		"bachelorsOrHigher": 43.8
	},
	{
		"fips": 45001,
		"state": "SC",
		"area_name": "Abbeville County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 45003,
		"state": "SC",
		"area_name": "Aiken County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 45005,
		"state": "SC",
		"area_name": "Allendale County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 45007,
		"state": "SC",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 45009,
		"state": "SC",
		"area_name": "Bamberg County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 45011,
		"state": "SC",
		"area_name": "Barnwell County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 45013,
		"state": "SC",
		"area_name": "Beaufort County",
		"bachelorsOrHigher": 37.4
	},
	{
		"fips": 45015,
		"state": "SC",
		"area_name": "Berkeley County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 45017,
		"state": "SC",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 45019,
		"state": "SC",
		"area_name": "Charleston County",
		"bachelorsOrHigher": 40
	},
	{
		"fips": 45021,
		"state": "SC",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 45023,
		"state": "SC",
		"area_name": "Chester County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 45025,
		"state": "SC",
		"area_name": "Chesterfield County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 45027,
		"state": "SC",
		"area_name": "Clarendon County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 45029,
		"state": "SC",
		"area_name": "Colleton County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 45031,
		"state": "SC",
		"area_name": "Darlington County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 45033,
		"state": "SC",
		"area_name": "Dillon County",
		"bachelorsOrHigher": 8.3
	},
	{
		"fips": 45035,
		"state": "SC",
		"area_name": "Dorchester County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 45037,
		"state": "SC",
		"area_name": "Edgefield County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 45039,
		"state": "SC",
		"area_name": "Fairfield County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 45041,
		"state": "SC",
		"area_name": "Florence County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 45043,
		"state": "SC",
		"area_name": "Georgetown County",
		"bachelorsOrHigher": 23.8
	},
	{
		"fips": 45045,
		"state": "SC",
		"area_name": "Greenville County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 45047,
		"state": "SC",
		"area_name": "Greenwood County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 45049,
		"state": "SC",
		"area_name": "Hampton County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 45051,
		"state": "SC",
		"area_name": "Horry County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 45053,
		"state": "SC",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 45055,
		"state": "SC",
		"area_name": "Kershaw County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 45057,
		"state": "SC",
		"area_name": "Lancaster County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 45059,
		"state": "SC",
		"area_name": "Laurens County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 45061,
		"state": "SC",
		"area_name": "Lee County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 45063,
		"state": "SC",
		"area_name": "Lexington County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 45065,
		"state": "SC",
		"area_name": "McCormick County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 45067,
		"state": "SC",
		"area_name": "Marion County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 45069,
		"state": "SC",
		"area_name": "Marlboro County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 45071,
		"state": "SC",
		"area_name": "Newberry County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 45073,
		"state": "SC",
		"area_name": "Oconee County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 45075,
		"state": "SC",
		"area_name": "Orangeburg County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 45077,
		"state": "SC",
		"area_name": "Pickens County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 45079,
		"state": "SC",
		"area_name": "Richland County",
		"bachelorsOrHigher": 36.2
	},
	{
		"fips": 45081,
		"state": "SC",
		"area_name": "Saluda County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 45083,
		"state": "SC",
		"area_name": "Spartanburg County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 45085,
		"state": "SC",
		"area_name": "Sumter County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 45087,
		"state": "SC",
		"area_name": "Union County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 45089,
		"state": "SC",
		"area_name": "Williamsburg County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 45091,
		"state": "SC",
		"area_name": "York County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 46003,
		"state": "SD",
		"area_name": "Aurora County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 46005,
		"state": "SD",
		"area_name": "Beadle County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 46007,
		"state": "SD",
		"area_name": "Bennett County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 46009,
		"state": "SD",
		"area_name": "Bon Homme County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 46011,
		"state": "SD",
		"area_name": "Brookings County",
		"bachelorsOrHigher": 41.4
	},
	{
		"fips": 46013,
		"state": "SD",
		"area_name": "Brown County",
		"bachelorsOrHigher": 26.9
	},
	{
		"fips": 46015,
		"state": "SD",
		"area_name": "Brule County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 46017,
		"state": "SD",
		"area_name": "Buffalo County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 46019,
		"state": "SD",
		"area_name": "Butte County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 46021,
		"state": "SD",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 46023,
		"state": "SD",
		"area_name": "Charles Mix County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 46025,
		"state": "SD",
		"area_name": "Clark County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 46027,
		"state": "SD",
		"area_name": "Clay County",
		"bachelorsOrHigher": 43.1
	},
	{
		"fips": 46029,
		"state": "SD",
		"area_name": "Codington County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 46031,
		"state": "SD",
		"area_name": "Corson County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 46033,
		"state": "SD",
		"area_name": "Custer County",
		"bachelorsOrHigher": 27.4
	},
	{
		"fips": 46035,
		"state": "SD",
		"area_name": "Davison County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 46037,
		"state": "SD",
		"area_name": "Day County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 46039,
		"state": "SD",
		"area_name": "Deuel County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 46041,
		"state": "SD",
		"area_name": "Dewey County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 46043,
		"state": "SD",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 46045,
		"state": "SD",
		"area_name": "Edmunds County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 46047,
		"state": "SD",
		"area_name": "Fall River County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 46049,
		"state": "SD",
		"area_name": "Faulk County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 46051,
		"state": "SD",
		"area_name": "Grant County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 46053,
		"state": "SD",
		"area_name": "Gregory County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 46055,
		"state": "SD",
		"area_name": "Haakon County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 46057,
		"state": "SD",
		"area_name": "Hamlin County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 46059,
		"state": "SD",
		"area_name": "Hand County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 46061,
		"state": "SD",
		"area_name": "Hanson County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 46063,
		"state": "SD",
		"area_name": "Harding County",
		"bachelorsOrHigher": 30.5
	},
	{
		"fips": 46065,
		"state": "SD",
		"area_name": "Hughes County",
		"bachelorsOrHigher": 32.1
	},
	{
		"fips": 46067,
		"state": "SD",
		"area_name": "Hutchinson County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 46069,
		"state": "SD",
		"area_name": "Hyde County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 46071,
		"state": "SD",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 46073,
		"state": "SD",
		"area_name": "Jerauld County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 46075,
		"state": "SD",
		"area_name": "Jones County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 46077,
		"state": "SD",
		"area_name": "Kingsbury County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 46079,
		"state": "SD",
		"area_name": "Lake County",
		"bachelorsOrHigher": 28.4
	},
	{
		"fips": 46081,
		"state": "SD",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 29.5
	},
	{
		"fips": 46083,
		"state": "SD",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 41
	},
	{
		"fips": 46085,
		"state": "SD",
		"area_name": "Lyman County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 46087,
		"state": "SD",
		"area_name": "McCook County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 46089,
		"state": "SD",
		"area_name": "McPherson County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 46091,
		"state": "SD",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 46093,
		"state": "SD",
		"area_name": "Meade County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 46095,
		"state": "SD",
		"area_name": "Mellette County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 46097,
		"state": "SD",
		"area_name": "Miner County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 46099,
		"state": "SD",
		"area_name": "Minnehaha County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 46101,
		"state": "SD",
		"area_name": "Moody County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 46103,
		"state": "SD",
		"area_name": "Pennington County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 46105,
		"state": "SD",
		"area_name": "Perkins County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 46107,
		"state": "SD",
		"area_name": "Potter County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 46109,
		"state": "SD",
		"area_name": "Roberts County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 46111,
		"state": "SD",
		"area_name": "Sanborn County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 46102,
		"state": "SD",
		"area_name": "Oglala Lakota County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 46115,
		"state": "SD",
		"area_name": "Spink County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 46117,
		"state": "SD",
		"area_name": "Stanley County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 46119,
		"state": "SD",
		"area_name": "Sully County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 46121,
		"state": "SD",
		"area_name": "Todd County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 46123,
		"state": "SD",
		"area_name": "Tripp County",
		"bachelorsOrHigher": 21.8
	},
	{
		"fips": 46125,
		"state": "SD",
		"area_name": "Turner County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 46127,
		"state": "SD",
		"area_name": "Union County",
		"bachelorsOrHigher": 32.7
	},
	{
		"fips": 46129,
		"state": "SD",
		"area_name": "Walworth County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 46135,
		"state": "SD",
		"area_name": "Yankton County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 46137,
		"state": "SD",
		"area_name": "Ziebach County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 47001,
		"state": "TN",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 47003,
		"state": "TN",
		"area_name": "Bedford County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 47005,
		"state": "TN",
		"area_name": "Benton County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 47007,
		"state": "TN",
		"area_name": "Bledsoe County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 47009,
		"state": "TN",
		"area_name": "Blount County",
		"bachelorsOrHigher": 21.7
	},
	{
		"fips": 47011,
		"state": "TN",
		"area_name": "Bradley County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 47013,
		"state": "TN",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 47015,
		"state": "TN",
		"area_name": "Cannon County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 47017,
		"state": "TN",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 47019,
		"state": "TN",
		"area_name": "Carter County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 47021,
		"state": "TN",
		"area_name": "Cheatham County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 47023,
		"state": "TN",
		"area_name": "Chester County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 47025,
		"state": "TN",
		"area_name": "Claiborne County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 47027,
		"state": "TN",
		"area_name": "Clay County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 47029,
		"state": "TN",
		"area_name": "Cocke County",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 47031,
		"state": "TN",
		"area_name": "Coffee County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 47033,
		"state": "TN",
		"area_name": "Crockett County",
		"bachelorsOrHigher": 12
	},
	{
		"fips": 47035,
		"state": "TN",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 47037,
		"state": "TN",
		"area_name": "Davidson County",
		"bachelorsOrHigher": 36.5
	},
	{
		"fips": 47039,
		"state": "TN",
		"area_name": "Decatur County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 47041,
		"state": "TN",
		"area_name": "DeKalb County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 47043,
		"state": "TN",
		"area_name": "Dickson County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 47045,
		"state": "TN",
		"area_name": "Dyer County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 47047,
		"state": "TN",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 22.7
	},
	{
		"fips": 47049,
		"state": "TN",
		"area_name": "Fentress County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 47051,
		"state": "TN",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 47053,
		"state": "TN",
		"area_name": "Gibson County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 47055,
		"state": "TN",
		"area_name": "Giles County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 47057,
		"state": "TN",
		"area_name": "Grainger County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 47059,
		"state": "TN",
		"area_name": "Greene County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 47061,
		"state": "TN",
		"area_name": "Grundy County",
		"bachelorsOrHigher": 9.7
	},
	{
		"fips": 47063,
		"state": "TN",
		"area_name": "Hamblen County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 47065,
		"state": "TN",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 47067,
		"state": "TN",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 47069,
		"state": "TN",
		"area_name": "Hardeman County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 47071,
		"state": "TN",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 47073,
		"state": "TN",
		"area_name": "Hawkins County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 47075,
		"state": "TN",
		"area_name": "Haywood County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 47077,
		"state": "TN",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 47079,
		"state": "TN",
		"area_name": "Henry County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 47081,
		"state": "TN",
		"area_name": "Hickman County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 47083,
		"state": "TN",
		"area_name": "Houston County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 47085,
		"state": "TN",
		"area_name": "Humphreys County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 47087,
		"state": "TN",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 9.5
	},
	{
		"fips": 47089,
		"state": "TN",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 47091,
		"state": "TN",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 47093,
		"state": "TN",
		"area_name": "Knox County",
		"bachelorsOrHigher": 34.5
	},
	{
		"fips": 47095,
		"state": "TN",
		"area_name": "Lake County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 47097,
		"state": "TN",
		"area_name": "Lauderdale County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 47099,
		"state": "TN",
		"area_name": "Lawrence County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 47101,
		"state": "TN",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 47103,
		"state": "TN",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 47105,
		"state": "TN",
		"area_name": "Loudon County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 47107,
		"state": "TN",
		"area_name": "McMinn County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 47109,
		"state": "TN",
		"area_name": "McNairy County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 47111,
		"state": "TN",
		"area_name": "Macon County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 47113,
		"state": "TN",
		"area_name": "Madison County",
		"bachelorsOrHigher": 25.1
	},
	{
		"fips": 47115,
		"state": "TN",
		"area_name": "Marion County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 47117,
		"state": "TN",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 47119,
		"state": "TN",
		"area_name": "Maury County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 47121,
		"state": "TN",
		"area_name": "Meigs County",
		"bachelorsOrHigher": 7.8
	},
	{
		"fips": 47123,
		"state": "TN",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 47125,
		"state": "TN",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 47127,
		"state": "TN",
		"area_name": "Moore County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 47129,
		"state": "TN",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 7.3
	},
	{
		"fips": 47131,
		"state": "TN",
		"area_name": "Obion County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 47133,
		"state": "TN",
		"area_name": "Overton County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 47135,
		"state": "TN",
		"area_name": "Perry County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 47137,
		"state": "TN",
		"area_name": "Pickett County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 47139,
		"state": "TN",
		"area_name": "Polk County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 47141,
		"state": "TN",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 22.8
	},
	{
		"fips": 47143,
		"state": "TN",
		"area_name": "Rhea County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 47145,
		"state": "TN",
		"area_name": "Roane County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 47147,
		"state": "TN",
		"area_name": "Robertson County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 47149,
		"state": "TN",
		"area_name": "Rutherford County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 47151,
		"state": "TN",
		"area_name": "Scott County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 47153,
		"state": "TN",
		"area_name": "Sequatchie County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 47155,
		"state": "TN",
		"area_name": "Sevier County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 47157,
		"state": "TN",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 29.8
	},
	{
		"fips": 47159,
		"state": "TN",
		"area_name": "Smith County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 47161,
		"state": "TN",
		"area_name": "Stewart County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 47163,
		"state": "TN",
		"area_name": "Sullivan County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 47165,
		"state": "TN",
		"area_name": "Sumner County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 47167,
		"state": "TN",
		"area_name": "Tipton County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 47169,
		"state": "TN",
		"area_name": "Trousdale County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 47171,
		"state": "TN",
		"area_name": "Unicoi County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 47173,
		"state": "TN",
		"area_name": "Union County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 47175,
		"state": "TN",
		"area_name": "Van Buren County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 47177,
		"state": "TN",
		"area_name": "Warren County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 47179,
		"state": "TN",
		"area_name": "Washington County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 47181,
		"state": "TN",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 8.2
	},
	{
		"fips": 47183,
		"state": "TN",
		"area_name": "Weakley County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 47185,
		"state": "TN",
		"area_name": "White County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 47187,
		"state": "TN",
		"area_name": "Williamson County",
		"bachelorsOrHigher": 54.1
	},
	{
		"fips": 47189,
		"state": "TN",
		"area_name": "Wilson County",
		"bachelorsOrHigher": 26.7
	},
	{
		"fips": 48001,
		"state": "TX",
		"area_name": "Anderson County",
		"bachelorsOrHigher": 11.3
	},
	{
		"fips": 48003,
		"state": "TX",
		"area_name": "Andrews County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 48005,
		"state": "TX",
		"area_name": "Angelina County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 48007,
		"state": "TX",
		"area_name": "Aransas County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 48009,
		"state": "TX",
		"area_name": "Archer County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 48011,
		"state": "TX",
		"area_name": "Armstrong County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 48013,
		"state": "TX",
		"area_name": "Atascosa County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 48015,
		"state": "TX",
		"area_name": "Austin County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 48017,
		"state": "TX",
		"area_name": "Bailey County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 48019,
		"state": "TX",
		"area_name": "Bandera County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 48021,
		"state": "TX",
		"area_name": "Bastrop County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 48023,
		"state": "TX",
		"area_name": "Baylor County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 48025,
		"state": "TX",
		"area_name": "Bee County",
		"bachelorsOrHigher": 8.9
	},
	{
		"fips": 48027,
		"state": "TX",
		"area_name": "Bell County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 48029,
		"state": "TX",
		"area_name": "Bexar County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 48031,
		"state": "TX",
		"area_name": "Blanco County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 48033,
		"state": "TX",
		"area_name": "Borden County",
		"bachelorsOrHigher": 33.1
	},
	{
		"fips": 48035,
		"state": "TX",
		"area_name": "Bosque County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 48037,
		"state": "TX",
		"area_name": "Bowie County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 48039,
		"state": "TX",
		"area_name": "Brazoria County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 48041,
		"state": "TX",
		"area_name": "Brazos County",
		"bachelorsOrHigher": 38.3
	},
	{
		"fips": 48043,
		"state": "TX",
		"area_name": "Brewster County",
		"bachelorsOrHigher": 36.3
	},
	{
		"fips": 48045,
		"state": "TX",
		"area_name": "Briscoe County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 48047,
		"state": "TX",
		"area_name": "Brooks County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 48049,
		"state": "TX",
		"area_name": "Brown County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 48051,
		"state": "TX",
		"area_name": "Burleson County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 48053,
		"state": "TX",
		"area_name": "Burnet County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 48055,
		"state": "TX",
		"area_name": "Caldwell County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 48057,
		"state": "TX",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 48059,
		"state": "TX",
		"area_name": "Callahan County",
		"bachelorsOrHigher": 13.4
	},
	{
		"fips": 48061,
		"state": "TX",
		"area_name": "Cameron County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 48063,
		"state": "TX",
		"area_name": "Camp County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48065,
		"state": "TX",
		"area_name": "Carson County",
		"bachelorsOrHigher": 22.6
	},
	{
		"fips": 48067,
		"state": "TX",
		"area_name": "Cass County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 48069,
		"state": "TX",
		"area_name": "Castro County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 48071,
		"state": "TX",
		"area_name": "Chambers County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 48073,
		"state": "TX",
		"area_name": "Cherokee County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 48075,
		"state": "TX",
		"area_name": "Childress County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 48077,
		"state": "TX",
		"area_name": "Clay County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 48079,
		"state": "TX",
		"area_name": "Cochran County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 48081,
		"state": "TX",
		"area_name": "Coke County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 48083,
		"state": "TX",
		"area_name": "Coleman County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 48085,
		"state": "TX",
		"area_name": "Collin County",
		"bachelorsOrHigher": 49.4
	},
	{
		"fips": 48087,
		"state": "TX",
		"area_name": "Collingsworth County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 48089,
		"state": "TX",
		"area_name": "Colorado County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 48091,
		"state": "TX",
		"area_name": "Comal County",
		"bachelorsOrHigher": 33.2
	},
	{
		"fips": 48093,
		"state": "TX",
		"area_name": "Comanche County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 48095,
		"state": "TX",
		"area_name": "Concho County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 48097,
		"state": "TX",
		"area_name": "Cooke County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 48099,
		"state": "TX",
		"area_name": "Coryell County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 48101,
		"state": "TX",
		"area_name": "Cottle County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 48103,
		"state": "TX",
		"area_name": "Crane County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 48105,
		"state": "TX",
		"area_name": "Crockett County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 48107,
		"state": "TX",
		"area_name": "Crosby County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 48109,
		"state": "TX",
		"area_name": "Culberson County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 48111,
		"state": "TX",
		"area_name": "Dallam County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 48113,
		"state": "TX",
		"area_name": "Dallas County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 48115,
		"state": "TX",
		"area_name": "Dawson County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 48117,
		"state": "TX",
		"area_name": "Deaf Smith County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 48119,
		"state": "TX",
		"area_name": "Delta County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48121,
		"state": "TX",
		"area_name": "Denton County",
		"bachelorsOrHigher": 41
	},
	{
		"fips": 48123,
		"state": "TX",
		"area_name": "DeWitt County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 48125,
		"state": "TX",
		"area_name": "Dickens County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 48127,
		"state": "TX",
		"area_name": "Dimmit County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 48129,
		"state": "TX",
		"area_name": "Donley County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 48131,
		"state": "TX",
		"area_name": "Duval County",
		"bachelorsOrHigher": 7
	},
	{
		"fips": 48133,
		"state": "TX",
		"area_name": "Eastland County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 48135,
		"state": "TX",
		"area_name": "Ector County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48137,
		"state": "TX",
		"area_name": "Edwards County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 48139,
		"state": "TX",
		"area_name": "Ellis County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 48141,
		"state": "TX",
		"area_name": "El Paso County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 48143,
		"state": "TX",
		"area_name": "Erath County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 48145,
		"state": "TX",
		"area_name": "Falls County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 48147,
		"state": "TX",
		"area_name": "Fannin County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 48149,
		"state": "TX",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 48151,
		"state": "TX",
		"area_name": "Fisher County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 48153,
		"state": "TX",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 48155,
		"state": "TX",
		"area_name": "Foard County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 48157,
		"state": "TX",
		"area_name": "Fort Bend County",
		"bachelorsOrHigher": 42.3
	},
	{
		"fips": 48159,
		"state": "TX",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 48161,
		"state": "TX",
		"area_name": "Freestone County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 48163,
		"state": "TX",
		"area_name": "Frio County",
		"bachelorsOrHigher": 7.9
	},
	{
		"fips": 48165,
		"state": "TX",
		"area_name": "Gaines County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 48167,
		"state": "TX",
		"area_name": "Galveston County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 48169,
		"state": "TX",
		"area_name": "Garza County",
		"bachelorsOrHigher": 8.9
	},
	{
		"fips": 48171,
		"state": "TX",
		"area_name": "Gillespie County",
		"bachelorsOrHigher": 33.3
	},
	{
		"fips": 48173,
		"state": "TX",
		"area_name": "Glasscock County",
		"bachelorsOrHigher": 24.8
	},
	{
		"fips": 48175,
		"state": "TX",
		"area_name": "Goliad County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 48177,
		"state": "TX",
		"area_name": "Gonzales County",
		"bachelorsOrHigher": 14.7
	},
	{
		"fips": 48179,
		"state": "TX",
		"area_name": "Gray County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 48181,
		"state": "TX",
		"area_name": "Grayson County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 48183,
		"state": "TX",
		"area_name": "Gregg County",
		"bachelorsOrHigher": 19.9
	},
	{
		"fips": 48185,
		"state": "TX",
		"area_name": "Grimes County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 48187,
		"state": "TX",
		"area_name": "Guadalupe County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 48189,
		"state": "TX",
		"area_name": "Hale County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48191,
		"state": "TX",
		"area_name": "Hall County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 48193,
		"state": "TX",
		"area_name": "Hamilton County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 48195,
		"state": "TX",
		"area_name": "Hansford County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 48197,
		"state": "TX",
		"area_name": "Hardeman County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 48199,
		"state": "TX",
		"area_name": "Hardin County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 48201,
		"state": "TX",
		"area_name": "Harris County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 48203,
		"state": "TX",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 18.6
	},
	{
		"fips": 48205,
		"state": "TX",
		"area_name": "Hartley County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 48207,
		"state": "TX",
		"area_name": "Haskell County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 48209,
		"state": "TX",
		"area_name": "Hays County",
		"bachelorsOrHigher": 36.8
	},
	{
		"fips": 48211,
		"state": "TX",
		"area_name": "Hemphill County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 48213,
		"state": "TX",
		"area_name": "Henderson County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 48215,
		"state": "TX",
		"area_name": "Hidalgo County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 48217,
		"state": "TX",
		"area_name": "Hill County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 48219,
		"state": "TX",
		"area_name": "Hockley County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 48221,
		"state": "TX",
		"area_name": "Hood County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 48223,
		"state": "TX",
		"area_name": "Hopkins County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 48225,
		"state": "TX",
		"area_name": "Houston County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 48227,
		"state": "TX",
		"area_name": "Howard County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 48229,
		"state": "TX",
		"area_name": "Hudspeth County",
		"bachelorsOrHigher": 8.4
	},
	{
		"fips": 48231,
		"state": "TX",
		"area_name": "Hunt County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 48233,
		"state": "TX",
		"area_name": "Hutchinson County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 48235,
		"state": "TX",
		"area_name": "Irion County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 48237,
		"state": "TX",
		"area_name": "Jack County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 48239,
		"state": "TX",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 48241,
		"state": "TX",
		"area_name": "Jasper County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 48243,
		"state": "TX",
		"area_name": "Jeff Davis County",
		"bachelorsOrHigher": 38.4
	},
	{
		"fips": 48245,
		"state": "TX",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 18
	},
	{
		"fips": 48247,
		"state": "TX",
		"area_name": "Jim Hogg County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 48249,
		"state": "TX",
		"area_name": "Jim Wells County",
		"bachelorsOrHigher": 10.7
	},
	{
		"fips": 48251,
		"state": "TX",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 48253,
		"state": "TX",
		"area_name": "Jones County",
		"bachelorsOrHigher": 9.3
	},
	{
		"fips": 48255,
		"state": "TX",
		"area_name": "Karnes County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 48257,
		"state": "TX",
		"area_name": "Kaufman County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 48259,
		"state": "TX",
		"area_name": "Kendall County",
		"bachelorsOrHigher": 40.7
	},
	{
		"fips": 48261,
		"state": "TX",
		"area_name": "Kenedy County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48263,
		"state": "TX",
		"area_name": "Kent County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 48265,
		"state": "TX",
		"area_name": "Kerr County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 48267,
		"state": "TX",
		"area_name": "Kimble County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 48269,
		"state": "TX",
		"area_name": "King County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 48271,
		"state": "TX",
		"area_name": "Kinney County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 48273,
		"state": "TX",
		"area_name": "Kleberg County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 48275,
		"state": "TX",
		"area_name": "Knox County",
		"bachelorsOrHigher": 13.2
	},
	{
		"fips": 48277,
		"state": "TX",
		"area_name": "Lamar County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 48279,
		"state": "TX",
		"area_name": "Lamb County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 48281,
		"state": "TX",
		"area_name": "Lampasas County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 48283,
		"state": "TX",
		"area_name": "La Salle County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 48285,
		"state": "TX",
		"area_name": "Lavaca County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 48287,
		"state": "TX",
		"area_name": "Lee County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48289,
		"state": "TX",
		"area_name": "Leon County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48291,
		"state": "TX",
		"area_name": "Liberty County",
		"bachelorsOrHigher": 8.8
	},
	{
		"fips": 48293,
		"state": "TX",
		"area_name": "Limestone County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 48295,
		"state": "TX",
		"area_name": "Lipscomb County",
		"bachelorsOrHigher": 21.1
	},
	{
		"fips": 48297,
		"state": "TX",
		"area_name": "Live Oak County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 48299,
		"state": "TX",
		"area_name": "Llano County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 48301,
		"state": "TX",
		"area_name": "Loving County",
		"bachelorsOrHigher": 2.6
	},
	{
		"fips": 48303,
		"state": "TX",
		"area_name": "Lubbock County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 48305,
		"state": "TX",
		"area_name": "Lynn County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 48307,
		"state": "TX",
		"area_name": "McCulloch County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 48309,
		"state": "TX",
		"area_name": "McLennan County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 48311,
		"state": "TX",
		"area_name": "McMullen County",
		"bachelorsOrHigher": 4.4
	},
	{
		"fips": 48313,
		"state": "TX",
		"area_name": "Madison County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 48315,
		"state": "TX",
		"area_name": "Marion County",
		"bachelorsOrHigher": 14.5
	},
	{
		"fips": 48317,
		"state": "TX",
		"area_name": "Martin County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 48319,
		"state": "TX",
		"area_name": "Mason County",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 48321,
		"state": "TX",
		"area_name": "Matagorda County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 48323,
		"state": "TX",
		"area_name": "Maverick County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 48325,
		"state": "TX",
		"area_name": "Medina County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 48327,
		"state": "TX",
		"area_name": "Menard County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 48329,
		"state": "TX",
		"area_name": "Midland County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 48331,
		"state": "TX",
		"area_name": "Milam County",
		"bachelorsOrHigher": 16
	},
	{
		"fips": 48333,
		"state": "TX",
		"area_name": "Mills County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 48335,
		"state": "TX",
		"area_name": "Mitchell County",
		"bachelorsOrHigher": 9.9
	},
	{
		"fips": 48337,
		"state": "TX",
		"area_name": "Montague County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 48339,
		"state": "TX",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 31.7
	},
	{
		"fips": 48341,
		"state": "TX",
		"area_name": "Moore County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 48343,
		"state": "TX",
		"area_name": "Morris County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 48345,
		"state": "TX",
		"area_name": "Motley County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 48347,
		"state": "TX",
		"area_name": "Nacogdoches County",
		"bachelorsOrHigher": 25
	},
	{
		"fips": 48349,
		"state": "TX",
		"area_name": "Navarro County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 48351,
		"state": "TX",
		"area_name": "Newton County",
		"bachelorsOrHigher": 6.9
	},
	{
		"fips": 48353,
		"state": "TX",
		"area_name": "Nolan County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 48355,
		"state": "TX",
		"area_name": "Nueces County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 48357,
		"state": "TX",
		"area_name": "Ochiltree County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 48359,
		"state": "TX",
		"area_name": "Oldham County",
		"bachelorsOrHigher": 30.3
	},
	{
		"fips": 48361,
		"state": "TX",
		"area_name": "Orange County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 48363,
		"state": "TX",
		"area_name": "Palo Pinto County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 48365,
		"state": "TX",
		"area_name": "Panola County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 48367,
		"state": "TX",
		"area_name": "Parker County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 48369,
		"state": "TX",
		"area_name": "Parmer County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 48371,
		"state": "TX",
		"area_name": "Pecos County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 48373,
		"state": "TX",
		"area_name": "Polk County",
		"bachelorsOrHigher": 12.1
	},
	{
		"fips": 48375,
		"state": "TX",
		"area_name": "Potter County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 48377,
		"state": "TX",
		"area_name": "Presidio County",
		"bachelorsOrHigher": 22
	},
	{
		"fips": 48379,
		"state": "TX",
		"area_name": "Rains County",
		"bachelorsOrHigher": 11.4
	},
	{
		"fips": 48381,
		"state": "TX",
		"area_name": "Randall County",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 48383,
		"state": "TX",
		"area_name": "Reagan County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 48385,
		"state": "TX",
		"area_name": "Real County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 48387,
		"state": "TX",
		"area_name": "Red River County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 48389,
		"state": "TX",
		"area_name": "Reeves County",
		"bachelorsOrHigher": 10.6
	},
	{
		"fips": 48391,
		"state": "TX",
		"area_name": "Refugio County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 48393,
		"state": "TX",
		"area_name": "Roberts County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 48395,
		"state": "TX",
		"area_name": "Robertson County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48397,
		"state": "TX",
		"area_name": "Rockwall County",
		"bachelorsOrHigher": 36.7
	},
	{
		"fips": 48399,
		"state": "TX",
		"area_name": "Runnels County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 48401,
		"state": "TX",
		"area_name": "Rusk County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 48403,
		"state": "TX",
		"area_name": "Sabine County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 48405,
		"state": "TX",
		"area_name": "San Augustine County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 48407,
		"state": "TX",
		"area_name": "San Jacinto County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 48409,
		"state": "TX",
		"area_name": "San Patricio County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 48411,
		"state": "TX",
		"area_name": "San Saba County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 48413,
		"state": "TX",
		"area_name": "Schleicher County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 48415,
		"state": "TX",
		"area_name": "Scurry County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 48417,
		"state": "TX",
		"area_name": "Shackelford County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 48419,
		"state": "TX",
		"area_name": "Shelby County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 48421,
		"state": "TX",
		"area_name": "Sherman County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 48423,
		"state": "TX",
		"area_name": "Smith County",
		"bachelorsOrHigher": 25.2
	},
	{
		"fips": 48425,
		"state": "TX",
		"area_name": "Somervell County",
		"bachelorsOrHigher": 27
	},
	{
		"fips": 48427,
		"state": "TX",
		"area_name": "Starr County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 48429,
		"state": "TX",
		"area_name": "Stephens County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 48431,
		"state": "TX",
		"area_name": "Sterling County",
		"bachelorsOrHigher": 26.6
	},
	{
		"fips": 48433,
		"state": "TX",
		"area_name": "Stonewall County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 48435,
		"state": "TX",
		"area_name": "Sutton County",
		"bachelorsOrHigher": 17.8
	},
	{
		"fips": 48437,
		"state": "TX",
		"area_name": "Swisher County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 48439,
		"state": "TX",
		"area_name": "Tarrant County",
		"bachelorsOrHigher": 29.7
	},
	{
		"fips": 48441,
		"state": "TX",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 48443,
		"state": "TX",
		"area_name": "Terrell County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 48445,
		"state": "TX",
		"area_name": "Terry County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 48447,
		"state": "TX",
		"area_name": "Throckmorton County",
		"bachelorsOrHigher": 20.7
	},
	{
		"fips": 48449,
		"state": "TX",
		"area_name": "Titus County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 48451,
		"state": "TX",
		"area_name": "Tom Green County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 48453,
		"state": "TX",
		"area_name": "Travis County",
		"bachelorsOrHigher": 45.2
	},
	{
		"fips": 48455,
		"state": "TX",
		"area_name": "Trinity County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 48457,
		"state": "TX",
		"area_name": "Tyler County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 48459,
		"state": "TX",
		"area_name": "Upshur County",
		"bachelorsOrHigher": 14.3
	},
	{
		"fips": 48461,
		"state": "TX",
		"area_name": "Upton County",
		"bachelorsOrHigher": 11
	},
	{
		"fips": 48463,
		"state": "TX",
		"area_name": "Uvalde County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 48465,
		"state": "TX",
		"area_name": "Val Verde County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 48467,
		"state": "TX",
		"area_name": "Van Zandt County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 48469,
		"state": "TX",
		"area_name": "Victoria County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 48471,
		"state": "TX",
		"area_name": "Walker County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 48473,
		"state": "TX",
		"area_name": "Waller County",
		"bachelorsOrHigher": 18.4
	},
	{
		"fips": 48475,
		"state": "TX",
		"area_name": "Ward County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 48477,
		"state": "TX",
		"area_name": "Washington County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 48479,
		"state": "TX",
		"area_name": "Webb County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 48481,
		"state": "TX",
		"area_name": "Wharton County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 48483,
		"state": "TX",
		"area_name": "Wheeler County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 48485,
		"state": "TX",
		"area_name": "Wichita County",
		"bachelorsOrHigher": 20.8
	},
	{
		"fips": 48487,
		"state": "TX",
		"area_name": "Wilbarger County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 48489,
		"state": "TX",
		"area_name": "Willacy County",
		"bachelorsOrHigher": 9.2
	},
	{
		"fips": 48491,
		"state": "TX",
		"area_name": "Williamson County",
		"bachelorsOrHigher": 38.6
	},
	{
		"fips": 48493,
		"state": "TX",
		"area_name": "Wilson County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 48495,
		"state": "TX",
		"area_name": "Winkler County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 48497,
		"state": "TX",
		"area_name": "Wise County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 48499,
		"state": "TX",
		"area_name": "Wood County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 48501,
		"state": "TX",
		"area_name": "Yoakum County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 48503,
		"state": "TX",
		"area_name": "Young County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 48505,
		"state": "TX",
		"area_name": "Zapata County",
		"bachelorsOrHigher": 9.6
	},
	{
		"fips": 48507,
		"state": "TX",
		"area_name": "Zavala County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 49001,
		"state": "UT",
		"area_name": "Beaver County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 49003,
		"state": "UT",
		"area_name": "Box Elder County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 49005,
		"state": "UT",
		"area_name": "Cache County",
		"bachelorsOrHigher": 35.9
	},
	{
		"fips": 49007,
		"state": "UT",
		"area_name": "Carbon County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 49009,
		"state": "UT",
		"area_name": "Daggett County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 49011,
		"state": "UT",
		"area_name": "Davis County",
		"bachelorsOrHigher": 34.6
	},
	{
		"fips": 49013,
		"state": "UT",
		"area_name": "Duchesne County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 49015,
		"state": "UT",
		"area_name": "Emery County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 49017,
		"state": "UT",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 49019,
		"state": "UT",
		"area_name": "Grand County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 49021,
		"state": "UT",
		"area_name": "Iron County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 49023,
		"state": "UT",
		"area_name": "Juab County",
		"bachelorsOrHigher": 16.3
	},
	{
		"fips": 49025,
		"state": "UT",
		"area_name": "Kane County",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 49027,
		"state": "UT",
		"area_name": "Millard County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 49029,
		"state": "UT",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 34.5
	},
	{
		"fips": 49031,
		"state": "UT",
		"area_name": "Piute County",
		"bachelorsOrHigher": 17.4
	},
	{
		"fips": 49033,
		"state": "UT",
		"area_name": "Rich County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 49035,
		"state": "UT",
		"area_name": "Salt Lake County",
		"bachelorsOrHigher": 31.3
	},
	{
		"fips": 49037,
		"state": "UT",
		"area_name": "San Juan County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 49039,
		"state": "UT",
		"area_name": "Sanpete County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 49041,
		"state": "UT",
		"area_name": "Sevier County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 49043,
		"state": "UT",
		"area_name": "Summit County",
		"bachelorsOrHigher": 50.1
	},
	{
		"fips": 49045,
		"state": "UT",
		"area_name": "Tooele County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 49047,
		"state": "UT",
		"area_name": "Uintah County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 49049,
		"state": "UT",
		"area_name": "Utah County",
		"bachelorsOrHigher": 36.9
	},
	{
		"fips": 49051,
		"state": "UT",
		"area_name": "Wasatch County",
		"bachelorsOrHigher": 34.4
	},
	{
		"fips": 49053,
		"state": "UT",
		"area_name": "Washington County",
		"bachelorsOrHigher": 27.1
	},
	{
		"fips": 49055,
		"state": "UT",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 49057,
		"state": "UT",
		"area_name": "Weber County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 50001,
		"state": "VT",
		"area_name": "Addison County",
		"bachelorsOrHigher": 35.4
	},
	{
		"fips": 50003,
		"state": "VT",
		"area_name": "Bennington County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 50005,
		"state": "VT",
		"area_name": "Caledonia County",
		"bachelorsOrHigher": 25.8
	},
	{
		"fips": 50007,
		"state": "VT",
		"area_name": "Chittenden County",
		"bachelorsOrHigher": 48
	},
	{
		"fips": 50009,
		"state": "VT",
		"area_name": "Essex County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 50011,
		"state": "VT",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 50013,
		"state": "VT",
		"area_name": "Grand Isle County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 50015,
		"state": "VT",
		"area_name": "Lamoille County",
		"bachelorsOrHigher": 35.3
	},
	{
		"fips": 50017,
		"state": "VT",
		"area_name": "Orange County",
		"bachelorsOrHigher": 31.6
	},
	{
		"fips": 50019,
		"state": "VT",
		"area_name": "Orleans County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 50021,
		"state": "VT",
		"area_name": "Rutland County",
		"bachelorsOrHigher": 28.8
	},
	{
		"fips": 50023,
		"state": "VT",
		"area_name": "Washington County",
		"bachelorsOrHigher": 39
	},
	{
		"fips": 50025,
		"state": "VT",
		"area_name": "Windham County",
		"bachelorsOrHigher": 34.5
	},
	{
		"fips": 50027,
		"state": "VT",
		"area_name": "Windsor County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 51001,
		"state": "VA",
		"area_name": "Accomack County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 51003,
		"state": "VA",
		"area_name": "Albemarle County",
		"bachelorsOrHigher": 52.1
	},
	{
		"fips": 51005,
		"state": "VA",
		"area_name": "Alleghany County",
		"bachelorsOrHigher": 16.9
	},
	{
		"fips": 51007,
		"state": "VA",
		"area_name": "Amelia County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 51009,
		"state": "VA",
		"area_name": "Amherst County",
		"bachelorsOrHigher": 18.3
	},
	{
		"fips": 51011,
		"state": "VA",
		"area_name": "Appomattox County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 51013,
		"state": "VA",
		"area_name": "Arlington County",
		"bachelorsOrHigher": 72
	},
	{
		"fips": 51015,
		"state": "VA",
		"area_name": "Augusta County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 51017,
		"state": "VA",
		"area_name": "Bath County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 51019,
		"state": "VA",
		"area_name": "Bedford County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 51021,
		"state": "VA",
		"area_name": "Bland County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 51023,
		"state": "VA",
		"area_name": "Botetourt County",
		"bachelorsOrHigher": 25.4
	},
	{
		"fips": 51025,
		"state": "VA",
		"area_name": "Brunswick County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 51027,
		"state": "VA",
		"area_name": "Buchanan County",
		"bachelorsOrHigher": 8.6
	},
	{
		"fips": 51029,
		"state": "VA",
		"area_name": "Buckingham County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 51031,
		"state": "VA",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 51033,
		"state": "VA",
		"area_name": "Caroline County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 51035,
		"state": "VA",
		"area_name": "Carroll County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 51036,
		"state": "VA",
		"area_name": "Charles City County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 51037,
		"state": "VA",
		"area_name": "Charlotte County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 51041,
		"state": "VA",
		"area_name": "Chesterfield County",
		"bachelorsOrHigher": 36.6
	},
	{
		"fips": 51043,
		"state": "VA",
		"area_name": "Clarke County",
		"bachelorsOrHigher": 32.2
	},
	{
		"fips": 51045,
		"state": "VA",
		"area_name": "Craig County",
		"bachelorsOrHigher": 13.1
	},
	{
		"fips": 51047,
		"state": "VA",
		"area_name": "Culpeper County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 51049,
		"state": "VA",
		"area_name": "Cumberland County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 51051,
		"state": "VA",
		"area_name": "Dickenson County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 51053,
		"state": "VA",
		"area_name": "Dinwiddie County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 51057,
		"state": "VA",
		"area_name": "Essex County",
		"bachelorsOrHigher": 13.7
	},
	{
		"fips": 51059,
		"state": "VA",
		"area_name": "Fairfax County",
		"bachelorsOrHigher": 59.2
	},
	{
		"fips": 51061,
		"state": "VA",
		"area_name": "Fauquier County",
		"bachelorsOrHigher": 34.3
	},
	{
		"fips": 51063,
		"state": "VA",
		"area_name": "Floyd County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 51065,
		"state": "VA",
		"area_name": "Fluvanna County",
		"bachelorsOrHigher": 29.6
	},
	{
		"fips": 51067,
		"state": "VA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 51069,
		"state": "VA",
		"area_name": "Frederick County",
		"bachelorsOrHigher": 28.2
	},
	{
		"fips": 51071,
		"state": "VA",
		"area_name": "Giles County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 51073,
		"state": "VA",
		"area_name": "Gloucester County",
		"bachelorsOrHigher": 22.9
	},
	{
		"fips": 51075,
		"state": "VA",
		"area_name": "Goochland County",
		"bachelorsOrHigher": 38.3
	},
	{
		"fips": 51077,
		"state": "VA",
		"area_name": "Grayson County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 51079,
		"state": "VA",
		"area_name": "Greene County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 51081,
		"state": "VA",
		"area_name": "Greensville County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 51083,
		"state": "VA",
		"area_name": "Halifax County",
		"bachelorsOrHigher": 14.6
	},
	{
		"fips": 51085,
		"state": "VA",
		"area_name": "Hanover County",
		"bachelorsOrHigher": 36.3
	},
	{
		"fips": 51087,
		"state": "VA",
		"area_name": "Henrico County",
		"bachelorsOrHigher": 39.7
	},
	{
		"fips": 51089,
		"state": "VA",
		"area_name": "Henry County",
		"bachelorsOrHigher": 11.5
	},
	{
		"fips": 51091,
		"state": "VA",
		"area_name": "Highland County",
		"bachelorsOrHigher": 19.4
	},
	{
		"fips": 51093,
		"state": "VA",
		"area_name": "Isle of Wight County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 51095,
		"state": "VA",
		"area_name": "James City County",
		"bachelorsOrHigher": 46.1
	},
	{
		"fips": 51097,
		"state": "VA",
		"area_name": "King and Queen County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 51099,
		"state": "VA",
		"area_name": "King George County",
		"bachelorsOrHigher": 31.8
	},
	{
		"fips": 51101,
		"state": "VA",
		"area_name": "King William County",
		"bachelorsOrHigher": 19.1
	},
	{
		"fips": 51103,
		"state": "VA",
		"area_name": "Lancaster County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 51105,
		"state": "VA",
		"area_name": "Lee County",
		"bachelorsOrHigher": 11.1
	},
	{
		"fips": 51107,
		"state": "VA",
		"area_name": "Loudoun County",
		"bachelorsOrHigher": 58
	},
	{
		"fips": 51109,
		"state": "VA",
		"area_name": "Louisa County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 51111,
		"state": "VA",
		"area_name": "Lunenburg County",
		"bachelorsOrHigher": 12.5
	},
	{
		"fips": 51113,
		"state": "VA",
		"area_name": "Madison County",
		"bachelorsOrHigher": 23.1
	},
	{
		"fips": 51115,
		"state": "VA",
		"area_name": "Mathews County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 51117,
		"state": "VA",
		"area_name": "Mecklenburg County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 51119,
		"state": "VA",
		"area_name": "Middlesex County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 51121,
		"state": "VA",
		"area_name": "Montgomery County",
		"bachelorsOrHigher": 44.3
	},
	{
		"fips": 51125,
		"state": "VA",
		"area_name": "Nelson County",
		"bachelorsOrHigher": 29
	},
	{
		"fips": 51127,
		"state": "VA",
		"area_name": "New Kent County",
		"bachelorsOrHigher": 24.6
	},
	{
		"fips": 51131,
		"state": "VA",
		"area_name": "Northampton County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 51133,
		"state": "VA",
		"area_name": "Northumberland County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 51135,
		"state": "VA",
		"area_name": "Nottoway County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 51137,
		"state": "VA",
		"area_name": "Orange County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 51139,
		"state": "VA",
		"area_name": "Page County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 51141,
		"state": "VA",
		"area_name": "Patrick County",
		"bachelorsOrHigher": 11.2
	},
	{
		"fips": 51143,
		"state": "VA",
		"area_name": "Pittsylvania County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 51145,
		"state": "VA",
		"area_name": "Powhatan County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 51147,
		"state": "VA",
		"area_name": "Prince Edward County",
		"bachelorsOrHigher": 22.4
	},
	{
		"fips": 51149,
		"state": "VA",
		"area_name": "Prince George County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 51153,
		"state": "VA",
		"area_name": "Prince William County",
		"bachelorsOrHigher": 38.1
	},
	{
		"fips": 51155,
		"state": "VA",
		"area_name": "Pulaski County",
		"bachelorsOrHigher": 16.4
	},
	{
		"fips": 51157,
		"state": "VA",
		"area_name": "Rappahannock County",
		"bachelorsOrHigher": 32
	},
	{
		"fips": 51159,
		"state": "VA",
		"area_name": "Richmond County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 51161,
		"state": "VA",
		"area_name": "Roanoke County",
		"bachelorsOrHigher": 34
	},
	{
		"fips": 51163,
		"state": "VA",
		"area_name": "Rockbridge County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 51165,
		"state": "VA",
		"area_name": "Rockingham County",
		"bachelorsOrHigher": 23.7
	},
	{
		"fips": 51167,
		"state": "VA",
		"area_name": "Russell County",
		"bachelorsOrHigher": 11.9
	},
	{
		"fips": 51169,
		"state": "VA",
		"area_name": "Scott County",
		"bachelorsOrHigher": 11.6
	},
	{
		"fips": 51171,
		"state": "VA",
		"area_name": "Shenandoah County",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 51173,
		"state": "VA",
		"area_name": "Smyth County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 51175,
		"state": "VA",
		"area_name": "Southampton County",
		"bachelorsOrHigher": 14.8
	},
	{
		"fips": 51177,
		"state": "VA",
		"area_name": "Spotsylvania County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 51179,
		"state": "VA",
		"area_name": "Stafford County",
		"bachelorsOrHigher": 37.1
	},
	{
		"fips": 51181,
		"state": "VA",
		"area_name": "Surry County",
		"bachelorsOrHigher": 18.8
	},
	{
		"fips": 51183,
		"state": "VA",
		"area_name": "Sussex County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 51185,
		"state": "VA",
		"area_name": "Tazewell County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 51187,
		"state": "VA",
		"area_name": "Warren County",
		"bachelorsOrHigher": 19.7
	},
	{
		"fips": 51191,
		"state": "VA",
		"area_name": "Washington County",
		"bachelorsOrHigher": 23.5
	},
	{
		"fips": 51193,
		"state": "VA",
		"area_name": "Westmoreland County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 51195,
		"state": "VA",
		"area_name": "Wise County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 51197,
		"state": "VA",
		"area_name": "Wythe County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 51199,
		"state": "VA",
		"area_name": "York County",
		"bachelorsOrHigher": 42
	},
	{
		"fips": 51510,
		"state": "VA",
		"area_name": "Alexandria city",
		"bachelorsOrHigher": 61.5
	},
	{
		"fips": 51520,
		"state": "VA",
		"area_name": "Bristol city",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 51530,
		"state": "VA",
		"area_name": "Buena Vista city",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 51540,
		"state": "VA",
		"area_name": "Charlottesville city",
		"bachelorsOrHigher": 49.3
	},
	{
		"fips": 51550,
		"state": "VA",
		"area_name": "Chesapeake city",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 51570,
		"state": "VA",
		"area_name": "Colonial Heights city",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 51580,
		"state": "VA",
		"area_name": "Covington city",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 51590,
		"state": "VA",
		"area_name": "Danville city",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 51595,
		"state": "VA",
		"area_name": "Emporia city",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 51600,
		"state": "VA",
		"area_name": "Fairfax city",
		"bachelorsOrHigher": 53.5
	},
	{
		"fips": 51610,
		"state": "VA",
		"area_name": "Falls Church city",
		"bachelorsOrHigher": 75.1
	},
	{
		"fips": 51620,
		"state": "VA",
		"area_name": "Franklin city",
		"bachelorsOrHigher": 19.8
	},
	{
		"fips": 51630,
		"state": "VA",
		"area_name": "Fredericksburg city",
		"bachelorsOrHigher": 37.7
	},
	{
		"fips": 51640,
		"state": "VA",
		"area_name": "Galax city",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 51650,
		"state": "VA",
		"area_name": "Hampton city",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 51660,
		"state": "VA",
		"area_name": "Harrisonburg city",
		"bachelorsOrHigher": 35.6
	},
	{
		"fips": 51670,
		"state": "VA",
		"area_name": "Hopewell city",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 51678,
		"state": "VA",
		"area_name": "Lexington city",
		"bachelorsOrHigher": 44.8
	},
	{
		"fips": 51680,
		"state": "VA",
		"area_name": "Lynchburg city",
		"bachelorsOrHigher": 32.3
	},
	{
		"fips": 51683,
		"state": "VA",
		"area_name": "Manassas city",
		"bachelorsOrHigher": 29.1
	},
	{
		"fips": 51685,
		"state": "VA",
		"area_name": "Manassas Park city",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 51690,
		"state": "VA",
		"area_name": "Martinsville city",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 51700,
		"state": "VA",
		"area_name": "Newport News city",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 51710,
		"state": "VA",
		"area_name": "Norfolk city",
		"bachelorsOrHigher": 25.6
	},
	{
		"fips": 51720,
		"state": "VA",
		"area_name": "Norton city",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 51730,
		"state": "VA",
		"area_name": "Petersburg city",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 51735,
		"state": "VA",
		"area_name": "Poquoson city",
		"bachelorsOrHigher": 35.8
	},
	{
		"fips": 51740,
		"state": "VA",
		"area_name": "Portsmouth city",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 51750,
		"state": "VA",
		"area_name": "Radford city",
		"bachelorsOrHigher": 34.9
	},
	{
		"fips": 51760,
		"state": "VA",
		"area_name": "Richmond city",
		"bachelorsOrHigher": 35.4
	},
	{
		"fips": 51770,
		"state": "VA",
		"area_name": "Roanoke city",
		"bachelorsOrHigher": 24.1
	},
	{
		"fips": 51775,
		"state": "VA",
		"area_name": "Salem city",
		"bachelorsOrHigher": 30.7
	},
	{
		"fips": 51790,
		"state": "VA",
		"area_name": "Staunton city",
		"bachelorsOrHigher": 31.5
	},
	{
		"fips": 51800,
		"state": "VA",
		"area_name": "Suffolk city",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 51810,
		"state": "VA",
		"area_name": "Virginia Beach city",
		"bachelorsOrHigher": 33.5
	},
	{
		"fips": 51820,
		"state": "VA",
		"area_name": "Waynesboro city",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 51830,
		"state": "VA",
		"area_name": "Williamsburg city",
		"bachelorsOrHigher": 48.6
	},
	{
		"fips": 51840,
		"state": "VA",
		"area_name": "Winchester city",
		"bachelorsOrHigher": 28.1
	},
	{
		"fips": 53001,
		"state": "WA",
		"area_name": "Adams County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 53003,
		"state": "WA",
		"area_name": "Asotin County",
		"bachelorsOrHigher": 18.5
	},
	{
		"fips": 53005,
		"state": "WA",
		"area_name": "Benton County",
		"bachelorsOrHigher": 29.2
	},
	{
		"fips": 53007,
		"state": "WA",
		"area_name": "Chelan County",
		"bachelorsOrHigher": 24
	},
	{
		"fips": 53009,
		"state": "WA",
		"area_name": "Clallam County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 53011,
		"state": "WA",
		"area_name": "Clark County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 53013,
		"state": "WA",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 20.4
	},
	{
		"fips": 53015,
		"state": "WA",
		"area_name": "Cowlitz County",
		"bachelorsOrHigher": 15.6
	},
	{
		"fips": 53017,
		"state": "WA",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 53019,
		"state": "WA",
		"area_name": "Ferry County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 53021,
		"state": "WA",
		"area_name": "Franklin County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 53023,
		"state": "WA",
		"area_name": "Garfield County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 53025,
		"state": "WA",
		"area_name": "Grant County",
		"bachelorsOrHigher": 15.5
	},
	{
		"fips": 53027,
		"state": "WA",
		"area_name": "Grays Harbor County",
		"bachelorsOrHigher": 15
	},
	{
		"fips": 53029,
		"state": "WA",
		"area_name": "Island County",
		"bachelorsOrHigher": 31.7
	},
	{
		"fips": 53031,
		"state": "WA",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 37.3
	},
	{
		"fips": 53033,
		"state": "WA",
		"area_name": "King County",
		"bachelorsOrHigher": 47.1
	},
	{
		"fips": 53035,
		"state": "WA",
		"area_name": "Kitsap County",
		"bachelorsOrHigher": 30
	},
	{
		"fips": 53037,
		"state": "WA",
		"area_name": "Kittitas County",
		"bachelorsOrHigher": 34
	},
	{
		"fips": 53039,
		"state": "WA",
		"area_name": "Klickitat County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 53041,
		"state": "WA",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 14.1
	},
	{
		"fips": 53043,
		"state": "WA",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 19.3
	},
	{
		"fips": 53045,
		"state": "WA",
		"area_name": "Mason County",
		"bachelorsOrHigher": 17.9
	},
	{
		"fips": 53047,
		"state": "WA",
		"area_name": "Okanogan County",
		"bachelorsOrHigher": 17
	},
	{
		"fips": 53049,
		"state": "WA",
		"area_name": "Pacific County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 53051,
		"state": "WA",
		"area_name": "Pend Oreille County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 53053,
		"state": "WA",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 24.2
	},
	{
		"fips": 53055,
		"state": "WA",
		"area_name": "San Juan County",
		"bachelorsOrHigher": 45.2
	},
	{
		"fips": 53057,
		"state": "WA",
		"area_name": "Skagit County",
		"bachelorsOrHigher": 24.5
	},
	{
		"fips": 53059,
		"state": "WA",
		"area_name": "Skamania County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 53061,
		"state": "WA",
		"area_name": "Snohomish County",
		"bachelorsOrHigher": 29.3
	},
	{
		"fips": 53063,
		"state": "WA",
		"area_name": "Spokane County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 53065,
		"state": "WA",
		"area_name": "Stevens County",
		"bachelorsOrHigher": 17.6
	},
	{
		"fips": 53067,
		"state": "WA",
		"area_name": "Thurston County",
		"bachelorsOrHigher": 32.9
	},
	{
		"fips": 53069,
		"state": "WA",
		"area_name": "Wahkiakum County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 53071,
		"state": "WA",
		"area_name": "Walla Walla County",
		"bachelorsOrHigher": 26.5
	},
	{
		"fips": 53073,
		"state": "WA",
		"area_name": "Whatcom County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 53075,
		"state": "WA",
		"area_name": "Whitman County",
		"bachelorsOrHigher": 47.8
	},
	{
		"fips": 53077,
		"state": "WA",
		"area_name": "Yakima County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 54001,
		"state": "WV",
		"area_name": "Barbour County",
		"bachelorsOrHigher": 12.3
	},
	{
		"fips": 54003,
		"state": "WV",
		"area_name": "Berkeley County",
		"bachelorsOrHigher": 20.3
	},
	{
		"fips": 54005,
		"state": "WV",
		"area_name": "Boone County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 54007,
		"state": "WV",
		"area_name": "Braxton County",
		"bachelorsOrHigher": 10.8
	},
	{
		"fips": 54009,
		"state": "WV",
		"area_name": "Brooke County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 54011,
		"state": "WV",
		"area_name": "Cabell County",
		"bachelorsOrHigher": 26.4
	},
	{
		"fips": 54013,
		"state": "WV",
		"area_name": "Calhoun County",
		"bachelorsOrHigher": 8.9
	},
	{
		"fips": 54015,
		"state": "WV",
		"area_name": "Clay County",
		"bachelorsOrHigher": 9.4
	},
	{
		"fips": 54017,
		"state": "WV",
		"area_name": "Doddridge County",
		"bachelorsOrHigher": 12.7
	},
	{
		"fips": 54019,
		"state": "WV",
		"area_name": "Fayette County",
		"bachelorsOrHigher": 11.8
	},
	{
		"fips": 54021,
		"state": "WV",
		"area_name": "Gilmer County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 54023,
		"state": "WV",
		"area_name": "Grant County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 54025,
		"state": "WV",
		"area_name": "Greenbrier County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 54027,
		"state": "WV",
		"area_name": "Hampshire County",
		"bachelorsOrHigher": 8.7
	},
	{
		"fips": 54029,
		"state": "WV",
		"area_name": "Hancock County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 54031,
		"state": "WV",
		"area_name": "Hardy County",
		"bachelorsOrHigher": 12.2
	},
	{
		"fips": 54033,
		"state": "WV",
		"area_name": "Harrison County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 54035,
		"state": "WV",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 16.2
	},
	{
		"fips": 54037,
		"state": "WV",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 54039,
		"state": "WV",
		"area_name": "Kanawha County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 54041,
		"state": "WV",
		"area_name": "Lewis County",
		"bachelorsOrHigher": 14.9
	},
	{
		"fips": 54043,
		"state": "WV",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 54045,
		"state": "WV",
		"area_name": "Logan County",
		"bachelorsOrHigher": 8.5
	},
	{
		"fips": 54047,
		"state": "WV",
		"area_name": "McDowell County",
		"bachelorsOrHigher": 5.8
	},
	{
		"fips": 54049,
		"state": "WV",
		"area_name": "Marion County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 54051,
		"state": "WV",
		"area_name": "Marshall County",
		"bachelorsOrHigher": 15.9
	},
	{
		"fips": 54053,
		"state": "WV",
		"area_name": "Mason County",
		"bachelorsOrHigher": 10.1
	},
	{
		"fips": 54055,
		"state": "WV",
		"area_name": "Mercer County",
		"bachelorsOrHigher": 19
	},
	{
		"fips": 54057,
		"state": "WV",
		"area_name": "Mineral County",
		"bachelorsOrHigher": 12.8
	},
	{
		"fips": 54059,
		"state": "WV",
		"area_name": "Mingo County",
		"bachelorsOrHigher": 10.5
	},
	{
		"fips": 54061,
		"state": "WV",
		"area_name": "Monongalia County",
		"bachelorsOrHigher": 38.8
	},
	{
		"fips": 54063,
		"state": "WV",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 54065,
		"state": "WV",
		"area_name": "Morgan County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 54067,
		"state": "WV",
		"area_name": "Nicholas County",
		"bachelorsOrHigher": 13.6
	},
	{
		"fips": 54069,
		"state": "WV",
		"area_name": "Ohio County",
		"bachelorsOrHigher": 28.6
	},
	{
		"fips": 54071,
		"state": "WV",
		"area_name": "Pendleton County",
		"bachelorsOrHigher": 14
	},
	{
		"fips": 54073,
		"state": "WV",
		"area_name": "Pleasants County",
		"bachelorsOrHigher": 13.3
	},
	{
		"fips": 54075,
		"state": "WV",
		"area_name": "Pocahontas County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 54077,
		"state": "WV",
		"area_name": "Preston County",
		"bachelorsOrHigher": 12.9
	},
	{
		"fips": 54079,
		"state": "WV",
		"area_name": "Putnam County",
		"bachelorsOrHigher": 23.9
	},
	{
		"fips": 54081,
		"state": "WV",
		"area_name": "Raleigh County",
		"bachelorsOrHigher": 18.2
	},
	{
		"fips": 54083,
		"state": "WV",
		"area_name": "Randolph County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 54085,
		"state": "WV",
		"area_name": "Ritchie County",
		"bachelorsOrHigher": 10.4
	},
	{
		"fips": 54087,
		"state": "WV",
		"area_name": "Roane County",
		"bachelorsOrHigher": 10.3
	},
	{
		"fips": 54089,
		"state": "WV",
		"area_name": "Summers County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 54091,
		"state": "WV",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 54093,
		"state": "WV",
		"area_name": "Tucker County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 54095,
		"state": "WV",
		"area_name": "Tyler County",
		"bachelorsOrHigher": 10
	},
	{
		"fips": 54097,
		"state": "WV",
		"area_name": "Upshur County",
		"bachelorsOrHigher": 15.8
	},
	{
		"fips": 54099,
		"state": "WV",
		"area_name": "Wayne County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 54101,
		"state": "WV",
		"area_name": "Webster County",
		"bachelorsOrHigher": 9.1
	},
	{
		"fips": 54103,
		"state": "WV",
		"area_name": "Wetzel County",
		"bachelorsOrHigher": 10.2
	},
	{
		"fips": 54105,
		"state": "WV",
		"area_name": "Wirt County",
		"bachelorsOrHigher": 10.9
	},
	{
		"fips": 54107,
		"state": "WV",
		"area_name": "Wood County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 54109,
		"state": "WV",
		"area_name": "Wyoming County",
		"bachelorsOrHigher": 9
	},
	{
		"fips": 55001,
		"state": "WI",
		"area_name": "Adams County",
		"bachelorsOrHigher": 12.6
	},
	{
		"fips": 55003,
		"state": "WI",
		"area_name": "Ashland County",
		"bachelorsOrHigher": 22.3
	},
	{
		"fips": 55005,
		"state": "WI",
		"area_name": "Barron County",
		"bachelorsOrHigher": 16.6
	},
	{
		"fips": 55007,
		"state": "WI",
		"area_name": "Bayfield County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 55009,
		"state": "WI",
		"area_name": "Brown County",
		"bachelorsOrHigher": 27.5
	},
	{
		"fips": 55011,
		"state": "WI",
		"area_name": "Buffalo County",
		"bachelorsOrHigher": 17.7
	},
	{
		"fips": 55013,
		"state": "WI",
		"area_name": "Burnett County",
		"bachelorsOrHigher": 16.8
	},
	{
		"fips": 55015,
		"state": "WI",
		"area_name": "Calumet County",
		"bachelorsOrHigher": 28
	},
	{
		"fips": 55017,
		"state": "WI",
		"area_name": "Chippewa County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 55019,
		"state": "WI",
		"area_name": "Clark County",
		"bachelorsOrHigher": 11.7
	},
	{
		"fips": 55021,
		"state": "WI",
		"area_name": "Columbia County",
		"bachelorsOrHigher": 22.2
	},
	{
		"fips": 55023,
		"state": "WI",
		"area_name": "Crawford County",
		"bachelorsOrHigher": 15.3
	},
	{
		"fips": 55025,
		"state": "WI",
		"area_name": "Dane County",
		"bachelorsOrHigher": 47.6
	},
	{
		"fips": 55027,
		"state": "WI",
		"area_name": "Dodge County",
		"bachelorsOrHigher": 15.7
	},
	{
		"fips": 55029,
		"state": "WI",
		"area_name": "Door County",
		"bachelorsOrHigher": 29.4
	},
	{
		"fips": 55031,
		"state": "WI",
		"area_name": "Douglas County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 55033,
		"state": "WI",
		"area_name": "Dunn County",
		"bachelorsOrHigher": 25.3
	},
	{
		"fips": 55035,
		"state": "WI",
		"area_name": "Eau Claire County",
		"bachelorsOrHigher": 31.1
	},
	{
		"fips": 55037,
		"state": "WI",
		"area_name": "Florence County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 55039,
		"state": "WI",
		"area_name": "Fond du Lac County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 55041,
		"state": "WI",
		"area_name": "Forest County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 55043,
		"state": "WI",
		"area_name": "Grant County",
		"bachelorsOrHigher": 20.2
	},
	{
		"fips": 55045,
		"state": "WI",
		"area_name": "Green County",
		"bachelorsOrHigher": 20.9
	},
	{
		"fips": 55047,
		"state": "WI",
		"area_name": "Green Lake County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 55049,
		"state": "WI",
		"area_name": "Iowa County",
		"bachelorsOrHigher": 23.2
	},
	{
		"fips": 55051,
		"state": "WI",
		"area_name": "Iron County",
		"bachelorsOrHigher": 20.6
	},
	{
		"fips": 55053,
		"state": "WI",
		"area_name": "Jackson County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 55055,
		"state": "WI",
		"area_name": "Jefferson County",
		"bachelorsOrHigher": 23.3
	},
	{
		"fips": 55057,
		"state": "WI",
		"area_name": "Juneau County",
		"bachelorsOrHigher": 12.4
	},
	{
		"fips": 55059,
		"state": "WI",
		"area_name": "Kenosha County",
		"bachelorsOrHigher": 24.3
	},
	{
		"fips": 55061,
		"state": "WI",
		"area_name": "Kewaunee County",
		"bachelorsOrHigher": 14.4
	},
	{
		"fips": 55063,
		"state": "WI",
		"area_name": "La Crosse County",
		"bachelorsOrHigher": 30.8
	},
	{
		"fips": 55065,
		"state": "WI",
		"area_name": "Lafayette County",
		"bachelorsOrHigher": 17.3
	},
	{
		"fips": 55067,
		"state": "WI",
		"area_name": "Langlade County",
		"bachelorsOrHigher": 13.5
	},
	{
		"fips": 55069,
		"state": "WI",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 55071,
		"state": "WI",
		"area_name": "Manitowoc County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 55073,
		"state": "WI",
		"area_name": "Marathon County",
		"bachelorsOrHigher": 23
	},
	{
		"fips": 55075,
		"state": "WI",
		"area_name": "Marinette County",
		"bachelorsOrHigher": 13.9
	},
	{
		"fips": 55077,
		"state": "WI",
		"area_name": "Marquette County",
		"bachelorsOrHigher": 13
	},
	{
		"fips": 55078,
		"state": "WI",
		"area_name": "Menominee County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 55079,
		"state": "WI",
		"area_name": "Milwaukee County",
		"bachelorsOrHigher": 28.7
	},
	{
		"fips": 55081,
		"state": "WI",
		"area_name": "Monroe County",
		"bachelorsOrHigher": 17.5
	},
	{
		"fips": 55083,
		"state": "WI",
		"area_name": "Oconto County",
		"bachelorsOrHigher": 15.4
	},
	{
		"fips": 55085,
		"state": "WI",
		"area_name": "Oneida County",
		"bachelorsOrHigher": 24.4
	},
	{
		"fips": 55087,
		"state": "WI",
		"area_name": "Outagamie County",
		"bachelorsOrHigher": 26.9
	},
	{
		"fips": 55089,
		"state": "WI",
		"area_name": "Ozaukee County",
		"bachelorsOrHigher": 46.4
	},
	{
		"fips": 55091,
		"state": "WI",
		"area_name": "Pepin County",
		"bachelorsOrHigher": 17.1
	},
	{
		"fips": 55093,
		"state": "WI",
		"area_name": "Pierce County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 55095,
		"state": "WI",
		"area_name": "Polk County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 55097,
		"state": "WI",
		"area_name": "Portage County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 55099,
		"state": "WI",
		"area_name": "Price County",
		"bachelorsOrHigher": 16.1
	},
	{
		"fips": 55101,
		"state": "WI",
		"area_name": "Racine County",
		"bachelorsOrHigher": 23.4
	},
	{
		"fips": 55103,
		"state": "WI",
		"area_name": "Richland County",
		"bachelorsOrHigher": 16.7
	},
	{
		"fips": 55105,
		"state": "WI",
		"area_name": "Rock County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 55107,
		"state": "WI",
		"area_name": "Rusk County",
		"bachelorsOrHigher": 14.2
	},
	{
		"fips": 55109,
		"state": "WI",
		"area_name": "St. Croix County",
		"bachelorsOrHigher": 32.4
	},
	{
		"fips": 55111,
		"state": "WI",
		"area_name": "Sauk County",
		"bachelorsOrHigher": 21.9
	},
	{
		"fips": 55113,
		"state": "WI",
		"area_name": "Sawyer County",
		"bachelorsOrHigher": 22.1
	},
	{
		"fips": 55115,
		"state": "WI",
		"area_name": "Shawano County",
		"bachelorsOrHigher": 15.1
	},
	{
		"fips": 55117,
		"state": "WI",
		"area_name": "Sheboygan County",
		"bachelorsOrHigher": 22.5
	},
	{
		"fips": 55119,
		"state": "WI",
		"area_name": "Taylor County",
		"bachelorsOrHigher": 13.8
	},
	{
		"fips": 55121,
		"state": "WI",
		"area_name": "Trempealeau County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 55123,
		"state": "WI",
		"area_name": "Vernon County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 55125,
		"state": "WI",
		"area_name": "Vilas County",
		"bachelorsOrHigher": 24.9
	},
	{
		"fips": 55127,
		"state": "WI",
		"area_name": "Walworth County",
		"bachelorsOrHigher": 26.3
	},
	{
		"fips": 55129,
		"state": "WI",
		"area_name": "Washburn County",
		"bachelorsOrHigher": 20.5
	},
	{
		"fips": 55131,
		"state": "WI",
		"area_name": "Washington County",
		"bachelorsOrHigher": 27.9
	},
	{
		"fips": 55133,
		"state": "WI",
		"area_name": "Waukesha County",
		"bachelorsOrHigher": 41
	},
	{
		"fips": 55135,
		"state": "WI",
		"area_name": "Waupaca County",
		"bachelorsOrHigher": 16.5
	},
	{
		"fips": 55137,
		"state": "WI",
		"area_name": "Waushara County",
		"bachelorsOrHigher": 15.2
	},
	{
		"fips": 55139,
		"state": "WI",
		"area_name": "Winnebago County",
		"bachelorsOrHigher": 26.1
	},
	{
		"fips": 55141,
		"state": "WI",
		"area_name": "Wood County",
		"bachelorsOrHigher": 18.9
	},
	{
		"fips": 56001,
		"state": "WY",
		"area_name": "Albany County",
		"bachelorsOrHigher": 48.8
	},
	{
		"fips": 56003,
		"state": "WY",
		"area_name": "Big Horn County",
		"bachelorsOrHigher": 20
	},
	{
		"fips": 56005,
		"state": "WY",
		"area_name": "Campbell County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 56007,
		"state": "WY",
		"area_name": "Carbon County",
		"bachelorsOrHigher": 17.2
	},
	{
		"fips": 56009,
		"state": "WY",
		"area_name": "Converse County",
		"bachelorsOrHigher": 19.6
	},
	{
		"fips": 56011,
		"state": "WY",
		"area_name": "Crook County",
		"bachelorsOrHigher": 21.6
	},
	{
		"fips": 56013,
		"state": "WY",
		"area_name": "Fremont County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 56015,
		"state": "WY",
		"area_name": "Goshen County",
		"bachelorsOrHigher": 21.5
	},
	{
		"fips": 56017,
		"state": "WY",
		"area_name": "Hot Springs County",
		"bachelorsOrHigher": 19.5
	},
	{
		"fips": 56019,
		"state": "WY",
		"area_name": "Johnson County",
		"bachelorsOrHigher": 27
	},
	{
		"fips": 56021,
		"state": "WY",
		"area_name": "Laramie County",
		"bachelorsOrHigher": 26.8
	},
	{
		"fips": 56023,
		"state": "WY",
		"area_name": "Lincoln County",
		"bachelorsOrHigher": 20.1
	},
	{
		"fips": 56025,
		"state": "WY",
		"area_name": "Natrona County",
		"bachelorsOrHigher": 21.3
	},
	{
		"fips": 56027,
		"state": "WY",
		"area_name": "Niobrara County",
		"bachelorsOrHigher": 21.4
	},
	{
		"fips": 56029,
		"state": "WY",
		"area_name": "Park County",
		"bachelorsOrHigher": 28.3
	},
	{
		"fips": 56031,
		"state": "WY",
		"area_name": "Platte County",
		"bachelorsOrHigher": 19.2
	},
	{
		"fips": 56033,
		"state": "WY",
		"area_name": "Sheridan County",
		"bachelorsOrHigher": 28.9
	},
	{
		"fips": 56035,
		"state": "WY",
		"area_name": "Sublette County",
		"bachelorsOrHigher": 23.6
	},
	{
		"fips": 56037,
		"state": "WY",
		"area_name": "Sweetwater County",
		"bachelorsOrHigher": 18.1
	},
	{
		"fips": 56039,
		"state": "WY",
		"area_name": "Teton County",
		"bachelorsOrHigher": 51.9
	},
	{
		"fips": 56041,
		"state": "WY",
		"area_name": "Uinta County",
		"bachelorsOrHigher": 18.7
	},
	{
		"fips": 56043,
		"state": "WY",
		"area_name": "Washakie County",
		"bachelorsOrHigher": 21.2
	},
	{
		"fips": 56045,
		"state": "WY",
		"area_name": "Weston County",
		"bachelorsOrHigher": 16.8
	}
];

//Choropleth Geometry Data
const geometryDataset = {
	"type": "Topology",
	"objects": {
		"counties": {
			"type": "GeometryCollection",
			"geometries": [
				{
					"type": "Polygon",
					"id": 5089,
					"arcs": [
						[
							0,
							1,
							2,
							3,
							4
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6079,
					"arcs": [
						[
							5,
							6,
							7,
							8,
							9
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17111,
					"arcs": [
						[
							10,
							11,
							12,
							13,
							14,
							15,
							16
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20131,
					"arcs": [
						[
							17,
							18,
							19,
							20,
							21,
							22
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28141,
					"arcs": [
						[
							23,
							24,
							25,
							26,
							27,
							28,
							29
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39009,
					"arcs": [
						[
							30,
							31,
							32,
							33,
							34,
							35,
							36
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48369,
					"arcs": [
						[
							37,
							38,
							39,
							40,
							41
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48211,
					"arcs": [
						[
							42,
							43,
							44,
							45,
							46
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1007,
					"arcs": [
						[
							47,
							48,
							49,
							50,
							51,
							52
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5111,
					"arcs": [
						[
							53,
							54,
							55,
							56,
							57
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19105,
					"arcs": [
						[
							58,
							59,
							60,
							61,
							62,
							63
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20111,
					"arcs": [
						[
							64,
							65,
							66,
							67,
							68,
							69
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20171,
					"arcs": [
						[
							70,
							71,
							72,
							73,
							74,
							75
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22003,
					"arcs": [
						[
							76,
							77,
							78,
							79,
							80
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27161,
					"arcs": [
						[
							81,
							82,
							83,
							84,
							85,
							86
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29203,
					"arcs": [
						[
							87,
							88,
							89,
							90,
							91,
							92
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31039,
					"arcs": [
						[
							93,
							94,
							95,
							96,
							97,
							98
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39021,
					"arcs": [
						[
							99,
							100,
							101,
							102,
							103,
							104
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39137,
					"arcs": [
						[
							105,
							106,
							107,
							108,
							109,
							110
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48113,
					"arcs": [
						[
							111,
							112,
							113,
							114,
							115,
							116
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48173,
					"arcs": [
						[
							117,
							118,
							119,
							120,
							121
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48009,
					"arcs": [
						[
							122,
							123,
							124,
							125,
							126
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29125,
					"arcs": [
						[
							127,
							128,
							129,
							130,
							131
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31079,
					"arcs": [
						[
							132,
							133,
							134,
							135,
							136
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31123,
					"arcs": [
						[
							137,
							138,
							139,
							140,
							141,
							142
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1003,
					"arcs": [
						[
							143,
							144,
							145,
							146,
							147,
							148,
							149
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4012,
					"arcs": [
						[
							150,
							151,
							152,
							153,
							154,
							155,
							156
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8063,
					"arcs": [
						[
							157,
							158,
							159,
							160,
							161,
							162,
							163
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18161,
					"arcs": [
						[
							164,
							165,
							166,
							167,
							168
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20189,
					"arcs": [
						[
							169,
							170,
							171,
							172,
							173,
							174
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26019,
					"arcs": [
						[
							175,
							176,
							177,
							178
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30001,
					"arcs": [
						[
							179,
							180,
							181,
							182,
							183,
							184,
							185
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36087,
					"arcs": [
						[
							186,
							187,
							188,
							189,
							190
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41055,
					"arcs": [
						[
							191,
							192,
							193
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51700,
					"arcs": [
						[
							194,
							195,
							196,
							197
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56045,
					"arcs": [
						[
							198,
							199,
							200,
							201,
							202,
							203,
							204
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5059,
					"arcs": [
						[
							205,
							206,
							207,
							208,
							209,
							210
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18041,
					"arcs": [
						[
							211,
							212,
							-169,
							213,
							214
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18013,
					"arcs": [
						[
							215,
							216,
							217,
							218,
							219
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28043,
					"arcs": [
						[
							220,
							221,
							222,
							223,
							224,
							225,
							226
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31009,
					"arcs": [
						[
							227,
							228,
							229,
							230,
							231,
							232
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37063,
					"arcs": [
						[
							233,
							234,
							235,
							236,
							237
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40021,
					"arcs": [
						[
							238,
							239,
							240,
							241,
							242,
							243
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47083,
					"arcs": [
						[
							244,
							245,
							246,
							247,
							248
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48099,
					"arcs": [
						[
							249,
							250,
							251,
							252,
							253
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48093,
					"arcs": [
						[
							254,
							255,
							256,
							257,
							258
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51685,
					"arcs": [
						[
							259,
							260
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26165,
					"arcs": [
						[
							261,
							262,
							263,
							264,
							265
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51775,
					"arcs": [
						[
							266,
							267
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55035,
					"arcs": [
						[
							268,
							269,
							270,
							271,
							272,
							273,
							274
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48233,
					"arcs": [
						[
							275,
							276,
							277,
							278
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40109,
					"arcs": [
						[
							279,
							280,
							281,
							282,
							283
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4005,
					"arcs": [
						[
							284,
							285,
							286,
							287,
							288,
							289
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2198,
					"arcs": [
						[
							[
								290,
								291
							]
						],
						[
							[
								292
							]
						],
						[
							[
								293
							]
						],
						[
							[
								294
							]
						],
						[
							[
								295,
								296
							]
						],
						[
							[
								297,
								298
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18167,
					"arcs": [
						[
							299,
							300,
							301,
							302,
							303,
							304
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26005,
					"arcs": [
						[
							305,
							306,
							307,
							308,
							309,
							310
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28023,
					"arcs": [
						[
							311,
							312,
							313,
							314
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30053,
					"arcs": [
						[
							315,
							316,
							317,
							318,
							319
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 39123,
					"arcs": [
						[
							[
								320
							]
						],
						[
							[
								321,
								322,
								323,
								324,
								325
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50019,
					"arcs": [
						[
							326,
							327,
							328,
							329,
							330
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6031,
					"arcs": [
						[
							331,
							332,
							333,
							-7,
							334
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17165,
					"arcs": [
						[
							335,
							336,
							337,
							338,
							339,
							340
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19027,
					"arcs": [
						[
							341,
							342,
							343,
							344,
							345,
							346
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20101,
					"arcs": [
						[
							347,
							348,
							349,
							-73
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26117,
					"arcs": [
						[
							350,
							351,
							352,
							353,
							354,
							355
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27041,
					"arcs": [
						[
							356,
							357,
							358,
							359,
							360
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30049,
					"arcs": [
						[
							361,
							362,
							363,
							364,
							365,
							366,
							367
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29059,
					"arcs": [
						[
							368,
							369,
							370,
							371,
							372,
							373
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37067,
					"arcs": [
						[
							374,
							375,
							376,
							377,
							378,
							379
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38091,
					"arcs": [
						[
							380,
							381,
							382,
							383,
							384,
							385
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40137,
					"arcs": [
						[
							386,
							387,
							388,
							389,
							390,
							391
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48171,
					"arcs": [
						[
							392,
							393,
							394,
							395,
							396,
							397
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48283,
					"arcs": [
						[
							398,
							399,
							400,
							401,
							402
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51065,
					"arcs": [
						[
							403,
							404,
							405,
							406,
							407
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55135,
					"arcs": [
						[
							408,
							409,
							410,
							411,
							412
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20093,
					"arcs": [
						[
							413,
							-75,
							414,
							415,
							416
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28129,
					"arcs": [
						[
							417,
							418,
							419,
							420,
							421,
							422
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18057,
					"arcs": [
						[
							423,
							424,
							425,
							426,
							427,
							428
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40003,
					"arcs": [
						[
							429,
							430,
							431,
							432,
							433,
							434
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56041,
					"arcs": [
						[
							435,
							436,
							437,
							438
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6017,
					"arcs": [
						[
							439,
							440,
							441,
							442,
							443
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13111,
					"arcs": [
						[
							444,
							445,
							446,
							447,
							448,
							449,
							450
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 23009,
					"arcs": [
						[
							[
								451
							]
						],
						[
							[
								452,
								453,
								454,
								455,
								456,
								457
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27133,
					"arcs": [
						[
							458,
							459,
							460,
							461,
							462
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31145,
					"arcs": [
						[
							463,
							464,
							465,
							466,
							467
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31083,
					"arcs": [
						[
							468,
							469,
							470,
							471,
							472
						]
					]
				},
				{
					"type": "Polygon",
					"id": 44003,
					"arcs": [
						[
							473,
							474,
							475,
							476,
							477
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54061,
					"arcs": [
						[
							478,
							479,
							480,
							481,
							482,
							483
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13165,
					"arcs": [
						[
							484,
							485,
							486,
							487
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16061,
					"arcs": [
						[
							488,
							489,
							490
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16067,
					"arcs": [
						[
							491,
							492,
							493,
							494
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18053,
					"arcs": [
						[
							495,
							496,
							497,
							498,
							499,
							500,
							501,
							502,
							503
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27151,
					"arcs": [
						[
							504,
							505,
							506,
							507,
							508,
							509
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27039,
					"arcs": [
						[
							510,
							511,
							512,
							513,
							514
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31019,
					"arcs": [
						[
							515,
							516,
							517,
							-137,
							518,
							519,
							520,
							521
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46125,
					"arcs": [
						[
							522,
							523,
							524,
							525,
							526,
							527
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48401,
					"arcs": [
						[
							528,
							529,
							530,
							531,
							532,
							533,
							534
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48375,
					"arcs": [
						[
							535,
							536,
							537,
							538
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36123,
					"arcs": [
						[
							539,
							540,
							541,
							542
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26091,
					"arcs": [
						[
							543,
							544,
							545,
							546,
							547,
							548
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27165,
					"arcs": [
						[
							549,
							550,
							551,
							552,
							553
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31151,
					"arcs": [
						[
							554,
							555,
							556,
							557,
							558
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48011,
					"arcs": [
						[
							559,
							560,
							561,
							562,
							563
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8045,
					"arcs": [
						[
							564,
							565,
							566,
							567,
							568,
							569,
							570
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17075,
					"arcs": [
						[
							571,
							572,
							573,
							574,
							575
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19109,
					"arcs": [
						[
							576,
							577,
							578,
							579,
							580,
							581,
							582
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19131,
					"arcs": [
						[
							583,
							584,
							585,
							586,
							587
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20033,
					"arcs": [
						[
							588,
							589,
							590,
							591,
							592
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22091,
					"arcs": [
						[
							593,
							594,
							595,
							596,
							597
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28075,
					"arcs": [
						[
							598,
							599,
							600,
							-312,
							601
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31181,
					"arcs": [
						[
							602,
							603,
							604,
							605,
							606,
							607,
							608
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35015,
					"arcs": [
						[
							609,
							610,
							611,
							612,
							613,
							614
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53023,
					"arcs": [
						[
							615,
							616,
							617,
							618
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5109,
					"arcs": [
						[
							619,
							620,
							621,
							622,
							623
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17039,
					"arcs": [
						[
							624,
							625,
							626,
							627
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26107,
					"arcs": [
						[
							628,
							629,
							-351,
							630
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27005,
					"arcs": [
						[
							631,
							632,
							633,
							634,
							635,
							636,
							637
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29063,
					"arcs": [
						[
							638,
							639,
							640,
							641,
							642,
							643
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30033,
					"arcs": [
						[
							644,
							645,
							646,
							647,
							648,
							649,
							650
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35011,
					"arcs": [
						[
							651,
							652,
							653,
							654,
							655
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46037,
					"arcs": [
						[
							656,
							657,
							658,
							659,
							660,
							661,
							662
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48131,
					"arcs": [
						[
							663,
							664,
							665,
							666,
							667,
							668
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48235,
					"arcs": [
						[
							669,
							670,
							671,
							672
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55099,
					"arcs": [
						[
							673,
							674,
							675,
							676,
							677,
							678,
							679,
							680
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28071,
					"arcs": [
						[
							681,
							682,
							683,
							684,
							685,
							686,
							687
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17099,
					"arcs": [
						[
							688,
							689,
							690,
							691,
							692,
							693,
							694,
							695,
							696
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6071,
					"arcs": [
						[
							697,
							698,
							699,
							700,
							-152,
							701,
							702,
							703
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20007,
					"arcs": [
						[
							704,
							705,
							706,
							-430,
							707,
							-590,
							708
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29217,
					"arcs": [
						[
							709,
							710,
							711,
							712,
							713,
							714,
							715
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30089,
					"arcs": [
						[
							-319,
							716,
							717,
							718,
							719,
							720,
							721
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42105,
					"arcs": [
						[
							722,
							723,
							724,
							725,
							726,
							727,
							728
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46033,
					"arcs": [
						[
							729,
							730,
							731,
							732,
							-202
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50009,
					"arcs": [
						[
							733,
							734,
							735,
							736,
							-328
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55071,
					"arcs": [
						[
							737,
							738,
							739,
							740,
							741
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12043,
					"arcs": [
						[
							742,
							743,
							744,
							745
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13011,
					"arcs": [
						[
							746,
							747,
							748,
							749,
							750,
							751
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18101,
					"arcs": [
						[
							752,
							753,
							754,
							755,
							756
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27003,
					"arcs": [
						[
							757,
							758,
							759,
							760,
							761,
							762
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29061,
					"arcs": [
						[
							763,
							764,
							765,
							766,
							-640,
							767
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40107,
					"arcs": [
						[
							768,
							769,
							770,
							771,
							772,
							773,
							774
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48023,
					"arcs": [
						[
							775,
							-127,
							776,
							777,
							778
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48269,
					"arcs": [
						[
							779,
							780,
							781,
							782,
							783
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49051,
					"arcs": [
						[
							784,
							785,
							786,
							787
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20095,
					"arcs": [
						[
							788,
							789,
							790,
							791,
							792,
							-706
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31047,
					"arcs": [
						[
							793,
							-522,
							794,
							795,
							796,
							797
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27147,
					"arcs": [
						[
							798,
							-515,
							799,
							800,
							-84
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42047,
					"arcs": [
						[
							801,
							802,
							803,
							804,
							805,
							806
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38065,
					"arcs": [
						[
							807,
							808,
							809,
							810
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48151,
					"arcs": [
						[
							811,
							812,
							813,
							814,
							815
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13061,
					"arcs": [
						[
							816,
							817,
							818,
							819,
							820,
							821
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20137,
					"arcs": [
						[
							822,
							-472,
							823,
							824,
							825,
							826
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26127,
					"arcs": [
						[
							827,
							828,
							829,
							830
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28039,
					"arcs": [
						[
							831,
							832,
							833,
							834,
							835
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46039,
					"arcs": [
						[
							836,
							837,
							838,
							839,
							840,
							841,
							842
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2158,
					"arcs": [
						[
							843,
							844,
							845,
							846
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54075,
					"arcs": [
						[
							847,
							848,
							849,
							850,
							851,
							852
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56005,
					"arcs": [
						[
							853,
							854,
							-205,
							855,
							856,
							857
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5115,
					"arcs": [
						[
							858,
							859,
							860,
							861,
							862,
							863,
							864
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13077,
					"arcs": [
						[
							865,
							866,
							867,
							868,
							869,
							870,
							871
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17135,
					"arcs": [
						[
							872,
							873,
							874,
							875,
							876,
							877,
							878
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19015,
					"arcs": [
						[
							879,
							880,
							881,
							882,
							883,
							884
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28073,
					"arcs": [
						[
							885,
							886,
							887,
							888,
							889
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29057,
					"arcs": [
						[
							890,
							891,
							892,
							893,
							894,
							895
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39159,
					"arcs": [
						[
							896,
							897,
							898,
							899,
							900,
							-102,
							901
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40011,
					"arcs": [
						[
							902,
							903,
							904,
							905,
							906,
							907
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47017,
					"arcs": [
						[
							908,
							909,
							910,
							911,
							912,
							913,
							914
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48393,
					"arcs": [
						[
							-277,
							915,
							916,
							917,
							-47,
							918,
							919
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48207,
					"arcs": [
						[
							920,
							921,
							922,
							923,
							924
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55131,
					"arcs": [
						[
							925,
							926,
							927,
							928,
							929
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21157,
					"arcs": [
						[
							930,
							931,
							932,
							933,
							934,
							935
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19117,
					"arcs": [
						[
							936,
							937,
							938,
							939,
							940
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48179,
					"arcs": [
						[
							-919,
							941,
							942,
							943
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6049,
					"arcs": [
						[
							944,
							945,
							946,
							947,
							948,
							949
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13143,
					"arcs": [
						[
							950,
							951,
							952,
							953
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21029,
					"arcs": [
						[
							954,
							955,
							956,
							957,
							958
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37165,
					"arcs": [
						[
							959,
							960,
							961,
							962
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39107,
					"arcs": [
						[
							963,
							964,
							965,
							966,
							967,
							968
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47137,
					"arcs": [
						[
							969,
							970,
							971,
							972,
							973,
							974
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49043,
					"arcs": [
						[
							975,
							976,
							-439,
							977,
							978,
							979,
							-786,
							980
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51800,
					"arcs": [
						[
							981,
							982,
							983,
							984,
							985,
							986,
							987
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55101,
					"arcs": [
						[
							988,
							989,
							990,
							991,
							992
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12117,
					"arcs": [
						[
							993,
							994,
							995
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17063,
					"arcs": [
						[
							996,
							997,
							998,
							999,
							-691
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18031,
					"arcs": [
						[
							1000,
							1001,
							1002,
							1003,
							1004,
							1005
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19095,
					"arcs": [
						[
							1006,
							1007,
							1008,
							1009,
							1010
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27019,
					"arcs": [
						[
							1011,
							1012,
							1013,
							1014,
							1015
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38007,
					"arcs": [
						[
							1016,
							1017,
							1018,
							1019,
							1020
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39069,
					"arcs": [
						[
							1021,
							1022,
							1023,
							-108,
							1024,
							1025
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48281,
					"arcs": [
						[
							1026,
							1027,
							-254,
							1028,
							1029,
							1030
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48363,
					"arcs": [
						[
							1031,
							1032,
							1033,
							1034,
							1035,
							1036,
							1037
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55097,
					"arcs": [
						[
							1038,
							-413,
							1039,
							1040,
							1041
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55078,
					"arcs": [
						[
							1042,
							1043,
							1044
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13035,
					"arcs": [
						[
							1045,
							1046,
							1047,
							1048,
							1049,
							1050
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18059,
					"arcs": [
						[
							-426,
							1051,
							1052,
							1053,
							1054,
							1055
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19185,
					"arcs": [
						[
							-940,
							1056,
							1057,
							1058,
							1059
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46097,
					"arcs": [
						[
							1060,
							1061,
							1062,
							1063,
							1064
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48013,
					"arcs": [
						[
							1065,
							1066,
							1067,
							1068,
							1069,
							-400,
							1070,
							1071
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48319,
					"arcs": [
						[
							1072,
							1073,
							1074,
							-393,
							1075,
							1076
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48503,
					"arcs": [
						[
							-126,
							1077,
							-1032,
							1078,
							1079
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55133,
					"arcs": [
						[
							1080,
							-929,
							1081,
							-989,
							1082,
							1083
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41043,
					"arcs": [
						[
							1084,
							1085,
							1086,
							1087,
							1088,
							1089
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48055,
					"arcs": [
						[
							1090,
							1091,
							1092,
							1093,
							1094,
							1095
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21207,
					"arcs": [
						[
							1096,
							1097,
							1098,
							1099,
							1100,
							1101
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51595,
					"arcs": [
						[
							1102
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55061,
					"arcs": [
						[
							1103,
							1104,
							1105,
							-739,
							1106
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49037,
					"arcs": [
						[
							1107,
							1108,
							1109,
							1110,
							1111,
							1112,
							1113,
							1114,
							1115,
							-286,
							1116
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55015,
					"arcs": [
						[
							1117,
							1118,
							-742,
							1119,
							1120,
							1121
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18099,
					"arcs": [
						[
							1122,
							1123,
							1124,
							1125,
							1126
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35053,
					"arcs": [
						[
							1127,
							1128,
							1129,
							1130,
							1131,
							1132
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18085,
					"arcs": [
						[
							-1124,
							1133,
							1134,
							1135,
							1136,
							1137
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18113,
					"arcs": [
						[
							1138,
							1139,
							1140,
							1141,
							-1135,
							1142
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16059,
					"arcs": [
						[
							1143,
							1144,
							1145,
							-186,
							1146,
							1147,
							1148
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19141,
					"arcs": [
						[
							1149,
							1150,
							1151,
							1152
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19159,
					"arcs": [
						[
							1153,
							1154,
							1155,
							1156,
							1157
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19169,
					"arcs": [
						[
							1158,
							1159,
							1160,
							1161,
							1162,
							-882
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19175,
					"arcs": [
						[
							1163,
							1164,
							1165,
							-1154,
							1166
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19179,
					"arcs": [
						[
							1167,
							1168,
							1169,
							1170,
							1171
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47143,
					"arcs": [
						[
							1172,
							1173,
							1174,
							1175,
							1176
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55087,
					"arcs": [
						[
							1177,
							1178,
							-1118,
							1179,
							-410
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17159,
					"arcs": [
						[
							1180,
							1181,
							1182,
							1183,
							1184,
							1185,
							1186
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17169,
					"arcs": [
						[
							1187,
							1188,
							1189,
							1190,
							1191,
							1192,
							1193
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48079,
					"arcs": [
						[
							1194,
							1195,
							1196,
							1197,
							1198
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20107,
					"arcs": [
						[
							1199,
							1200,
							-710,
							1201,
							1202
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23001,
					"arcs": [
						[
							1203,
							1204,
							1205,
							1206,
							1207
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20001,
					"arcs": [
						[
							1208,
							1209,
							1210,
							1211
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29051,
					"arcs": [
						[
							1212,
							1213,
							1214,
							1215,
							1216
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29053,
					"arcs": [
						[
							1217,
							1218,
							1219,
							1220,
							1221,
							1222
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1057,
					"arcs": [
						[
							1223,
							1224,
							1225,
							1226,
							1227
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41033,
					"arcs": [
						[
							1228,
							1229,
							1230,
							1231,
							1232
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16039,
					"arcs": [
						[
							1233,
							1234,
							1235,
							1236,
							1237,
							1238,
							1239,
							1240
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47033,
					"arcs": [
						[
							1241,
							1242,
							1243,
							1244,
							1245
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29071,
					"arcs": [
						[
							1246,
							1247,
							1248,
							1249,
							1250,
							1251,
							1252
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16051,
					"arcs": [
						[
							1253,
							1254,
							1255,
							1256,
							1257,
							1258
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31045,
					"arcs": [
						[
							1259,
							1260,
							1261,
							1262,
							1263
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31091,
					"arcs": [
						[
							1264,
							1265,
							1266,
							1267,
							1268
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17025,
					"arcs": [
						[
							1269,
							1270,
							1271,
							-1187,
							1272,
							1273
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29221,
					"arcs": [
						[
							-1251,
							1274,
							1275,
							1276,
							1277
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29105,
					"arcs": [
						[
							1278,
							1279,
							1280,
							1281,
							1282,
							-371
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29121,
					"arcs": [
						[
							1283,
							1284,
							1285,
							1286,
							1287,
							1288,
							1289
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26093,
					"arcs": [
						[
							1290,
							1291,
							1292,
							1293,
							1294,
							1295
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42093,
					"arcs": [
						[
							1296,
							1297,
							1298
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26137,
					"arcs": [
						[
							1299,
							1300,
							1301,
							1302,
							1303
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33001,
					"arcs": [
						[
							1304,
							1305,
							1306,
							1307
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31119,
					"arcs": [
						[
							1308,
							1309,
							1310,
							1311,
							1312
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38031,
					"arcs": [
						[
							1313,
							1314,
							1315,
							1316
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31135,
					"arcs": [
						[
							1317,
							1318,
							1319,
							1320,
							1321,
							1322,
							1323
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29109,
					"arcs": [
						[
							1324,
							-895,
							1325,
							1326,
							1327,
							1328,
							1329
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48139,
					"arcs": [
						[
							1330,
							-116,
							1331,
							1332,
							1333,
							1334,
							1335
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39065,
					"arcs": [
						[
							1336,
							1337,
							1338,
							-897,
							1339,
							1340,
							1341
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31157,
					"arcs": [
						[
							1342,
							1343,
							-143,
							1344,
							1345
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2195,
					"arcs": [
						[
							[
								1346,
								-296
							]
						],
						[
							[
								1347,
								1348,
								1349,
								1350
							]
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2275,
					"arcs": [
						[
							[
								-1350,
								1351,
								1352,
								1353
							]
						],
						[
							[
								1354
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48163,
					"arcs": [
						[
							1355,
							-1071,
							-399,
							1356,
							1357
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38003,
					"arcs": [
						[
							1358,
							-385,
							1359,
							1360,
							1361,
							1362
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38039,
					"arcs": [
						[
							1363,
							-386,
							-1359,
							1364,
							-1315,
							1365
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42113,
					"arcs": [
						[
							1366,
							1367,
							1368,
							1369,
							1370
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39083,
					"arcs": [
						[
							1371,
							1372,
							1373,
							1374,
							1375,
							1376,
							1377
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42117,
					"arcs": [
						[
							1378,
							1379,
							1380,
							1381,
							-725
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5053,
					"arcs": [
						[
							1382,
							1383,
							1384,
							1385,
							1386,
							-208
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31069,
					"arcs": [
						[
							1387,
							1388,
							1389,
							1390,
							1391,
							1392,
							-140
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42123,
					"arcs": [
						[
							1393,
							1394,
							1395,
							1396,
							-802,
							1397,
							1398,
							1399
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51520,
					"arcs": [
						[
							1400,
							1401
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51530,
					"arcs": [
						[
							1402
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29215,
					"arcs": [
						[
							-1281,
							1403,
							1404,
							1405,
							-88,
							1406,
							1407,
							1408
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37081,
					"arcs": [
						[
							-377,
							1409,
							1410,
							1411,
							1412
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51610,
					"arcs": [
						[
							1413,
							1414
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37109,
					"arcs": [
						[
							1415,
							1416,
							1417,
							1418,
							1419,
							1420
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51660,
					"arcs": [
						[
							1421
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51690,
					"arcs": [
						[
							1422
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19001,
					"arcs": [
						[
							1423,
							1424,
							-1164,
							1425,
							1426
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6053,
					"arcs": [
						[
							1427,
							1428,
							1429,
							-335,
							-6,
							1430
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51790,
					"arcs": [
						[
							1431
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29219,
					"arcs": [
						[
							1432,
							1433,
							-1247,
							1434,
							1435
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19021,
					"arcs": [
						[
							1436,
							1437,
							1438,
							1439
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20073,
					"arcs": [
						[
							1440,
							-69,
							1441,
							1442,
							1443,
							1444,
							1445
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48087,
					"arcs": [
						[
							1446,
							1447,
							1448,
							1449,
							1450,
							1451
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48133,
					"arcs": [
						[
							1452,
							1453,
							-1037,
							1454,
							-255,
							1455,
							1456
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48109,
					"arcs": [
						[
							1457,
							-614,
							1458,
							1459,
							1460
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26037,
					"arcs": [
						[
							1461,
							1462,
							1463,
							1464,
							1465
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19073,
					"arcs": [
						[
							1466,
							1467,
							-885,
							1468,
							1469,
							-344
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19077,
					"arcs": [
						[
							-345,
							-1470,
							1470,
							-1424,
							1471
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26045,
					"arcs": [
						[
							1472,
							-1465,
							1473,
							1474,
							1475,
							1476
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20079,
					"arcs": [
						[
							1477,
							1478,
							1479,
							1480,
							1481
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48121,
					"arcs": [
						[
							1482,
							1483,
							1484,
							-112,
							1485,
							1486
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19195,
					"arcs": [
						[
							1487,
							1488,
							-588,
							1489,
							1490
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26067,
					"arcs": [
						[
							-354,
							-1466,
							-1473,
							1491,
							1492
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26077,
					"arcs": [
						[
							-309,
							1493,
							1494,
							1495,
							1496
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26085,
					"arcs": [
						[
							1497,
							-265,
							1498,
							1499,
							1500
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37183,
					"arcs": [
						[
							-237,
							1501,
							1502,
							1503,
							1504,
							1505
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27067,
					"arcs": [
						[
							1506,
							1507,
							1508,
							1509,
							1510,
							-507
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27159,
					"arcs": [
						[
							1511,
							1512,
							1513,
							1514,
							-636
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37093,
					"arcs": [
						[
							1515,
							1516,
							1517,
							-961
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26123,
					"arcs": [
						[
							-829,
							-1500,
							-631,
							-356,
							1518,
							1519
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21219,
					"arcs": [
						[
							1520,
							1521,
							1522,
							1523,
							1524
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17051,
					"arcs": [
						[
							-876,
							1525,
							1526,
							-1270,
							1527,
							1528,
							1529
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17053,
					"arcs": [
						[
							1530,
							1531,
							-576,
							1532,
							1533,
							1534
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27013,
					"arcs": [
						[
							1535,
							1536,
							-87,
							1537,
							1538,
							-551,
							1539
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48145,
					"arcs": [
						[
							1540,
							1541,
							1542,
							1543,
							1544
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40047,
					"arcs": [
						[
							1545,
							1546,
							1547,
							1548,
							1549,
							1550,
							-433
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46005,
					"arcs": [
						[
							1551,
							1552,
							1553,
							1554,
							1555,
							1556
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46025,
					"arcs": [
						[
							-662,
							1557,
							1558,
							1559,
							-1553,
							1560
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21035,
					"arcs": [
						[
							-935,
							1561,
							1562,
							1563,
							1564
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48015,
					"arcs": [
						[
							1565,
							1566,
							1567,
							1568,
							1569,
							1570
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2105,
					"arcs": [
						[
							[
								1571
							]
						],
						[
							[
								1572,
								1573
							]
						],
						[
							[
								1574,
								1575,
								1576,
								1577
							]
						],
						[
							[
								1578,
								1579,
								-1348,
								1580
							]
						],
						[
							[
								1581,
								1582
							]
						],
						[
							[
								1583,
								1584
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45023,
					"arcs": [
						[
							1585,
							1586,
							1587,
							1588
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46057,
					"arcs": [
						[
							1589,
							-843,
							1590,
							1591,
							-1559
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47077,
					"arcs": [
						[
							-913,
							1592,
							1593,
							1594,
							1595
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46073,
					"arcs": [
						[
							1596,
							-1556,
							1597,
							1598,
							1599,
							1600
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49021,
					"arcs": [
						[
							1601,
							1602,
							1603,
							1604,
							1605
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29085,
					"arcs": [
						[
							1606,
							1607,
							1608,
							-369,
							1609
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27081,
					"arcs": [
						[
							-841,
							1610,
							1611,
							1612,
							1613
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27091,
					"arcs": [
						[
							-552,
							-1539,
							1614,
							-578,
							1615,
							1616
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31003,
					"arcs": [
						[
							1617,
							1618,
							-1313,
							1619,
							1620,
							1621
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29007,
					"arcs": [
						[
							1622,
							1623,
							1624,
							1625,
							1626,
							1627,
							1628
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29009,
					"arcs": [
						[
							1629,
							-1329,
							1630,
							1631,
							1632,
							1633
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51049,
					"arcs": [
						[
							1634,
							-407,
							1635,
							1636,
							1637,
							1638
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55107,
					"arcs": [
						[
							1639,
							-680,
							1640,
							1641,
							1642
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55033,
					"arcs": [
						[
							1643,
							1644,
							-275,
							1645,
							1646,
							1647
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56025,
					"arcs": [
						[
							1648,
							1649,
							1650,
							1651,
							1652
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56029,
					"arcs": [
						[
							1653,
							1654,
							1655,
							1656,
							1657,
							1658,
							1659,
							1660
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27099,
					"arcs": [
						[
							-800,
							-514,
							1661,
							1662,
							1663,
							-584,
							-1489,
							1664
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6069,
					"arcs": [
						[
							1665,
							1666,
							1667,
							1668,
							-1429
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19025,
					"arcs": [
						[
							1669,
							1670,
							-1467,
							-343,
							1671
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40037,
					"arcs": [
						[
							1672,
							1673,
							1674,
							-770,
							1675,
							1676
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51840,
					"arcs": [
						[
							1677
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20003,
					"arcs": [
						[
							1678,
							-1203,
							-1209,
							1679
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40039,
					"arcs": [
						[
							1680,
							-907,
							1681,
							1682,
							1683,
							1684
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6091,
					"arcs": [
						[
							1685,
							1686,
							1687,
							1688,
							1689
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19047,
					"arcs": [
						[
							1690,
							1691,
							-347,
							1692,
							1693,
							1694
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6061,
					"arcs": [
						[
							1695,
							1696,
							1697,
							1698,
							1699,
							-444,
							1700,
							1701
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19051,
					"arcs": [
						[
							-1171,
							1702,
							1703,
							1704,
							1705
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17105,
					"arcs": [
						[
							-1000,
							1706,
							-1531,
							1707,
							1708,
							-692
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1017,
					"arcs": [
						[
							1709,
							1710,
							1711,
							1712,
							1713
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1031,
					"arcs": [
						[
							1714,
							1715,
							1716,
							1717,
							1718
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17113,
					"arcs": [
						[
							1719,
							-1708,
							-1535,
							1720,
							1721,
							-625,
							1722,
							1723
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8121,
					"arcs": [
						[
							1724,
							1725,
							1726,
							1727,
							-158,
							1728,
							1729
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19079,
					"arcs": [
						[
							1730,
							1731,
							-1159,
							-881,
							1732
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20153,
					"arcs": [
						[
							1733,
							1734,
							1735,
							-467,
							1736,
							1737,
							1738,
							1739
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39119,
					"arcs": [
						[
							1740,
							1741,
							1742,
							1743,
							1744,
							1745
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39127,
					"arcs": [
						[
							1746,
							-1745,
							1747,
							-32,
							1748,
							1749
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48367,
					"arcs": [
						[
							1750,
							1751,
							1752,
							1753,
							1754,
							-1034
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19113,
					"arcs": [
						[
							1755,
							1756,
							-64,
							1757,
							1758,
							1759
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8105,
					"arcs": [
						[
							1760,
							1761,
							1762,
							1763,
							1764
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16085,
					"arcs": [
						[
							1765,
							1766,
							-1144,
							1767,
							1768,
							1769
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17175,
					"arcs": [
						[
							1770,
							1771,
							1772,
							1773,
							1774
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19157,
					"arcs": [
						[
							1775,
							-1011,
							1776,
							1777,
							1778
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48399,
					"arcs": [
						[
							1779,
							1780,
							1781,
							1782,
							1783,
							1784
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19153,
					"arcs": [
						[
							-883,
							-1163,
							1785,
							1786,
							1787,
							1788
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48285,
					"arcs": [
						[
							1789,
							1790,
							1791,
							1792,
							1793,
							1794
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20077,
					"arcs": [
						[
							-793,
							1795,
							1796,
							-431,
							-707
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17091,
					"arcs": [
						[
							-999,
							1797,
							1798,
							1799,
							-572,
							-1532,
							-1707
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19075,
					"arcs": [
						[
							1800,
							1801,
							1802,
							1803,
							1804
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48397,
					"arcs": [
						[
							1805,
							1806,
							1807,
							-114
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48413,
					"arcs": [
						[
							-671,
							1808,
							1809,
							1810,
							1811
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27149,
					"arcs": [
						[
							1812,
							1813,
							-505,
							1814,
							1815
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27109,
					"arcs": [
						[
							-513,
							1816,
							1817,
							1818,
							1819,
							-1662
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27171,
					"arcs": [
						[
							1820,
							1821,
							1822,
							-1012,
							1823,
							1824
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48359,
					"arcs": [
						[
							1825,
							1826,
							-539,
							1827,
							1828
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27121,
					"arcs": [
						[
							-360,
							1829,
							-1507,
							-506,
							-1814
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48345,
					"arcs": [
						[
							1830,
							1831,
							1832,
							1833,
							1834
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29115,
					"arcs": [
						[
							1835,
							1836,
							1837,
							-1290,
							1838,
							1839
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13307,
					"arcs": [
						[
							1840,
							1841,
							1842,
							1843,
							1844
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13135,
					"arcs": [
						[
							1845,
							1846,
							1847,
							1848,
							1849,
							1850,
							1851
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55073,
					"arcs": [
						[
							1852,
							1853,
							1854,
							1855,
							-1039,
							1856,
							1857
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5037,
					"arcs": [
						[
							1858,
							-57,
							1859,
							1860,
							1861
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2122,
					"arcs": [
						[
							[
								1862,
								1863,
								1864
							]
						],
						[
							[
								1865,
								1866,
								1867,
								1868,
								1869
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27095,
					"arcs": [
						[
							1870,
							1871,
							1872,
							1873,
							1874,
							1875,
							1876
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39115,
					"arcs": [
						[
							-1744,
							1877,
							1878,
							-33,
							-1748
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39129,
					"arcs": [
						[
							1879,
							1880,
							1881,
							1882,
							1883,
							1884
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39131,
					"arcs": [
						[
							1885,
							1886,
							1887,
							1888,
							1889
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46119,
					"arcs": [
						[
							1890,
							1891,
							1892,
							1893,
							1894
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29079,
					"arcs": [
						[
							1895,
							1896,
							-1836,
							1897,
							-765,
							1898
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47081,
					"arcs": [
						[
							1899,
							1900,
							1901,
							1902,
							1903,
							1904
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48049,
					"arcs": [
						[
							1905,
							-1456,
							-259,
							1906,
							1907,
							1908,
							1909
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48293,
					"arcs": [
						[
							1910,
							1911,
							1912,
							1913,
							1914,
							-1542,
							1915
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48165,
					"arcs": [
						[
							1916,
							1917,
							1918,
							1919,
							1920,
							1921
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48021,
					"arcs": [
						[
							1922,
							1923,
							1924,
							1925,
							-1092
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55009,
					"arcs": [
						[
							1926,
							1927,
							-1107,
							-738,
							-1119,
							-1179,
							1928
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13065,
					"arcs": [
						[
							1929,
							1930,
							1931,
							1932,
							1933,
							1934
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55127,
					"arcs": [
						[
							1935,
							-1083,
							-993,
							1936,
							-11,
							1937,
							1938
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51580,
					"arcs": [
						[
							1939
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32510,
					"arcs": [
						[
							1940,
							1941,
							1942,
							-1699
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19127,
					"arcs": [
						[
							1943,
							-1804,
							1944,
							1945,
							-1161
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37047,
					"arcs": [
						[
							1946,
							1947,
							1948,
							1949,
							1950
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2220,
					"arcs": [
						[
							[
								-299,
								1951
							]
						],
						[
							[
								1952
							]
						],
						[
							[
								-1573,
								1953
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13155,
					"arcs": [
						[
							1954,
							1955,
							1956,
							1957,
							1958
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38089,
					"arcs": [
						[
							1959,
							1960,
							1961,
							1962,
							1963,
							1964,
							-1019
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2188,
					"arcs": [
						[
							1965,
							1966,
							1967,
							1968
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20145,
					"arcs": [
						[
							1969,
							1970,
							1971,
							1972,
							1973,
							1974
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20185,
					"arcs": [
						[
							-1972,
							1975,
							1976,
							1977,
							1978,
							1979
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41021,
					"arcs": [
						[
							1980,
							1981,
							1982,
							1983,
							-193
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19121,
					"arcs": [
						[
							1984,
							1985,
							1986,
							-1165,
							-1425
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48451,
					"arcs": [
						[
							1987,
							1988,
							-1784,
							1989,
							-1809,
							-670,
							1990
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12049,
					"arcs": [
						[
							1991,
							1992,
							1993,
							1994
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39165,
					"arcs": [
						[
							1995,
							1996,
							1997,
							1998,
							1999,
							2000
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12011,
					"arcs": [
						[
							2001,
							2002,
							2003,
							2004,
							2005
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39175,
					"arcs": [
						[
							2006,
							2007,
							2008,
							-1338,
							2009
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39059,
					"arcs": [
						[
							2010,
							2011,
							2012,
							2013,
							2014,
							-1742
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39063,
					"arcs": [
						[
							2015,
							2016,
							-2010,
							-1337,
							2017,
							-109
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39027,
					"arcs": [
						[
							-1998,
							2018,
							2019,
							2020,
							2021,
							2022
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48501,
					"arcs": [
						[
							-1199,
							2023,
							-1917,
							2024
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13117,
					"arcs": [
						[
							2025,
							2026,
							2027,
							-1847,
							2028
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48159,
					"arcs": [
						[
							2029,
							2030,
							2031,
							2032,
							2033,
							2034
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36023,
					"arcs": [
						[
							2035,
							2036,
							2037,
							2038,
							2039,
							2040,
							2041
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48343,
					"arcs": [
						[
							2042,
							2043,
							2044,
							2045,
							2046,
							2047,
							2048
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31071,
					"arcs": [
						[
							2049,
							2050,
							2051,
							2052,
							2053
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40143,
					"arcs": [
						[
							2054,
							2055,
							2056,
							2057,
							2058,
							2059,
							-1674
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51187,
					"arcs": [
						[
							2060,
							2061,
							2062,
							2063,
							2064,
							2065
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40019,
					"arcs": [
						[
							-389,
							2066,
							2067,
							2068,
							2069,
							2070,
							2071
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51680,
					"arcs": [
						[
							2072,
							2073,
							2074
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40099,
					"arcs": [
						[
							2075,
							2076,
							2077,
							-2068
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40127,
					"arcs": [
						[
							2078,
							2079,
							2080,
							2081,
							2082,
							2083
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1105,
					"arcs": [
						[
							-52,
							2084,
							2085,
							2086,
							2087
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1075,
					"arcs": [
						[
							2088,
							2089,
							-1228,
							2090,
							2091
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1127,
					"arcs": [
						[
							2092,
							2093,
							2094,
							2095,
							2096,
							-1225,
							2097
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28097,
					"arcs": [
						[
							-225,
							2098,
							2099,
							2100,
							2101
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28119,
					"arcs": [
						[
							2102,
							2103,
							2104,
							2105
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29025,
					"arcs": [
						[
							-641,
							-767,
							2106,
							2107,
							2108,
							2109
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51750,
					"arcs": [
						[
							2110,
							2111
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54033,
					"arcs": [
						[
							2112,
							2113,
							2114,
							2115,
							2116,
							2117,
							2118
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29049,
					"arcs": [
						[
							-642,
							-2110,
							2119,
							2120,
							2121,
							2122
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54101,
					"arcs": [
						[
							2123,
							2124,
							2125,
							2126,
							-848,
							2127,
							2128
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28099,
					"arcs": [
						[
							2129,
							2130,
							2131,
							2132
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12035,
					"arcs": [
						[
							2133,
							2134,
							2135,
							2136
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13007,
					"arcs": [
						[
							2137,
							2138,
							2139,
							2140,
							2141,
							2142
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28013,
					"arcs": [
						[
							-686,
							2143,
							2144,
							2145,
							-223,
							2146
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28061,
					"arcs": [
						[
							2147,
							-315,
							2148,
							2149,
							-419
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46089,
					"arcs": [
						[
							2150,
							2151,
							2152,
							2153,
							2154,
							2155
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13131,
					"arcs": [
						[
							2156,
							2157,
							2158,
							2159,
							2160
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27111,
					"arcs": [
						[
							2161,
							-637,
							-1515,
							2162,
							-357,
							2163,
							2164
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1107,
					"arcs": [
						[
							2165,
							-2091,
							-1227,
							2166,
							2167,
							2168,
							2169
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19143,
					"arcs": [
						[
							2170,
							2171,
							2172,
							-1150,
							2173
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51179,
					"arcs": [
						[
							2174,
							2175,
							2176,
							2177,
							2178,
							2179,
							2180,
							2181,
							2182
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17123,
					"arcs": [
						[
							2183,
							2184,
							-694,
							2185,
							2186,
							-1773
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31063,
					"arcs": [
						[
							2187,
							-797,
							2188,
							2189,
							-464,
							2190,
							2191
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18171,
					"arcs": [
						[
							2192,
							2193,
							2194,
							2195,
							2196
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26035,
					"arcs": [
						[
							2197,
							2198,
							2199,
							2200,
							2201
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26051,
					"arcs": [
						[
							2202,
							2203,
							2204,
							2205,
							2206,
							-2200
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2185,
					"arcs": [
						[
							2207,
							-1966,
							2208
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51145,
					"arcs": [
						[
							-1637,
							2209,
							2210,
							2211
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17171,
					"arcs": [
						[
							2212,
							2213,
							2214
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26119,
					"arcs": [
						[
							2215,
							2216,
							2217,
							2218,
							-1302
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55039,
					"arcs": [
						[
							2219,
							-1121,
							2220,
							-926,
							2221,
							2222
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20165,
					"arcs": [
						[
							2223,
							2224,
							2225,
							-1970,
							2226
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17089,
					"arcs": [
						[
							-15,
							2227,
							2228,
							2229,
							2230
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38019,
					"arcs": [
						[
							2231,
							2232,
							2233,
							2234,
							2235
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18069,
					"arcs": [
						[
							2236,
							2237,
							2238,
							-497,
							2239
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20053,
					"arcs": [
						[
							2240,
							2241,
							2242,
							2243,
							2244,
							2245
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19087,
					"arcs": [
						[
							2246,
							2247,
							2248,
							2249,
							2250,
							2251
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19171,
					"arcs": [
						[
							2252,
							2253,
							-1776,
							-1945,
							-1803
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18011,
					"arcs": [
						[
							2254,
							-428,
							2255,
							2256,
							2257
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38047,
					"arcs": [
						[
							2258,
							2259,
							2260,
							2261,
							2262
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19173,
					"arcs": [
						[
							2263,
							-1158,
							2264,
							2265,
							2266
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6057,
					"arcs": [
						[
							-1689,
							2267,
							-1697,
							2268
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55115,
					"arcs": [
						[
							2269,
							-1044,
							2270,
							-1929,
							-1178,
							-409,
							-1856
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16049,
					"arcs": [
						[
							2271,
							-490,
							2272,
							2273,
							2274,
							-1145,
							-1767,
							2275,
							2276
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6089,
					"arcs": [
						[
							2277,
							-949,
							2278,
							2279,
							2280,
							2281
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46029,
					"arcs": [
						[
							-661,
							2282,
							-837,
							-1590,
							-1558
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55019,
					"arcs": [
						[
							2283,
							-1858,
							2284,
							2285,
							-270,
							2286
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20123,
					"arcs": [
						[
							2287,
							2288,
							2289,
							2290,
							2291
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20143,
					"arcs": [
						[
							2292,
							2293,
							2294,
							2295,
							2296,
							-2290
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27119,
					"arcs": [
						[
							2297,
							2298,
							2299,
							2300,
							2301,
							2302,
							2303,
							2304,
							2305
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20195,
					"arcs": [
						[
							2306,
							2307,
							2308,
							2309,
							2310
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5049,
					"arcs": [
						[
							2311,
							2312,
							2313,
							2314,
							2315,
							2316
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36049,
					"arcs": [
						[
							2317,
							2318,
							2319,
							2320,
							2321
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5141,
					"arcs": [
						[
							2322,
							2323,
							2324,
							2325,
							2326,
							-861
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51720,
					"arcs": [
						[
							2327
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29035,
					"arcs": [
						[
							-91,
							2328,
							2329,
							2330,
							2331,
							2332
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48267,
					"arcs": [
						[
							2333,
							-1076,
							-398,
							2334,
							2335,
							2336
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29067,
					"arcs": [
						[
							2337,
							2338,
							-1408,
							2339,
							2340,
							2341,
							2342
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48317,
					"arcs": [
						[
							-1920,
							2343,
							2344,
							-118,
							2345,
							2346
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29101,
					"arcs": [
						[
							2347,
							2348,
							2349,
							2350,
							2351
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48033,
					"arcs": [
						[
							2352,
							2353,
							2354,
							2355,
							2356,
							2357
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29083,
					"arcs": [
						[
							2358,
							-2351,
							2359,
							2360,
							2361,
							2362
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40031,
					"arcs": [
						[
							2363,
							2364,
							2365,
							-392,
							2366,
							2367
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48305,
					"arcs": [
						[
							2368,
							2369,
							-2353,
							2370,
							2371
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29153,
					"arcs": [
						[
							2372,
							-2341,
							2373,
							-2312,
							2374,
							-2
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8005,
					"arcs": [
						[
							2375,
							2376,
							-1730,
							2377,
							2378,
							2379,
							2380
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8101,
					"arcs": [
						[
							2381,
							2382,
							2383,
							2384,
							2385,
							2386,
							2387
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29187,
					"arcs": [
						[
							-1276,
							2388,
							2389,
							2390,
							2391,
							2392
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8061,
					"arcs": [
						[
							2393,
							2394,
							2395,
							2396,
							2397,
							2398,
							2399
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8119,
					"arcs": [
						[
							2400,
							2401,
							2402,
							2403,
							2404
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48259,
					"arcs": [
						[
							-396,
							2405,
							2406,
							2407,
							2408,
							2409
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48227,
					"arcs": [
						[
							-2357,
							2410,
							2411,
							-119,
							-2345
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29213,
					"arcs": [
						[
							2412,
							-2342,
							-2373,
							-1,
							2413,
							2414,
							2415
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20019,
					"arcs": [
						[
							2416,
							2417,
							2418,
							2419,
							2420
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1131,
					"arcs": [
						[
							2421,
							2422,
							2423,
							2424,
							2425,
							2426
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26073,
					"arcs": [
						[
							-2201,
							2427,
							2428,
							-352,
							-630
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31117,
					"arcs": [
						[
							-1267,
							2429,
							2430,
							2431,
							2432,
							2433
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48069,
					"arcs": [
						[
							2434,
							2435,
							2436,
							2437,
							2438,
							-40
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20075,
					"arcs": [
						[
							2439,
							2440,
							-417,
							2441,
							2442
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38033,
					"arcs": [
						[
							2443,
							-1021,
							2444,
							2445,
							2446
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19125,
					"arcs": [
						[
							2447,
							2448,
							2449,
							-938,
							2450,
							-1787
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20081,
					"arcs": [
						[
							2451,
							2452,
							2453,
							2454,
							-172,
							2455
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26015,
					"arcs": [
						[
							2456,
							-1492,
							-1477,
							2457,
							-1494,
							-308
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48435,
					"arcs": [
						[
							-1811,
							-2337,
							2458,
							2459,
							2460
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40093,
					"arcs": [
						[
							2461,
							-434,
							-1551,
							2462,
							-903,
							2463,
							2464
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48303,
					"arcs": [
						[
							2465,
							2466,
							-2369,
							2467
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30029,
					"arcs": [
						[
							2468,
							2469,
							2470,
							2471,
							-368,
							2472,
							2473,
							2474,
							-717,
							-318
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39099,
					"arcs": [
						[
							2475,
							2476,
							2477,
							2478,
							2479,
							2480
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48205,
					"arcs": [
						[
							2481,
							2482,
							-1826,
							2483,
							2484
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17073,
					"arcs": [
						[
							2485,
							2486,
							2487,
							-1771,
							2488,
							2489
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31093,
					"arcs": [
						[
							2490,
							2491,
							2492,
							-133,
							-518,
							2493
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48143,
					"arcs": [
						[
							-1036,
							2494,
							2495,
							2496,
							2497,
							-256,
							-1455
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51620,
					"arcs": [
						[
							2498,
							2499
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19191,
					"arcs": [
						[
							2500,
							2501,
							2502,
							2503,
							2504,
							2505
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46081,
					"arcs": [
						[
							2506,
							2507,
							2508,
							-200,
							2509
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2180,
					"arcs": [
						[
							[
								-1968,
								2510,
								-844,
								2511
							]
						],
						[
							[
								2512
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20193,
					"arcs": [
						[
							-1738,
							2513,
							2514,
							2515,
							2516,
							2517
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39011,
					"arcs": [
						[
							2518,
							2519,
							-1341,
							2520,
							2521,
							-966
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17117,
					"arcs": [
						[
							2522,
							2523,
							-879,
							2524,
							2525,
							2526
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27131,
					"arcs": [
						[
							2527,
							2528,
							2529,
							-511,
							-799,
							-83,
							2530
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42075,
					"arcs": [
						[
							2531,
							2532,
							2533,
							2534
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51570,
					"arcs": [
						[
							2535,
							2536
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20127,
					"arcs": [
						[
							2537,
							2538,
							-65,
							2539,
							2540,
							2541
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27085,
					"arcs": [
						[
							-1824,
							-1016,
							2542,
							2543,
							2544
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13149,
					"arcs": [
						[
							2545,
							-871,
							2546,
							2547
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28139,
					"arcs": [
						[
							2548,
							2549,
							2550,
							2551,
							2552
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33007,
					"arcs": [
						[
							2553,
							2554,
							2555,
							2556,
							-735
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47125,
					"arcs": [
						[
							2557,
							-1525,
							2558,
							2559,
							2560,
							-246,
							2561
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5129,
					"arcs": [
						[
							2562,
							-4,
							2563,
							2564,
							-2323,
							-860,
							2565
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13013,
					"arcs": [
						[
							2566,
							2567,
							2568,
							-1849
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19033,
					"arcs": [
						[
							-1490,
							-587,
							2569,
							2570,
							2571
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28127,
					"arcs": [
						[
							2572,
							-422,
							2573,
							2574,
							2575,
							2576
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38103,
					"arcs": [
						[
							2577,
							2578,
							2579,
							-1317,
							2580,
							2581,
							2582
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48031,
					"arcs": [
						[
							2583,
							2584,
							2585,
							2586,
							2587,
							-2406,
							-395
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55129,
					"arcs": [
						[
							2588,
							2589,
							2590,
							2591
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13177,
					"arcs": [
						[
							2592,
							2593,
							2594,
							2595,
							2596
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19081,
					"arcs": [
						[
							2597,
							-2572,
							2598,
							-581
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56031,
					"arcs": [
						[
							2599,
							2600,
							2601,
							2602,
							2603
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19035,
					"arcs": [
						[
							-1152,
							-1440,
							2604,
							2605,
							2606
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28103,
					"arcs": [
						[
							2607,
							2608,
							-2170,
							2609,
							2610,
							2611
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31109,
					"arcs": [
						[
							2612,
							2613,
							2614,
							2615,
							2616,
							2617,
							-556
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18047,
					"arcs": [
						[
							-214,
							-168,
							2618,
							2619,
							2620,
							-1003,
							2621
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36003,
					"arcs": [
						[
							2622,
							2623,
							2624,
							-723,
							2625,
							2626
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28085,
					"arcs": [
						[
							2627,
							2628,
							2629,
							2630,
							2631,
							2632,
							2633
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23029,
					"arcs": [
						[
							2634,
							2635,
							2636,
							-454
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17027,
					"arcs": [
						[
							2637,
							2638,
							-1529,
							2639,
							2640,
							2641
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39023,
					"arcs": [
						[
							2642,
							-104,
							2643,
							2644,
							2645
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8087,
					"arcs": [
						[
							2646,
							-1726,
							2647,
							2648
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20015,
					"arcs": [
						[
							-1480,
							2649,
							2650,
							-1446,
							2651,
							2652,
							2653
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18007,
					"arcs": [
						[
							-574,
							2654,
							2655,
							2656,
							2657,
							-2193,
							2658
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17107,
					"arcs": [
						[
							2659,
							-1723,
							-628,
							2660,
							2661,
							2662,
							2663
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55085,
					"arcs": [
						[
							2664,
							2665,
							2666,
							2667,
							-677
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37135,
					"arcs": [
						[
							2668,
							2669,
							-234,
							2670,
							2671
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48081,
					"arcs": [
						[
							2672,
							2673,
							-1785,
							-1989,
							2674
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40009,
					"arcs": [
						[
							2675,
							-1684,
							2676,
							2677,
							2678,
							2679,
							-1448,
							2680
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31033,
					"arcs": [
						[
							2681,
							-141,
							-1393,
							2682,
							2683,
							2684,
							2685
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19083,
					"arcs": [
						[
							2686,
							-1805,
							-1944,
							-1160,
							-1732
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27125,
					"arcs": [
						[
							2687,
							-2300
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28069,
					"arcs": [
						[
							2688,
							-2611,
							2689,
							-599,
							-2131
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39163,
					"arcs": [
						[
							2690,
							-37,
							2691,
							2692,
							2693,
							2694
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1083,
					"arcs": [
						[
							2695,
							2696,
							2697,
							2698,
							2699,
							2700
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20085,
					"arcs": [
						[
							-21,
							2701,
							2702,
							2703,
							2704,
							2705
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8025,
					"arcs": [
						[
							2706,
							-2400,
							2707,
							-2384
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20175,
					"arcs": [
						[
							-2455,
							2708,
							2709,
							2710,
							-173
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48111,
					"arcs": [
						[
							2711,
							2712,
							-2482,
							2713
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21109,
					"arcs": [
						[
							2714,
							2715,
							2716,
							2717,
							2718,
							2719,
							2720
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31035,
					"arcs": [
						[
							2721,
							2722,
							2723,
							2724,
							-605,
							2725
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51830,
					"arcs": [
						[
							2726,
							2727
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20067,
					"arcs": [
						[
							-416,
							-2456,
							-171,
							2728
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31111,
					"arcs": [
						[
							-2432,
							2729,
							2730,
							-798,
							-2188,
							2731,
							-1319,
							2732
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29095,
					"arcs": [
						[
							2733,
							2734,
							2735,
							2736,
							-2348,
							2737,
							2738
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16015,
					"arcs": [
						[
							-1769,
							2739,
							-1235,
							2740,
							2741
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21033,
					"arcs": [
						[
							2742,
							2743,
							2744,
							2745,
							2746,
							2747
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20069,
					"arcs": [
						[
							2748,
							2749,
							2750,
							-2453,
							2751
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17101,
					"arcs": [
						[
							2752,
							2753,
							2754,
							-1183
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27137,
					"arcs": [
						[
							2755,
							2756,
							2757,
							2758,
							2759,
							2760,
							2761,
							2762
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54069,
					"arcs": [
						[
							2763,
							2764,
							2765,
							2766,
							2767
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31023,
					"arcs": [
						[
							2768,
							2769,
							2770,
							2771,
							-2614,
							2772,
							2773
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20023,
					"arcs": [
						[
							2774,
							-1740,
							2775,
							-160,
							2776
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12027,
					"arcs": [
						[
							2777,
							-1994,
							2778,
							2779,
							2780
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48107,
					"arcs": [
						[
							2781,
							2782,
							2783,
							-2467
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19067,
					"arcs": [
						[
							-586,
							2784,
							2785,
							-2570
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48123,
					"arcs": [
						[
							2786,
							-1794,
							2787,
							2788,
							2789
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55027,
					"arcs": [
						[
							2790,
							2791,
							-2222,
							-930,
							-1081,
							2792,
							2793
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27065,
					"arcs": [
						[
							2794,
							2795,
							2796,
							-1872
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46061,
					"arcs": [
						[
							2797,
							-1064,
							2798,
							2799,
							2800
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51029,
					"arcs": [
						[
							2801,
							-408,
							-1635,
							2802,
							2803,
							2804
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29229,
					"arcs": [
						[
							-1282,
							-1409,
							-2339,
							2805
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18111,
					"arcs": [
						[
							2806,
							2807,
							-2655,
							-573,
							-1800
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19069,
					"arcs": [
						[
							-2571,
							2808,
							-2687,
							2809
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39135,
					"arcs": [
						[
							2810,
							2811,
							2812,
							2813,
							-166
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13273,
					"arcs": [
						[
							-1843,
							2814,
							-2596,
							2815,
							2816,
							2817
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29159,
					"arcs": [
						[
							-2350,
							2818,
							2819,
							-1223,
							2820,
							2821,
							-2360
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41065,
					"arcs": [
						[
							2822,
							2823,
							-194,
							-1984,
							2824,
							2825,
							2826,
							2827
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55053,
					"arcs": [
						[
							-271,
							-2286,
							2828,
							2829,
							2830,
							2831,
							2832
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29199,
					"arcs": [
						[
							-1704,
							2833,
							2834,
							2835,
							2836,
							2837
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13069,
					"arcs": [
						[
							-1957,
							2838,
							2839,
							2840,
							2841,
							2842,
							2843,
							2844
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26069,
					"arcs": [
						[
							2845,
							2846,
							2847,
							2848
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17199,
					"arcs": [
						[
							2849,
							-341,
							2850,
							2851,
							2852
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36093,
					"arcs": [
						[
							2853,
							2854,
							2855,
							2856
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1133,
					"arcs": [
						[
							2857,
							2858,
							2859,
							-2093,
							2860
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28079,
					"arcs": [
						[
							2861,
							2862,
							-2133,
							2863,
							2864
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46049,
					"arcs": [
						[
							2865,
							2866,
							2867,
							2868,
							2869,
							2870
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20105,
					"arcs": [
						[
							-2291,
							-2297,
							2871,
							-2241,
							2872,
							2873
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18183,
					"arcs": [
						[
							-1142,
							2874,
							-2237,
							2875,
							-1136
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6109,
					"arcs": [
						[
							2876,
							2877,
							2878,
							2879,
							2880,
							2881
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46085,
					"arcs": [
						[
							2882,
							2883,
							2884,
							2885,
							2886,
							2887,
							2888,
							2889,
							2890,
							2891
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 6083,
					"arcs": [
						[
							[
								2892
							]
						],
						[
							[
								2893
							]
						],
						[
							[
								2894
							]
						],
						[
							[
								-9,
								2895,
								2896,
								2897
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26095,
					"arcs": [
						[
							2898,
							2899,
							2900,
							2901,
							2902
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8011,
					"arcs": [
						[
							-2398,
							2903,
							2904,
							2905,
							2906
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29065,
					"arcs": [
						[
							2907,
							2908,
							2909,
							-89,
							-1406,
							2910
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48169,
					"arcs": [
						[
							-2784,
							2911,
							2912,
							-2354,
							-2370
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48417,
					"arcs": [
						[
							-923,
							2913,
							2914,
							-1453,
							2915,
							2916
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40051,
					"arcs": [
						[
							2917,
							2918,
							2919,
							-387,
							-2366,
							2920
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29077,
					"arcs": [
						[
							2921,
							-373,
							2922,
							2923,
							-1326,
							-894
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8009,
					"arcs": [
						[
							-2905,
							2924,
							2925,
							2926,
							2927,
							2928,
							2929
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12007,
					"arcs": [
						[
							2930,
							2931,
							2932,
							2933,
							2934
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19055,
					"arcs": [
						[
							2935,
							2936,
							-59,
							-1757,
							2937
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48137,
					"arcs": [
						[
							-2459,
							-2336,
							2938,
							2939,
							2940,
							2941,
							2942
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26101,
					"arcs": [
						[
							-178,
							-266,
							-1498,
							2943,
							2944
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17037,
					"arcs": [
						[
							2945,
							-16,
							-2231,
							2946,
							-689,
							2947,
							2948
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39113,
					"arcs": [
						[
							2949,
							2950,
							-2646,
							2951,
							-1996,
							2952,
							-2813
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48231,
					"arcs": [
						[
							2953,
							2954,
							2955,
							2956,
							2957,
							2958,
							2959,
							-1807
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31163,
					"arcs": [
						[
							2960,
							2961,
							-2494,
							-517,
							2962
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39109,
					"arcs": [
						[
							2963,
							-105,
							-2643,
							-2951,
							2964
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46043,
					"arcs": [
						[
							2965,
							2966,
							2967,
							2968
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18065,
					"arcs": [
						[
							2969,
							2970,
							2971,
							2972,
							-212,
							2973,
							-1053
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2013,
					"arcs": [
						[
							[
								2974
							]
						],
						[
							[
								2975
							]
						],
						[
							[
								2976
							]
						],
						[
							[
								2977
							]
						],
						[
							[
								2978
							]
						],
						[
							[
								2979,
								2980
							]
						],
						[
							[
								2981
							]
						],
						[
							[
								2982
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13059,
					"arcs": [
						[
							2983,
							2984,
							2985,
							2986
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18139,
					"arcs": [
						[
							-2974,
							-215,
							-2622,
							-1002,
							2987,
							-1054
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38043,
					"arcs": [
						[
							2988,
							-2582,
							2989,
							-2259,
							2990,
							2991
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48127,
					"arcs": [
						[
							2992,
							-1357,
							-403,
							2993,
							2994
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55025,
					"arcs": [
						[
							2995,
							2996,
							-2794,
							2997,
							2998,
							2999,
							3000
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4015,
					"arcs": [
						[
							3001,
							3002,
							3003,
							-290,
							3004,
							-153,
							-701,
							3005
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12033,
					"arcs": [
						[
							3006,
							3007,
							3008,
							-149
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16001,
					"arcs": [
						[
							3009,
							-2741,
							-1234,
							3010,
							3011
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38063,
					"arcs": [
						[
							3012,
							3013,
							-381,
							-1364,
							3014,
							3015,
							3016
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48445,
					"arcs": [
						[
							3017,
							-2372,
							3018,
							-1918,
							-2024
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17109,
					"arcs": [
						[
							3019,
							3020,
							3021,
							-1189,
							3022
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19181,
					"arcs": [
						[
							-1788,
							-2451,
							-937,
							3023,
							-1986
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31133,
					"arcs": [
						[
							3024,
							3025,
							3026,
							-18,
							3027,
							3028
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18075,
					"arcs": [
						[
							3029,
							3030,
							3031,
							-969,
							3032,
							3033,
							3034
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53051,
					"arcs": [
						[
							3035,
							3036,
							3037,
							3038,
							3039
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19031,
					"arcs": [
						[
							-1758,
							-63,
							3040,
							3041,
							3042,
							3043
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30107,
					"arcs": [
						[
							3044,
							3045,
							3046,
							3047,
							3048
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28107,
					"arcs": [
						[
							3049,
							-688,
							3050,
							3051,
							-2104,
							3052
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21191,
					"arcs": [
						[
							3053,
							3054,
							3055,
							3056,
							3057,
							3058
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48329,
					"arcs": [
						[
							3059,
							-2346,
							-122,
							3060,
							3061
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38013,
					"arcs": [
						[
							3062,
							3063,
							3064,
							3065,
							3066,
							3067
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46077,
					"arcs": [
						[
							-1560,
							-1592,
							3068,
							3069,
							-1061,
							3070,
							-1554
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5099,
					"arcs": [
						[
							3071,
							-622,
							3072,
							3073,
							3074,
							3075
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17095,
					"arcs": [
						[
							3076,
							-2489,
							-1775,
							3077,
							3078,
							3079
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40153,
					"arcs": [
						[
							3080,
							3081,
							-2465,
							3082,
							3083
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1093,
					"arcs": [
						[
							3084,
							3085,
							-2861,
							-2098,
							-1224,
							-2090,
							3086
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17007,
					"arcs": [
						[
							3087,
							-1938,
							-17,
							-2946,
							3088
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37181,
					"arcs": [
						[
							3089,
							3090,
							3091,
							3092
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 15009,
					"arcs": [
						[
							[
								3093
							]
						],
						[
							[
								3094
							]
						],
						[
							[
								3095
							]
						],
						[
							[
								3096,
								3097
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20065,
					"arcs": [
						[
							-825,
							3098,
							3099,
							-2307,
							3100,
							3101
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27141,
					"arcs": [
						[
							3102,
							-1874,
							3103,
							-763,
							3104,
							-1822,
							3105
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31059,
					"arcs": [
						[
							3106,
							-559,
							3107,
							3108,
							-2724
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48047,
					"arcs": [
						[
							-667,
							3109,
							3110,
							3111,
							3112,
							3113,
							3114
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48125,
					"arcs": [
						[
							-1834,
							-784,
							3115,
							-2783
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19099,
					"arcs": [
						[
							-1162,
							-1946,
							-1779,
							3116,
							-2448,
							-1786
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19123,
					"arcs": [
						[
							-3117,
							-1778,
							3117,
							-1168,
							3118,
							-2449
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19147,
					"arcs": [
						[
							3119,
							-583,
							3120,
							3121
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37195,
					"arcs": [
						[
							3122,
							3123,
							3124,
							3125,
							3126,
							3127
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47133,
					"arcs": [
						[
							3128,
							-975,
							3129,
							3130,
							3131
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27031,
					"arcs": [
						[
							3132,
							3133
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26143,
					"arcs": [
						[
							3134,
							3135,
							-2203,
							-2199,
							3136
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26113,
					"arcs": [
						[
							3137,
							-3137,
							-2198,
							3138,
							-263
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38069,
					"arcs": [
						[
							3139,
							3140,
							3141,
							3142,
							-2578,
							3143,
							3144
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48191,
					"arcs": [
						[
							3145,
							-1451,
							3146,
							3147,
							-1832,
							3148
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21071,
					"arcs": [
						[
							3149,
							3150,
							3151,
							3152,
							3153
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20017,
					"arcs": [
						[
							-2540,
							-70,
							-1441,
							-2651,
							3154
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35003,
					"arcs": [
						[
							3155,
							3156,
							-1133,
							3157,
							3158,
							3159
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21171,
					"arcs": [
						[
							3160,
							3161,
							3162,
							3163,
							3164,
							3165
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48075,
					"arcs": [
						[
							-1450,
							3166,
							3167,
							3168,
							-3147
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41047,
					"arcs": [
						[
							3169,
							3170,
							-2827,
							3171,
							-1086,
							3172
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1061,
					"arcs": [
						[
							-1718,
							3173,
							3174,
							3175,
							3176,
							3177,
							3178
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19007,
					"arcs": [
						[
							3179,
							-1706,
							3180,
							3181,
							-1057
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20083,
					"arcs": [
						[
							3182,
							-1974,
							3183,
							3184,
							-2749,
							3185
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48327,
					"arcs": [
						[
							3186,
							3187,
							-1077,
							-2334,
							-1810
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31161,
					"arcs": [
						[
							3188,
							3189,
							3190,
							-1388,
							-139,
							3191,
							-1262
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51810,
					"arcs": [
						[
							3192,
							3193,
							3194,
							3195
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18117,
					"arcs": [
						[
							3196,
							3197,
							3198,
							3199,
							-755
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29161,
					"arcs": [
						[
							-130,
							3200,
							3201,
							-2911,
							-1405,
							3202
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53007,
					"arcs": [
						[
							3203,
							3204,
							3205,
							3206,
							3207,
							3208
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19003,
					"arcs": [
						[
							3209,
							-1426,
							-1167,
							-2264,
							3210
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37169,
					"arcs": [
						[
							3211,
							3212,
							3213,
							-376,
							3214
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20047,
					"arcs": [
						[
							-3184,
							-1973,
							-1980,
							3215,
							3216,
							3217
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26079,
					"arcs": [
						[
							3218,
							3219,
							-3138,
							3220
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48483,
					"arcs": [
						[
							-46,
							3221,
							-2681,
							-1447,
							-942
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46003,
					"arcs": [
						[
							-1599,
							3222,
							3223,
							-2966,
							3224,
							3225
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28077,
					"arcs": [
						[
							3226,
							-2576,
							3227,
							3228,
							3229,
							-2629
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37001,
					"arcs": [
						[
							-1411,
							3230,
							3231,
							-2672,
							3232,
							3233
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48433,
					"arcs": [
						[
							-783,
							-925,
							3234,
							-813,
							3235
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48325,
					"arcs": [
						[
							3236,
							3237,
							-1072,
							-1356,
							3238
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46111,
					"arcs": [
						[
							-1555,
							-3071,
							-1065,
							-2798,
							3239,
							-3223,
							-1598
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30037,
					"arcs": [
						[
							-3047,
							3240,
							3241,
							3242,
							3243,
							3244
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19029,
					"arcs": [
						[
							3245,
							3246,
							-1427,
							-3210,
							3247,
							3248
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18141,
					"arcs": [
						[
							3249,
							3250,
							3251,
							-1127,
							3252,
							3253
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19093,
					"arcs": [
						[
							-2605,
							3254,
							-1691,
							3255
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48381,
					"arcs": [
						[
							-538,
							-564,
							3256,
							-2436,
							3257
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48421,
					"arcs": [
						[
							3258,
							3259,
							3260,
							3261,
							-2713
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31001,
					"arcs": [
						[
							-519,
							-136,
							3262,
							-2726,
							-604,
							3263
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56017,
					"arcs": [
						[
							-1658,
							3264,
							3265
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36009,
					"arcs": [
						[
							3266,
							3267,
							-2627,
							3268,
							-1396,
							3269
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27057,
					"arcs": [
						[
							3270,
							3271,
							-1512,
							-635,
							3272
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27037,
					"arcs": [
						[
							3273,
							3274,
							3275,
							3276,
							3277,
							-2529,
							3278
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48447,
					"arcs": [
						[
							-777,
							-1080,
							3279,
							-2914,
							-922
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42115,
					"arcs": [
						[
							3280,
							3281,
							3282,
							3283,
							3284,
							3285
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5043,
					"arcs": [
						[
							3286,
							3287,
							3288,
							3289,
							3290,
							3291
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29171,
					"arcs": [
						[
							-1058,
							-3182,
							3292,
							3293,
							3294,
							3295
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28091,
					"arcs": [
						[
							3296,
							-890,
							3297,
							3298,
							3299,
							-3229
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46045,
					"arcs": [
						[
							-2154,
							3300,
							-2866,
							3301,
							3302
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28057,
					"arcs": [
						[
							3303,
							-28,
							3304,
							-3085,
							3305,
							3306
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17079,
					"arcs": [
						[
							3307,
							3308,
							3309,
							3310,
							-1181,
							-1272
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38041,
					"arcs": [
						[
							-1964,
							3311,
							3312,
							3313
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55077,
					"arcs": [
						[
							3314,
							3315,
							3316,
							3317
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29093,
					"arcs": [
						[
							3318,
							-1277,
							-2393,
							3319,
							3320,
							3321,
							-2909
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48353,
					"arcs": [
						[
							-815,
							3322,
							-1780,
							-2674,
							3323
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48415,
					"arcs": [
						[
							-2913,
							3324,
							-816,
							3325,
							-2355
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48253,
					"arcs": [
						[
							-3235,
							-924,
							-2917,
							3326,
							3327,
							-814
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48335,
					"arcs": [
						[
							-2356,
							-3326,
							-3324,
							-2673,
							3328,
							-2411
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1059,
					"arcs": [
						[
							-27,
							3329,
							3330,
							-2858,
							-3086,
							-3305
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28035,
					"arcs": [
						[
							3331,
							3332,
							3333,
							3334,
							3335,
							-888
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16037,
					"arcs": [
						[
							-1149,
							3336,
							3337,
							-1236,
							-2740,
							-1768
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29023,
					"arcs": [
						[
							3338,
							3339,
							3340,
							3341,
							3342,
							-2331
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39057,
					"arcs": [
						[
							-2645,
							3343,
							3344,
							-2019,
							-1997,
							-2952
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38017,
					"arcs": [
						[
							-384,
							3345,
							3346,
							3347,
							3348,
							3349,
							-1360
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37069,
					"arcs": [
						[
							-3092,
							3350,
							3351,
							-1503,
							3352
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28101,
					"arcs": [
						[
							-2864,
							-2132,
							-602,
							-2148,
							3353
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35031,
					"arcs": [
						[
							3354,
							3355,
							3356,
							3357
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1069,
					"arcs": [
						[
							3358,
							3359,
							3360,
							3361,
							-3175,
							3362
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5017,
					"arcs": [
						[
							-3290,
							3363,
							3364,
							3365,
							3366,
							3367,
							3368,
							3369,
							3370
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 6111,
					"arcs": [
						[
							[
								3371
							]
						],
						[
							[
								-2897,
								3372,
								3373,
								3374
							]
						],
						[
							[
								3375
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8075,
					"arcs": [
						[
							3376,
							-2685,
							3377,
							3378,
							3379,
							-1727,
							-2647,
							3380
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46015,
					"arcs": [
						[
							3381,
							-1600,
							-3226,
							3382,
							-2886
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35006,
					"arcs": [
						[
							-3357,
							3383,
							3384,
							3385,
							-1128,
							-3157,
							3386
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17155,
					"arcs": [
						[
							-695,
							-2185,
							3387
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20199,
					"arcs": [
						[
							3388,
							3389,
							3390,
							3391,
							3392,
							-162
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20057,
					"arcs": [
						[
							-3185,
							-3218,
							3393,
							3394,
							3395,
							-2750
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42131,
					"arcs": [
						[
							3396,
							-3284,
							3397,
							3398,
							-1367
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38051,
					"arcs": [
						[
							-2262,
							3399,
							3400,
							-2151,
							3401,
							3402
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26109,
					"arcs": [
						[
							3403,
							3404,
							3405,
							3406,
							3407
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48193,
					"arcs": [
						[
							-257,
							-2498,
							3408,
							-250,
							-1028,
							3409
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51678,
					"arcs": [
						[
							3410
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21129,
					"arcs": [
						[
							3411,
							3412,
							3413,
							3414,
							3415,
							-2717
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26121,
					"arcs": [
						[
							-830,
							-1520,
							3416,
							3417,
							3418
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42103,
					"arcs": [
						[
							3419,
							3420,
							3421,
							3422,
							3423
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46053,
					"arcs": [
						[
							-2888,
							3424,
							3425,
							3426,
							3427
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46021,
					"arcs": [
						[
							3428,
							-3402,
							-2156,
							3429,
							3430
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48071,
					"arcs": [
						[
							3431,
							3432,
							3433,
							3434,
							3435,
							3436
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48201,
					"arcs": [
						[
							3437,
							3438,
							-3437,
							3439,
							3440,
							3441,
							3442,
							3443
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5077,
					"arcs": [
						[
							3444,
							3445,
							3446,
							3447,
							3448
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50005,
					"arcs": [
						[
							-329,
							-737,
							3449,
							3450,
							3451,
							3452
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51133,
					"arcs": [
						[
							3453,
							3454,
							3455,
							3456
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53005,
					"arcs": [
						[
							3457,
							3458,
							3459,
							3460,
							3461,
							3462,
							3463
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54059,
					"arcs": [
						[
							3464,
							3465,
							3466,
							3467,
							3468,
							3469,
							3470,
							3471
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55125,
					"arcs": [
						[
							3472,
							3473,
							3474,
							3475,
							-2665,
							-676
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1041,
					"arcs": [
						[
							3476,
							3477,
							3478,
							-1715,
							3479,
							3480
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5023,
					"arcs": [
						[
							3481,
							3482,
							3483,
							3484,
							-2325
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20151,
					"arcs": [
						[
							-1979,
							3485,
							-789,
							-705,
							3486,
							-3216
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12121,
					"arcs": [
						[
							3487,
							3488,
							3489,
							3490,
							3491
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13173,
					"arcs": [
						[
							3492,
							-1935,
							3493,
							3494,
							3495
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13303,
					"arcs": [
						[
							3496,
							3497,
							3498,
							3499,
							3500,
							3501
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13305,
					"arcs": [
						[
							3502,
							3503,
							3504,
							3505,
							3506,
							3507,
							3508
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16047,
					"arcs": [
						[
							3509,
							3510,
							3511,
							3512,
							-1239
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18125,
					"arcs": [
						[
							3513,
							3514,
							3515,
							3516,
							3517
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21073,
					"arcs": [
						[
							3518,
							3519,
							3520,
							3521,
							3522,
							3523
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21143,
					"arcs": [
						[
							3524,
							-2747,
							3525,
							-933,
							3526
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21201,
					"arcs": [
						[
							3527,
							3528,
							3529,
							3530,
							3531
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12023,
					"arcs": [
						[
							-3490,
							3532,
							3533,
							-1933,
							3534,
							3535,
							3536,
							3537
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16009,
					"arcs": [
						[
							3538,
							3539,
							3540,
							3541,
							3542
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13299,
					"arcs": [
						[
							-2843,
							3543,
							3544,
							3545,
							3546,
							3547,
							-1931,
							3548
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13099,
					"arcs": [
						[
							3549,
							-820,
							3550,
							-2143,
							3551,
							3552,
							-3360
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18029,
					"arcs": [
						[
							3553,
							-2620,
							3554,
							3555,
							3556
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18091,
					"arcs": [
						[
							3557,
							3558,
							-3254,
							3559,
							3560
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19053,
					"arcs": [
						[
							3561,
							-1060,
							3562,
							3563,
							-1155
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20091,
					"arcs": [
						[
							3564,
							3565,
							-2739,
							3566,
							3567,
							3568
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20037,
					"arcs": [
						[
							3569,
							-715,
							3570,
							3571,
							3572,
							3573,
							3574
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22067,
					"arcs": [
						[
							3575,
							-3370,
							3576,
							3577,
							3578,
							3579
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22027,
					"arcs": [
						[
							3580,
							3581,
							3582,
							3583,
							3584,
							3585
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 23027,
					"arcs": [
						[
							[
								3586
							]
						],
						[
							[
								3587,
								3588,
								-458,
								3589,
								3590,
								3591,
								3592
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29145,
					"arcs": [
						[
							3593,
							3594,
							-1330,
							-1630,
							3595,
							3596
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29227,
					"arcs": [
						[
							-2265,
							-1157,
							3597,
							3598,
							3599
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30101,
					"arcs": [
						[
							3600,
							3601,
							3602,
							3603
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30057,
					"arcs": [
						[
							3604,
							3605,
							3606,
							3607,
							-183
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35023,
					"arcs": [
						[
							3608,
							3609,
							3610,
							3611,
							3612
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36101,
					"arcs": [
						[
							3613,
							3614,
							-542,
							3615,
							3616,
							-1379,
							-724,
							-2625
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37039,
					"arcs": [
						[
							3617,
							3618,
							3619,
							3620,
							3621,
							-446,
							3622
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38097,
					"arcs": [
						[
							3623,
							-2305,
							3624,
							-3346,
							-383
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38029,
					"arcs": [
						[
							3625,
							-2991,
							-2263,
							-3403,
							-3429,
							3626,
							3627,
							3628
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40147,
					"arcs": [
						[
							-2419,
							3629,
							3630,
							3631,
							-2057,
							3632
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21097,
					"arcs": [
						[
							3633,
							-3058,
							3634,
							-3532,
							3635,
							3636,
							3637
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21069,
					"arcs": [
						[
							3638,
							3639,
							3640,
							3641,
							3642,
							-3530
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22069,
					"arcs": [
						[
							3643,
							3644,
							3645,
							3646,
							3647,
							3648,
							3649,
							3650
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39143,
					"arcs": [
						[
							-325,
							3651,
							3652,
							3653,
							3654
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28137,
					"arcs": [
						[
							3655,
							3656,
							-682,
							-3050,
							3657
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28049,
					"arcs": [
						[
							3658,
							3659,
							3660,
							3661,
							3662,
							3663
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31077,
					"arcs": [
						[
							3664,
							3665,
							3666,
							-2491,
							-2962,
							3667
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31121,
					"arcs": [
						[
							3668,
							3669,
							3670,
							3671,
							-134,
							-2493
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31125,
					"arcs": [
						[
							3672,
							3673,
							-3669,
							-2492,
							-3667
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34027,
					"arcs": [
						[
							3674,
							3675,
							3676,
							3677,
							3678,
							3679,
							3680
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35051,
					"arcs": [
						[
							-1132,
							3681,
							3682,
							3683,
							3684,
							3685,
							-3158
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36067,
					"arcs": [
						[
							3686,
							3687,
							-2036,
							3688
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37065,
					"arcs": [
						[
							3689,
							3690,
							3691,
							-3123,
							3692
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37105,
					"arcs": [
						[
							3693,
							3694,
							3695
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39019,
					"arcs": [
						[
							3696,
							3697,
							3698,
							3699,
							3700
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40073,
					"arcs": [
						[
							-2463,
							-1550,
							3701,
							3702,
							-904
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42067,
					"arcs": [
						[
							3703,
							3704,
							3705,
							3706,
							3707,
							3708
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47085,
					"arcs": [
						[
							-248,
							3709,
							-1900,
							3710,
							3711
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47145,
					"arcs": [
						[
							3712,
							3713,
							3714,
							3715,
							3716,
							3717,
							3718,
							-1174
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27089,
					"arcs": [
						[
							3719,
							3720,
							3721,
							3722,
							-2298,
							3723,
							3724,
							3725
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41061,
					"arcs": [
						[
							3726,
							3727,
							3728,
							3729
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55109,
					"arcs": [
						[
							3730,
							-1648,
							3731,
							3732
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48323,
					"arcs": [
						[
							3733,
							3734,
							-2995,
							3735,
							3736
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39055,
					"arcs": [
						[
							3737,
							3738,
							3739,
							3740,
							3741
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40015,
					"arcs": [
						[
							-1682,
							-906,
							3742,
							-2921,
							-2365,
							3743,
							3744
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4023,
					"arcs": [
						[
							3745,
							3746,
							3747
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1039,
					"arcs": [
						[
							3748,
							-3480,
							-1719,
							-3179,
							3749,
							3750,
							3751,
							3752
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6085,
					"arcs": [
						[
							3753,
							3754,
							3755,
							3756,
							-1667,
							3757,
							3758
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6093,
					"arcs": [
						[
							-1231,
							3759,
							3760,
							-950,
							-2278,
							3761,
							3762,
							3763
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8077,
					"arcs": [
						[
							-570,
							3764,
							3765,
							3766,
							3767,
							3768
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8081,
					"arcs": [
						[
							3769,
							3770,
							3771,
							3772,
							3773,
							3774
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8021,
					"arcs": [
						[
							-1763,
							3775,
							3776,
							3777,
							3778,
							3779
						]
					]
				},
				{
					"type": "Polygon",
					"id": 9015,
					"arcs": [
						[
							3780,
							3781,
							-478,
							3782,
							3783
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12063,
					"arcs": [
						[
							-3176,
							-3362,
							3784,
							3785,
							3786,
							3787,
							3788,
							3789,
							3790
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13145,
					"arcs": [
						[
							3791,
							3792,
							3793,
							3794,
							3795,
							-1712
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16071,
					"arcs": [
						[
							3796,
							3797,
							3798,
							3799,
							3800,
							3801
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17077,
					"arcs": [
						[
							3802,
							3803,
							-2853,
							3804,
							3805,
							3806
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51019,
					"arcs": [
						[
							3807,
							3808,
							3809,
							-2075,
							3810,
							3811,
							3812,
							3813
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48429,
					"arcs": [
						[
							-3280,
							-1079,
							-1038,
							-1454,
							-2915
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48299,
					"arcs": [
						[
							3814,
							3815,
							-2584,
							-394,
							-1075
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51079,
					"arcs": [
						[
							3816,
							3817,
							3818,
							3819,
							3820
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54085,
					"arcs": [
						[
							3821,
							3822,
							3823,
							3824,
							3825,
							3826,
							3827
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13017,
					"arcs": [
						[
							3828,
							3829,
							-2839,
							-1956,
							3830
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48409,
					"arcs": [
						[
							3831,
							3832,
							3833,
							3834,
							3835,
							3836,
							3837
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48039,
					"arcs": [
						[
							3838,
							3839,
							-3442,
							3840,
							3841,
							3842,
							3843,
							3844
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48277,
					"arcs": [
						[
							3845,
							3846,
							3847,
							3848,
							3849
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54095,
					"arcs": [
						[
							3850,
							3851,
							3852,
							-3824,
							3853,
							3854
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55059,
					"arcs": [
						[
							-992,
							3855,
							3856,
							-12,
							-1937
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1055,
					"arcs": [
						[
							3857,
							3858,
							3859,
							3860,
							3861,
							3862
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1121,
					"arcs": [
						[
							3863,
							3864,
							3865,
							3866,
							3867,
							3868
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5105,
					"arcs": [
						[
							3869,
							3870,
							3871,
							3872,
							3873,
							3874
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6009,
					"arcs": [
						[
							3875,
							-2882,
							3876,
							3877,
							3878
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21193,
					"arcs": [
						[
							3879,
							3880,
							3881,
							3882,
							3883,
							3884,
							3885
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13319,
					"arcs": [
						[
							3886,
							-3501,
							3887,
							3888,
							3889,
							3890
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13019,
					"arcs": [
						[
							3891,
							-1958,
							-2845,
							3892,
							-3496,
							3893,
							3894
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13301,
					"arcs": [
						[
							3895,
							3896,
							3897,
							3898,
							3899,
							3900
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13317,
					"arcs": [
						[
							3901,
							3902,
							3903,
							-3896,
							3904,
							3905
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13205,
					"arcs": [
						[
							3906,
							3907,
							3908,
							3909,
							-2157,
							3910,
							-2140
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20179,
					"arcs": [
						[
							3911,
							-826,
							-3102,
							3912,
							-2515
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20027,
					"arcs": [
						[
							3913,
							3914,
							3915,
							3916,
							3917,
							-2294
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20059,
					"arcs": [
						[
							3918,
							3919,
							3920,
							-1679,
							3921
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21211,
					"arcs": [
						[
							3922,
							-3524,
							3923,
							3924,
							3925,
							3926
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21177,
					"arcs": [
						[
							3927,
							3928,
							3929,
							3930,
							-1522,
							3931,
							3932
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21153,
					"arcs": [
						[
							3933,
							-3154,
							3934,
							3935,
							3936,
							3937
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22089,
					"arcs": [
						[
							3938,
							3939,
							3940
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28015,
					"arcs": [
						[
							-226,
							-2102,
							3941,
							3942,
							3943
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18083,
					"arcs": [
						[
							-2754,
							3944,
							3945,
							3946,
							3947,
							-3514,
							3948,
							3949
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18087,
					"arcs": [
						[
							3950,
							3951,
							3952,
							-1139,
							3953
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21225,
					"arcs": [
						[
							3954,
							3955,
							3956,
							3957,
							3958,
							3959
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22085,
					"arcs": [
						[
							3960,
							-3651,
							3961,
							3962,
							3963,
							3964
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22013,
					"arcs": [
						[
							3965,
							-3585,
							3966,
							3967,
							3968,
							-3646,
							3969,
							3970
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24031,
					"arcs": [
						[
							3971,
							3972,
							3973,
							3974,
							3975,
							3976
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 25007,
					"arcs": [
						[
							[
								3977
							]
						],
						[
							[
								3978,
								3979
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26115,
					"arcs": [
						[
							3980,
							3981,
							3982,
							3983,
							-546
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28063,
					"arcs": [
						[
							3984,
							3985,
							-2634,
							3986,
							3987,
							3988
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29047,
					"arcs": [
						[
							3989,
							-2121,
							3990,
							-2735,
							3991
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29129,
					"arcs": [
						[
							-3563,
							-1059,
							-3296,
							3992,
							-1896,
							3993
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30063,
					"arcs": [
						[
							-719,
							3994,
							-2474,
							3995,
							3996,
							3997,
							-2274,
							3998,
							3999
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31127,
					"arcs": [
						[
							4000,
							4001,
							4002,
							4003,
							-3026,
							4004
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34009,
					"arcs": [
						[
							4005,
							4006,
							4007
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36005,
					"arcs": [
						[
							4008,
							4009,
							4010,
							4011,
							4012
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37075,
					"arcs": [
						[
							4013,
							4014,
							4015,
							-3619,
							4016
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40035,
					"arcs": [
						[
							4017,
							4018,
							4019,
							4020,
							4021,
							4022,
							4023
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40033,
					"arcs": [
						[
							-2367,
							-391,
							4024,
							4025,
							4026,
							4027
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41037,
					"arcs": [
						[
							4028,
							4029,
							4030,
							-946,
							4031
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46083,
					"arcs": [
						[
							4032,
							4033,
							4034,
							4035,
							4036,
							-525
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47163,
					"arcs": [
						[
							4037,
							4038,
							-1402,
							4039,
							4040,
							4041,
							4042,
							4043
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47055,
					"arcs": [
						[
							4044,
							4045,
							4046,
							-2696,
							4047,
							4048
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28135,
					"arcs": [
						[
							4049,
							-2105,
							-3052,
							4050,
							-221,
							4051,
							4052
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30015,
					"arcs": [
						[
							4053,
							4054,
							4055,
							4056,
							4057,
							4058,
							4059,
							4060
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31113,
					"arcs": [
						[
							4061,
							-232,
							4062,
							-2730,
							-2431
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 35043,
					"arcs": [
						[
							[
								4063,
								4064
							]
						],
						[
							[
								4065,
								4066,
								4067,
								4068,
								-3384,
								-3356,
								4069
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37107,
					"arcs": [
						[
							4070,
							4071,
							4072,
							4073,
							4074,
							4075
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37083,
					"arcs": [
						[
							4076,
							4077,
							4078,
							4079,
							-3690,
							4080
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39101,
					"arcs": [
						[
							-2009,
							4081,
							4082,
							4083,
							-898,
							-1339
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40005,
					"arcs": [
						[
							4084,
							4085,
							-2084,
							4086,
							4087,
							4088
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40027,
					"arcs": [
						[
							-283,
							4089,
							4090,
							4091
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40133,
					"arcs": [
						[
							-774,
							4092,
							4093,
							4094
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42079,
					"arcs": [
						[
							-1368,
							-3399,
							4095,
							4096,
							4097,
							4098,
							4099
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42109,
					"arcs": [
						[
							4100,
							4101,
							-3704,
							4102
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45063,
					"arcs": [
						[
							4103,
							4104,
							4105,
							4106,
							4107,
							4108
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47039,
					"arcs": [
						[
							-912,
							4109,
							4110,
							4111,
							4112,
							-1593
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48425,
					"arcs": [
						[
							4113,
							4114,
							4115,
							-2496
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48255,
					"arcs": [
						[
							4116,
							4117,
							-2790,
							4118,
							4119,
							4120,
							-1068
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48459,
					"arcs": [
						[
							4121,
							-2047,
							4122,
							4123,
							4124,
							4125,
							4126
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48297,
					"arcs": [
						[
							-1069,
							-4121,
							4127,
							-3838,
							4128,
							-665,
							4129
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53001,
					"arcs": [
						[
							4130,
							4131,
							4132,
							4133
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54041,
					"arcs": [
						[
							4134,
							-2118,
							4135,
							-2125,
							4136,
							4137
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46093,
					"arcs": [
						[
							4138,
							4139,
							4140,
							4141,
							4142,
							-2508
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47027,
					"arcs": [
						[
							-3164,
							4143,
							4144,
							-970,
							-3129,
							4145,
							4146
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40123,
					"arcs": [
						[
							4147,
							4148,
							-4094,
							4149,
							4150,
							4151,
							-2077,
							4152
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1071,
					"arcs": [
						[
							4153,
							4154,
							4155,
							4156,
							4157,
							4158
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 6075,
					"arcs": [
						[
							[
								4159,
								4160
							]
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2110,
					"arcs": [
						[
							[
								4161,
								-1584
							]
						],
						[
							[
								4162,
								4163,
								-1579,
								4164,
								-1582,
								4165
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12129,
					"arcs": [
						[
							4166,
							4167,
							4168,
							4169,
							4170
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16055,
					"arcs": [
						[
							4171,
							4172,
							-3539,
							4173
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17161,
					"arcs": [
						[
							4174,
							4175,
							4176,
							4177,
							-2486,
							4178,
							4179
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18177,
					"arcs": [
						[
							4180,
							4181,
							-2811,
							-165,
							-213,
							-2973
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19129,
					"arcs": [
						[
							4182,
							4183,
							4184,
							4185,
							4186
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21111,
					"arcs": [
						[
							4187,
							4188,
							4189,
							-3926,
							4190,
							-955,
							4191
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22019,
					"arcs": [
						[
							4192,
							4193,
							4194,
							4195,
							4196
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23017,
					"arcs": [
						[
							4197,
							-1208,
							4198,
							4199,
							4200,
							-2555,
							4201
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26099,
					"arcs": [
						[
							4202,
							4203,
							4204,
							4205,
							4206
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26003,
					"arcs": [
						[
							4207,
							-2899,
							4208,
							4209,
							4210
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28109,
					"arcs": [
						[
							4211,
							-3298,
							-889,
							-3336,
							4212,
							4213,
							4214
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28153,
					"arcs": [
						[
							-2149,
							-314,
							4215,
							4216,
							4217,
							4218,
							4219
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31055,
					"arcs": [
						[
							4220,
							4221,
							4222,
							4223,
							4224
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28155,
					"arcs": [
						[
							-2146,
							4225,
							4226,
							4227,
							4228,
							-2099,
							-224
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13265,
					"arcs": [
						[
							4229,
							-3905,
							-3901,
							4230,
							4231
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21083,
					"arcs": [
						[
							4232,
							4233,
							-936,
							-1565,
							4234,
							4235,
							4236
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29186,
					"arcs": [
						[
							4237,
							4238,
							4239,
							4240,
							-2390
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26017,
					"arcs": [
						[
							-2206,
							4241,
							4242,
							4243,
							4244,
							4245
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42085,
					"arcs": [
						[
							4246,
							4247,
							4248,
							4249,
							-2478,
							4250
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51630,
					"arcs": [
						[
							-2180,
							4251
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20055,
					"arcs": [
						[
							-74,
							-350,
							4252,
							-3186,
							-2752,
							-2452,
							-415
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21155,
					"arcs": [
						[
							4253,
							4254,
							4255,
							4256,
							4257,
							4258
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22039,
					"arcs": [
						[
							-79,
							4259,
							4260,
							4261,
							4262,
							4263
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23021,
					"arcs": [
						[
							4264,
							4265,
							4266
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29043,
					"arcs": [
						[
							-2924,
							4267,
							-2343,
							-2413,
							4268,
							-1327
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29205,
					"arcs": [
						[
							4269,
							4270,
							4271,
							4272,
							-1286
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30007,
					"arcs": [
						[
							-365,
							4273,
							4274,
							4275
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31149,
					"arcs": [
						[
							4276,
							4277,
							4278,
							4279
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27127,
					"arcs": [
						[
							4280,
							4281,
							4282,
							4283,
							4284,
							4285
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28029,
					"arcs": [
						[
							4286,
							-3662,
							-2577,
							-3227,
							-2628,
							-3986
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8019,
					"arcs": [
						[
							4287,
							4288,
							4289,
							4290,
							4291
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36069,
					"arcs": [
						[
							4292,
							4293,
							4294,
							-543,
							-3615,
							4295
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37197,
					"arcs": [
						[
							4296,
							-380,
							4297,
							4298,
							4299
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38071,
					"arcs": [
						[
							4300,
							-2235,
							4301,
							-3017,
							4302
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40029,
					"arcs": [
						[
							-4151,
							4303,
							4304,
							-4085,
							4305
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41071,
					"arcs": [
						[
							4306,
							4307,
							-3170,
							4308,
							4309
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47075,
					"arcs": [
						[
							-1245,
							4310,
							4311,
							4312,
							4313,
							4314
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48439,
					"arcs": [
						[
							4315,
							-1486,
							-117,
							-1331,
							4316,
							-1753
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48311,
					"arcs": [
						[
							-1070,
							-4130,
							-664,
							-401
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48089,
					"arcs": [
						[
							4317,
							-1569,
							4318,
							4319,
							-1791
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48217,
					"arcs": [
						[
							4320,
							-1335,
							4321,
							-1911,
							4322,
							4323
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51113,
					"arcs": [
						[
							4324,
							4325,
							4326,
							-3818,
							4327
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51173,
					"arcs": [
						[
							4328,
							4329,
							4330,
							4331,
							4332,
							4333
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51600,
					"arcs": [
						[
							4334
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55139,
					"arcs": [
						[
							-411,
							-1180,
							-1122,
							-2220,
							4335,
							4336
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13267,
					"arcs": [
						[
							4337,
							4338,
							4339,
							4340,
							-3503,
							4341,
							4342
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29167,
					"arcs": [
						[
							4343,
							-1610,
							-374,
							-2922,
							-893,
							4344
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26139,
					"arcs": [
						[
							-3418,
							4345,
							-306,
							4346
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19039,
					"arcs": [
						[
							-1987,
							-3024,
							-941,
							-3562,
							-1166
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27157,
					"arcs": [
						[
							4347,
							4348,
							4349,
							-1818,
							4350
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40089,
					"arcs": [
						[
							-2082,
							4351,
							4352,
							4353,
							4354,
							4355,
							4356,
							4357
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51057,
					"arcs": [
						[
							4358,
							4359,
							4360,
							4361,
							4362,
							4363,
							4364
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36053,
					"arcs": [
						[
							4365,
							4366,
							4367,
							-2037,
							-3688,
							4368
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34025,
					"arcs": [
						[
							4369,
							4370,
							4371,
							4372,
							4373
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35013,
					"arcs": [
						[
							4374,
							4375,
							4376,
							4377,
							-3684
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37015,
					"arcs": [
						[
							-4079,
							4378,
							4379,
							4380,
							4381,
							4382
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37013,
					"arcs": [
						[
							4383,
							4384,
							4385,
							4386,
							4387,
							4388,
							4389
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37009,
					"arcs": [
						[
							4390,
							4391,
							4392,
							4393,
							4394
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6113,
					"arcs": [
						[
							4395,
							4396,
							4397,
							4398,
							4399,
							4400
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39007,
					"arcs": [
						[
							4401,
							4402,
							4403,
							4404,
							-3739,
							4405
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42089,
					"arcs": [
						[
							-4097,
							4406,
							4407,
							-3423,
							4408,
							4409,
							4410,
							4411
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45069,
					"arcs": [
						[
							4412,
							-963,
							4413,
							4414,
							4415,
							4416,
							4417
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46121,
					"arcs": [
						[
							4418,
							4419,
							4420,
							4421
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46031,
					"arcs": [
						[
							4422,
							4423,
							-3627,
							-3431,
							4424,
							4425,
							4426,
							4427
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48097,
					"arcs": [
						[
							4428,
							4429,
							-1483,
							4430,
							4431
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49001,
					"arcs": [
						[
							4432,
							4433,
							4434,
							4435,
							-1602,
							4436
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51095,
					"arcs": [
						[
							4437,
							4438,
							4439,
							4440,
							-2728,
							4441,
							-195,
							4442,
							4443
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53013,
					"arcs": [
						[
							4444,
							4445,
							-619,
							4446,
							4447,
							4448
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55041,
					"arcs": [
						[
							4449,
							4450,
							4451,
							4452,
							4453,
							-2666,
							-3476
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56011,
					"arcs": [
						[
							4454,
							4455,
							4456,
							-2510,
							-199,
							-855
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5125,
					"arcs": [
						[
							4457,
							-1383,
							-207,
							4458,
							-3873
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8003,
					"arcs": [
						[
							-1762,
							4459,
							4460,
							4461,
							-3776
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12041,
					"arcs": [
						[
							4462,
							-3491,
							-3538,
							4463,
							4464,
							4465
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12077,
					"arcs": [
						[
							4466,
							4467,
							4468,
							-4171,
							4469,
							4470
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13283,
					"arcs": [
						[
							4471,
							4472,
							4473,
							4474
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13151,
					"arcs": [
						[
							4475,
							4476,
							4477,
							-1046,
							4478,
							4479
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16063,
					"arcs": [
						[
							4480,
							4481,
							-492,
							4482,
							-3511
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17065,
					"arcs": [
						[
							4483,
							4484,
							4485,
							4486,
							-337,
							4487
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18145,
					"arcs": [
						[
							4488,
							-1055,
							-2988,
							-1001,
							4489,
							4490
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19165,
					"arcs": [
						[
							-1693,
							4491,
							-3246,
							4492,
							4493
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20097,
					"arcs": [
						[
							-3217,
							-3487,
							-709,
							-589,
							4494,
							-3394
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54071,
					"arcs": [
						[
							4495,
							4496,
							4497,
							4498,
							4499,
							4500,
							-850
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37185,
					"arcs": [
						[
							4501,
							4502,
							4503,
							-4077,
							-3351,
							-3091
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48455,
					"arcs": [
						[
							4504,
							4505,
							4506,
							4507,
							4508
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38075,
					"arcs": [
						[
							-3064,
							4509,
							4510,
							4511,
							4512
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48505,
					"arcs": [
						[
							4513,
							4514,
							4515,
							4516
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1023,
					"arcs": [
						[
							-313,
							-601,
							4517,
							4518,
							4519,
							4520,
							-4216
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1113,
					"arcs": [
						[
							4521,
							4522,
							4523,
							4524,
							4525,
							4526,
							4527
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5005,
					"arcs": [
						[
							-2375,
							-2317,
							4528,
							4529,
							-2564,
							-3
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8113,
					"arcs": [
						[
							4530,
							4531,
							4532,
							4533,
							-1112
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13087,
					"arcs": [
						[
							4534,
							4535,
							-2141,
							-3911,
							-2161,
							4536,
							-3786
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17177,
					"arcs": [
						[
							4537,
							4538,
							4539,
							4540,
							4541,
							4542
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19163,
					"arcs": [
						[
							4543,
							-4176,
							4544,
							-3042
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20021,
					"arcs": [
						[
							-3573,
							4545,
							-3594,
							4546,
							-4019,
							4547
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29189,
					"arcs": [
						[
							4548,
							4549,
							4550,
							4551,
							4552,
							4553,
							-1249
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29201,
					"arcs": [
						[
							4554,
							4555,
							4556,
							4557,
							4558
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29069,
					"arcs": [
						[
							4559,
							4560,
							-3341,
							4561,
							4562,
							4563,
							4564,
							4565
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31051,
					"arcs": [
						[
							4566,
							4567,
							4568,
							4569,
							4570,
							4571
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33019,
					"arcs": [
						[
							4572,
							4573,
							4574,
							4575,
							4576,
							4577
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33017,
					"arcs": [
						[
							-1306,
							4578,
							4579,
							4580,
							4581
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35009,
					"arcs": [
						[
							4582,
							4583,
							-38,
							4584,
							4585
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35039,
					"arcs": [
						[
							4586,
							-3779,
							4587,
							4588,
							4589,
							4590,
							-4066,
							4591
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36073,
					"arcs": [
						[
							4592,
							4593,
							4594,
							4595
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37139,
					"arcs": [
						[
							4596,
							4597,
							4598,
							4599
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38087,
					"arcs": [
						[
							-2445,
							-1020,
							-1965,
							-3314,
							4600,
							4601,
							4602
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40139,
					"arcs": [
						[
							4603,
							-174,
							-2711,
							4604,
							4605,
							4606,
							-3260,
							4607
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41049,
					"arcs": [
						[
							4608,
							-3462,
							4609,
							4610,
							4611,
							-1982
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41063,
					"arcs": [
						[
							-4447,
							-618,
							4612,
							4613,
							-2277,
							4614,
							4615,
							-3727,
							4616
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42071,
					"arcs": [
						[
							-2534,
							4617,
							4618,
							4619,
							4620,
							4621,
							4622
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47047,
					"arcs": [
						[
							4623,
							-4313,
							4624,
							4625,
							4626,
							4627
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47155,
					"arcs": [
						[
							4628,
							4629,
							4630,
							4631,
							4632,
							4633
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48357,
					"arcs": [
						[
							-4606,
							4634,
							4635,
							-917,
							4636
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48295,
					"arcs": [
						[
							4637,
							4638,
							-43,
							-918,
							-4636
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48465,
					"arcs": [
						[
							4639,
							-2460,
							-2943,
							4640,
							4641,
							4642
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21039,
					"arcs": [
						[
							4643,
							4644,
							-4233,
							4645,
							4646
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21117,
					"arcs": [
						[
							4647,
							-3054,
							4648,
							4649,
							4650
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22011,
					"arcs": [
						[
							4651,
							-81,
							4652,
							-4193,
							4653
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25011,
					"arcs": [
						[
							4654,
							4655,
							4656,
							4657,
							4658,
							4659
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26047,
					"arcs": [
						[
							4660,
							4661,
							4662
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27077,
					"arcs": [
						[
							4663,
							4664,
							4665,
							4666
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51121,
					"arcs": [
						[
							4667,
							4668,
							4669,
							4670,
							4671,
							-2111,
							4672
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51161,
					"arcs": [
						[
							4673,
							4674,
							-3814,
							4675,
							4676,
							-4670
						],
						[
							4677,
							-268
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54007,
					"arcs": [
						[
							4678,
							-4137,
							-2124,
							4679,
							4680,
							4681
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56009,
					"arcs": [
						[
							4682,
							-856,
							-204,
							4683,
							-2604,
							4684,
							4685,
							-1651
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36037,
					"arcs": [
						[
							-4595,
							4686,
							4687,
							4688,
							4689,
							4690
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21045,
					"arcs": [
						[
							-4257,
							4691,
							4692,
							4693,
							-1098,
							4694,
							4695
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21115,
					"arcs": [
						[
							4696,
							4697,
							-3150,
							-3934,
							4698
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13225,
					"arcs": [
						[
							4699,
							4700,
							4701,
							4702,
							4703
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21009,
					"arcs": [
						[
							4704,
							4705,
							4706,
							4707,
							-3161,
							4708
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29011,
					"arcs": [
						[
							-714,
							4709,
							-891,
							4710,
							-3571
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18137,
					"arcs": [
						[
							-1004,
							-2621,
							-3554,
							4711,
							4712,
							4713,
							4714
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18077,
					"arcs": [
						[
							-4714,
							4715,
							4716,
							4717,
							4718,
							4719,
							4720
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19101,
					"arcs": [
						[
							4721,
							4722,
							-2247,
							4723,
							-1170
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19107,
					"arcs": [
						[
							-1777,
							-1010,
							4724,
							-4722,
							-1169,
							-3118
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46099,
					"arcs": [
						[
							4725,
							4726,
							-463,
							4727,
							-4033,
							-524,
							4728
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47107,
					"arcs": [
						[
							-3718,
							4729,
							4730,
							4731,
							4732,
							4733
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56001,
					"arcs": [
						[
							-4685,
							-2603,
							4734,
							4735,
							4736,
							4737
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38011,
					"arcs": [
						[
							-4602,
							4738,
							4739,
							4740
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40105,
					"arcs": [
						[
							4741,
							4742,
							-4024,
							4743,
							-3631
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54025,
					"arcs": [
						[
							4744,
							-2128,
							-853,
							4745,
							4746,
							4747,
							4748,
							4749
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54099,
					"arcs": [
						[
							4750,
							4751,
							4752,
							4753,
							-3465,
							4754,
							4755
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55095,
					"arcs": [
						[
							4756,
							4757,
							-3731,
							4758,
							4759
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2230,
					"arcs": [
						[
							4760,
							4761
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6039,
					"arcs": [
						[
							4762,
							4763,
							-2879,
							4764,
							4765
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6043,
					"arcs": [
						[
							-4764,
							4766,
							4767,
							-2880
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8027,
					"arcs": [
						[
							4768,
							-2388,
							4769,
							4770
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17115,
					"arcs": [
						[
							-2661,
							-627,
							4771,
							4772,
							4773,
							4774,
							4775
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17019,
					"arcs": [
						[
							-1721,
							-1534,
							4776,
							4777,
							4778
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18023,
					"arcs": [
						[
							4779,
							4780,
							4781,
							4782,
							-429,
							-2255,
							4783
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18055,
					"arcs": [
						[
							4784,
							4785,
							4786,
							4787,
							-753,
							4788,
							-3947,
							4789
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18045,
					"arcs": [
						[
							-2195,
							4790,
							4791,
							4792,
							4793
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20009,
					"arcs": [
						[
							4794,
							-2245,
							4795,
							-1976,
							-1971,
							-2226
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20045,
					"arcs": [
						[
							4796,
							4797,
							4798,
							-3569,
							-3920,
							4799
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21087,
					"arcs": [
						[
							4800,
							4801,
							4802,
							4803,
							4804
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21205,
					"arcs": [
						[
							-3641,
							4805,
							4806,
							4807,
							4808,
							4809,
							4810
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22079,
					"arcs": [
						[
							-3649,
							4811,
							4812,
							4813,
							-4260,
							-78,
							4814
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22043,
					"arcs": [
						[
							4815,
							4816,
							-4812,
							-3648
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27145,
					"arcs": [
						[
							-359,
							4817,
							4818,
							4819,
							-3106,
							-1821,
							4820,
							-1508,
							-1830
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29123,
					"arcs": [
						[
							-2392,
							4821,
							4822,
							4823,
							-3320
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29139,
					"arcs": [
						[
							4824,
							-1626,
							4825,
							4826,
							-1436,
							4827,
							4828
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35057,
					"arcs": [
						[
							4829,
							4830,
							4831,
							4832,
							4833,
							-1130,
							4834
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8117,
					"arcs": [
						[
							4835,
							-4292,
							4836,
							4837,
							4838
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35001,
					"arcs": [
						[
							-4069,
							4839,
							-4830,
							4840,
							-3385
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36097,
					"arcs": [
						[
							-541,
							4841,
							4842,
							4843,
							-3616
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36091,
					"arcs": [
						[
							4844,
							4845,
							4846,
							4847,
							-2855,
							4848,
							4849,
							4850
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37127,
					"arcs": [
						[
							-3352,
							-4081,
							-3693,
							-3128,
							4851
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40125,
					"arcs": [
						[
							-282,
							4852,
							-775,
							-4095,
							-4149,
							4853,
							-4090
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41023,
					"arcs": [
						[
							-4611,
							4854,
							-3729,
							4855,
							4856,
							4857,
							4858,
							4859
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42011,
					"arcs": [
						[
							4860,
							4861,
							4862,
							-4618,
							-2533,
							4863
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47117,
					"arcs": [
						[
							4864,
							4865,
							4866,
							4867,
							-4046,
							4868
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47093,
					"arcs": [
						[
							4869,
							4870,
							4871,
							-4634,
							4872,
							4873,
							-3716,
							4874
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48291,
					"arcs": [
						[
							4875,
							4876,
							4877,
							4878,
							-3432,
							-3439,
							4879
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46047,
					"arcs": [
						[
							-732,
							4880,
							-1260,
							4881,
							4882
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48041,
					"arcs": [
						[
							4883,
							4884,
							4885,
							4886,
							4887
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4025,
					"arcs": [
						[
							-289,
							4888,
							4889,
							-154,
							-3005
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8065,
					"arcs": [
						[
							4890,
							-4838,
							4891,
							4892,
							4893
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12097,
					"arcs": [
						[
							4894,
							4895,
							4896,
							4897,
							4898
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13153,
					"arcs": [
						[
							-4702,
							4899,
							4900,
							4901,
							4902,
							4903,
							4904,
							4905
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17125,
					"arcs": [
						[
							4906,
							4907,
							-2664,
							4908,
							4909,
							-1191
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18143,
					"arcs": [
						[
							4910,
							4911,
							-4720,
							4912,
							4913
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20155,
					"arcs": [
						[
							4914,
							4915,
							-1482,
							4916,
							-790,
							-3486,
							-1978
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 53073,
					"arcs": [
						[
							[
								4917,
								4918,
								4919
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55063,
					"arcs": [
						[
							4920,
							-2832,
							4921,
							4922,
							4923,
							4924
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1101,
					"arcs": [
						[
							4925,
							4926,
							4927,
							4928,
							-3478,
							4929,
							4930
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1047,
					"arcs": [
						[
							-2086,
							4931,
							4932,
							4933,
							-2422,
							4934
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1015,
					"arcs": [
						[
							-3861,
							4935,
							4936,
							-3865,
							4937
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49041,
					"arcs": [
						[
							4938,
							4939,
							4940,
							4941,
							4942,
							-4434
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51155,
					"arcs": [
						[
							4943,
							-4673,
							-2112,
							-4672,
							4944,
							4945,
							4946,
							4947
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51097,
					"arcs": [
						[
							-4364,
							4948,
							4949,
							-4439,
							4950,
							4951,
							4952
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54013,
					"arcs": [
						[
							-3827,
							4953,
							-4682,
							4954,
							4955,
							4956
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12017,
					"arcs": [
						[
							4957,
							4958,
							4959,
							4960,
							4961
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2282,
					"arcs": [
						[
							4962,
							-1575,
							4963,
							4964
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5137,
					"arcs": [
						[
							-2565,
							-4530,
							4965,
							4966,
							-3482,
							-2324
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6007,
					"arcs": [
						[
							4967,
							4968,
							4969,
							4970,
							4971,
							4972
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13227,
					"arcs": [
						[
							4973,
							4974,
							4975,
							4976
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21021,
					"arcs": [
						[
							4977,
							4978,
							4979,
							4980,
							-4692,
							-4256
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4013,
					"arcs": [
						[
							-4890,
							4981,
							4982,
							4983,
							4984,
							-155
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5057,
					"arcs": [
						[
							4985,
							-623,
							-3072,
							4986,
							4987,
							4988
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5011,
					"arcs": [
						[
							4989,
							-3292,
							4990,
							4991,
							4992
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8059,
					"arcs": [
						[
							-4290,
							4993,
							4994,
							4995,
							4996,
							4997,
							-2381,
							4998,
							-2405,
							4999
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8111,
					"arcs": [
						[
							-4533,
							5000,
							5001,
							5002,
							5003
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13171,
					"arcs": [
						[
							5004,
							-1050,
							5005,
							5006,
							5007
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2020,
					"arcs": [
						[
							[
								5008,
								5009,
								-1863,
								5010
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28151,
					"arcs": [
						[
							5011,
							5012,
							5013,
							5014,
							5015,
							-3366
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28125,
					"arcs": [
						[
							-5015,
							5016,
							5017,
							5018
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29211,
					"arcs": [
						[
							-3295,
							5019,
							-1837,
							-1897,
							-3993
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29015,
					"arcs": [
						[
							-2822,
							5020,
							5021,
							-1608,
							5022,
							-2361
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18019,
					"arcs": [
						[
							5023,
							-4913,
							-4719,
							5024,
							5025,
							-4189,
							5026
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13245,
					"arcs": [
						[
							5027,
							5028,
							5029,
							5030,
							5031,
							5032
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21007,
					"arcs": [
						[
							5033,
							5034,
							-4644,
							5035,
							5036
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13093,
					"arcs": [
						[
							5037,
							-4905,
							5038,
							5039,
							5040,
							5041
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13129,
					"arcs": [
						[
							5042,
							5043,
							5044,
							5045,
							-4977,
							5046,
							5047
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21077,
					"arcs": [
						[
							5048,
							5049,
							5050,
							5051,
							5052
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21043,
					"arcs": [
						[
							5053,
							5054,
							5055,
							5056,
							5057,
							-4807
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22127,
					"arcs": [
						[
							-3969,
							5058,
							5059,
							5060,
							-4816,
							-3647
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 13193,
					"arcs": [
						[
							[
								-4700,
								5061,
								5062
							]
						],
						[
							[
								5063,
								5064,
								-4703,
								-4906,
								-5038,
								5065,
								5066
							]
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 13269,
					"arcs": [
						[
							[
								-5062,
								-4704,
								-5065
							]
						],
						[
							[
								5067,
								5068,
								5069,
								-5063,
								-5064,
								5070,
								5071
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13095,
					"arcs": [
						[
							-2816,
							-2595,
							5072,
							-3907,
							-2139,
							5073
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4001,
					"arcs": [
						[
							-1115,
							5074,
							-3358,
							-3387,
							-3156,
							5075,
							5076,
							5077
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18079,
					"arcs": [
						[
							-1005,
							-4715,
							-4721,
							-4912,
							5078,
							5079
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19009,
					"arcs": [
						[
							-346,
							-1472,
							-3247,
							-4492
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20041,
					"arcs": [
						[
							-2295,
							-3918,
							5080,
							-2542,
							5081,
							5082
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20063,
					"arcs": [
						[
							-2516,
							-3913,
							-3101,
							-2311,
							5083,
							-348,
							-72,
							5084
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21203,
					"arcs": [
						[
							5085,
							5086,
							-2721,
							5087,
							5088,
							5089
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13123,
					"arcs": [
						[
							-450,
							5090,
							-4974,
							-5046,
							5091
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13023,
					"arcs": [
						[
							5092,
							5093,
							5094,
							5095,
							-4903
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13097,
					"arcs": [
						[
							5096,
							5097,
							5098,
							5099
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13211,
					"arcs": [
						[
							5100,
							5101,
							5102,
							5103,
							5104,
							5105
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17009,
					"arcs": [
						[
							-1193,
							5106,
							5107,
							5108,
							5109
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17141,
					"arcs": [
						[
							-4540,
							5110,
							-2949,
							5111,
							5112,
							5113
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19013,
					"arcs": [
						[
							5114,
							5115,
							5116,
							-2253,
							-1802,
							5117
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21113,
					"arcs": [
						[
							5118,
							5119,
							5120,
							5121,
							5122
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21061,
					"arcs": [
						[
							5123,
							5124,
							-4706,
							5125,
							5126
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21005,
					"arcs": [
						[
							-3924,
							-3523,
							5127,
							5128,
							5129,
							5130,
							5131
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19017,
					"arcs": [
						[
							5132,
							5133,
							-5115,
							5134
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18119,
					"arcs": [
						[
							5135,
							5136,
							5137,
							-4786,
							5138
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31129,
					"arcs": [
						[
							-606,
							-2725,
							-3109,
							5139,
							5140,
							5141
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47101,
					"arcs": [
						[
							-1904,
							5142,
							5143,
							5144,
							5145
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31095,
					"arcs": [
						[
							5146,
							-558,
							5147,
							5148
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40119,
					"arcs": [
						[
							5149,
							5150,
							-1677,
							5151,
							5152
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1077,
					"arcs": [
						[
							5153,
							5154,
							-4048,
							-2701,
							5155,
							5156,
							-25,
							5157
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1049,
					"arcs": [
						[
							-4157,
							5158,
							5159,
							5160,
							5161,
							-3859,
							5162
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1053,
					"arcs": [
						[
							5163,
							5164,
							-3752,
							5165,
							5166,
							-3007,
							-148
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31011,
					"arcs": [
						[
							-1620,
							-1312,
							5167,
							-3673,
							-3666,
							5168
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31143,
					"arcs": [
						[
							-3671,
							5169,
							-2774,
							5170,
							5171
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18149,
					"arcs": [
						[
							-3560,
							-3253,
							-1126,
							5172,
							5173
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31089,
					"arcs": [
						[
							5174,
							5175,
							-1622,
							5176,
							-2050,
							5177,
							-4278
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19135,
					"arcs": [
						[
							-2450,
							-3119,
							-1172,
							-3180,
							-939
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51670,
					"arcs": [
						[
							5178,
							5179
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37033,
					"arcs": [
						[
							5180,
							5181,
							5182,
							5183,
							5184,
							-2669,
							-3232,
							5185
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47161,
					"arcs": [
						[
							5186,
							5187,
							-2562,
							-245,
							5188,
							5189,
							-1563
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37101,
					"arcs": [
						[
							-1504,
							-4852,
							-3127,
							5190,
							5191,
							5192
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37121,
					"arcs": [
						[
							5193,
							5194,
							5195,
							5196,
							5197
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25019,
					"arcs": [
						[
							5198
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28081,
					"arcs": [
						[
							5199,
							-3307,
							5200,
							5201,
							5202,
							5203
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30095,
					"arcs": [
						[
							-3244,
							5204,
							5205,
							5206,
							5207
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31159,
					"arcs": [
						[
							-2773,
							-2613,
							-555,
							5208
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29169,
					"arcs": [
						[
							5209,
							5210,
							-131,
							-3203,
							-1404,
							-1280
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35005,
					"arcs": [
						[
							5211,
							-655,
							5212,
							5213,
							-610,
							5214
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38059,
					"arcs": [
						[
							5215,
							-810,
							5216,
							-3629,
							5217,
							5218,
							-1962
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37027,
					"arcs": [
						[
							5219,
							5220,
							5221,
							5222,
							5223,
							5224
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27103,
					"arcs": [
						[
							5225,
							5226,
							5227,
							-1536,
							5228
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27097,
					"arcs": [
						[
							5229,
							5230,
							-1876,
							5231,
							-4819,
							5232
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39157,
					"arcs": [
						[
							5233,
							5234,
							-3701,
							5235,
							-2012,
							5236
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8097,
					"arcs": [
						[
							-569,
							5237,
							-4894,
							5238,
							5239,
							-3765
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37151,
					"arcs": [
						[
							-1412,
							-3234,
							5240,
							5241,
							5242,
							5243
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39139,
					"arcs": [
						[
							5244,
							5245,
							-1373,
							5246,
							5247
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38055,
					"arcs": [
						[
							5248,
							5249,
							5250,
							5251,
							-808,
							5252,
							5253,
							5254
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45059,
					"arcs": [
						[
							5255,
							5256,
							5257,
							5258,
							5259,
							5260
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46115,
					"arcs": [
						[
							5261,
							-663,
							-1561,
							-1552,
							5262,
							-2868
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5027,
					"arcs": [
						[
							5263,
							-3075,
							5264,
							5265,
							-3581,
							5266
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6003,
					"arcs": [
						[
							5267,
							-441,
							5268,
							5269,
							-2877,
							-3876
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 12086,
					"arcs": [
						[
							[
								5270,
								5271
							]
						],
						[
							[
								5272,
								-2004,
								5273,
								5274,
								5275,
								5276
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13083,
					"arcs": [
						[
							5277,
							5278,
							5279,
							-5159,
							-4156
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16027,
					"arcs": [
						[
							5280,
							5281,
							-3012,
							5282,
							5283
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17001,
					"arcs": [
						[
							5284,
							-1194,
							-5110,
							5285,
							5286,
							5287
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48213,
					"arcs": [
						[
							5288,
							5289,
							5290,
							5291,
							5292,
							5293,
							5294,
							-1333
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53025,
					"arcs": [
						[
							5295,
							5296,
							5297,
							-4134,
							5298,
							-3458,
							5299,
							5300
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50021,
					"arcs": [
						[
							5301,
							5302,
							5303,
							5304
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27129,
					"arcs": [
						[
							-1510,
							5305,
							-2544,
							5306,
							-5226,
							5307,
							-4282,
							5308,
							5309
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53059,
					"arcs": [
						[
							5310,
							5311,
							5312,
							5313,
							5314,
							5315,
							5316
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42129,
					"arcs": [
						[
							5317,
							5318,
							5319,
							5320,
							5321,
							5322,
							5323
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42027,
					"arcs": [
						[
							5324,
							5325,
							5326,
							5327,
							5328,
							5329
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45041,
					"arcs": [
						[
							5330,
							-4416,
							5331,
							5332,
							5333,
							5334,
							5335,
							5336
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47031,
					"arcs": [
						[
							5337,
							5338,
							5339,
							5340,
							5341,
							5342,
							5343
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47035,
					"arcs": [
						[
							5344,
							5345,
							5346,
							5347,
							-3713,
							-1173,
							5348,
							5349,
							5350,
							5351
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49057,
					"arcs": [
						[
							5352,
							5353,
							5354,
							5355,
							5356
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47127,
					"arcs": [
						[
							5357,
							-5344,
							5358,
							5359
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47007,
					"arcs": [
						[
							5360,
							-5349,
							-1177,
							5361,
							5362
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48119,
					"arcs": [
						[
							5363,
							-3849,
							5364,
							-2030,
							5365,
							-2956
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47015,
					"arcs": [
						[
							5366,
							5367,
							5368,
							-5340,
							5369
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48209,
					"arcs": [
						[
							5370,
							-1096,
							5371,
							5372,
							-2587
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48407,
					"arcs": [
						[
							5373,
							-4508,
							5374,
							-4876,
							5375
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18153,
					"arcs": [
						[
							5376,
							-304,
							5377,
							-4790,
							-3946,
							5378
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19145,
					"arcs": [
						[
							5379,
							-2267,
							5380,
							5381,
							5382
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19177,
					"arcs": [
						[
							-4724,
							-2252,
							5383,
							5384,
							-2834,
							-1703
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20039,
					"arcs": [
						[
							-466,
							5385,
							-827,
							-3912,
							-2514,
							-1737
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21015,
					"arcs": [
						[
							5386,
							-4650,
							5387,
							-5049,
							5388,
							5389,
							-3556
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 44005,
					"arcs": [
						[
							[
								5390,
								5391
							]
						],
						[
							[
								5392
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41069,
					"arcs": [
						[
							-1983,
							-4612,
							-4860,
							5393,
							5394,
							-2825
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53021,
					"arcs": [
						[
							-5299,
							-4133,
							5395,
							-4445,
							5396,
							-3459
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30097,
					"arcs": [
						[
							5397,
							-3048,
							-3245,
							-5208,
							5398
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30023,
					"arcs": [
						[
							5399,
							5400,
							5401,
							5402,
							-181,
							5403
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30093,
					"arcs": [
						[
							5404,
							-3605,
							-182,
							-5403
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47041,
					"arcs": [
						[
							5405,
							5406,
							5407,
							5408,
							-5368,
							5409
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48063,
					"arcs": [
						[
							-2033,
							5410,
							-2048,
							-4122,
							5411
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48241,
					"arcs": [
						[
							5412,
							5413,
							5414,
							5415,
							5416,
							5417,
							5418
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49055,
					"arcs": [
						[
							-4942,
							5419,
							-1109,
							5420,
							5421
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51137,
					"arcs": [
						[
							-4327,
							5422,
							5423,
							5424,
							5425,
							-3819
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48001,
					"arcs": [
						[
							-5293,
							5426,
							5427,
							5428,
							5429
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50023,
					"arcs": [
						[
							5430,
							5431,
							-3452,
							5432,
							5433
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51011,
					"arcs": [
						[
							5434,
							-2804,
							5435,
							5436,
							5437,
							5438
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51063,
					"arcs": [
						[
							-4671,
							-4677,
							5439,
							5440,
							5441,
							-4945
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23025,
					"arcs": [
						[
							5442,
							5443,
							-4267,
							5444,
							-3588,
							5445,
							5446
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 26089,
					"arcs": [
						[
							[
								5447
							]
						],
						[
							[
								5448,
								-176,
								5449
							]
						],
						[
							[
								5450
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4017,
					"arcs": [
						[
							-1116,
							-5078,
							5451,
							5452,
							-287
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4019,
					"arcs": [
						[
							-4984,
							5453,
							5454,
							5455,
							-3748,
							5456,
							5457
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8033,
					"arcs": [
						[
							-4534,
							-5004,
							5458,
							-1113
						]
					]
				},
				{
					"type": "Polygon",
					"id": 9011,
					"arcs": [
						[
							5459,
							5460,
							-3783,
							-477,
							5461,
							5462,
							5463
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51163,
					"arcs": [
						[
							5464,
							5465,
							5466,
							5467,
							5468,
							-3809,
							5469
						],
						[
							-3411
						],
						[
							-1403
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53037,
					"arcs": [
						[
							-3207,
							5470,
							-5301,
							5471,
							5472
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20187,
					"arcs": [
						[
							5473,
							-2442,
							-2729,
							-170,
							5474,
							-2926
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13207,
					"arcs": [
						[
							-5006,
							-1049,
							5475,
							5476,
							5477,
							5478,
							5479
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29117,
					"arcs": [
						[
							-1898,
							-1840,
							5480,
							5481,
							-2107,
							-766
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17103,
					"arcs": [
						[
							-5112,
							-2948,
							-697,
							5482,
							5483
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26075,
					"arcs": [
						[
							-1475,
							5484,
							-1295,
							5485,
							-544,
							5486,
							5487
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21063,
					"arcs": [
						[
							-4808,
							-5058,
							5488,
							5489
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21183,
					"arcs": [
						[
							5490,
							5491,
							5492,
							5493,
							5494,
							5495,
							-3929
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22081,
					"arcs": [
						[
							5496,
							5497,
							-3970,
							-3645,
							5498
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23019,
					"arcs": [
						[
							-4266,
							5499,
							-2635,
							-453,
							-3589,
							-5445
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27083,
					"arcs": [
						[
							5500,
							-4286,
							5501,
							5502,
							-1612
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27007,
					"arcs": [
						[
							5503,
							-4666,
							5504,
							5505,
							5506,
							-3271,
							5507,
							5508,
							-3722
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28145,
					"arcs": [
						[
							5509,
							5510,
							-2552,
							5511,
							-5204,
							5512,
							-684
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28163,
					"arcs": [
						[
							5513,
							5514,
							5515,
							-3659,
							5516,
							5517,
							-5018
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27049,
					"arcs": [
						[
							-3278,
							5518,
							5519,
							-4351,
							-1817,
							-512,
							-2530
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 28059,
					"arcs": [
						[
							[
								5520
							]
						],
						[
							[
								5521
							]
						],
						[
							[
								-835,
								5522,
								5523,
								5524,
								5525
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29097,
					"arcs": [
						[
							-3572,
							-4711,
							-896,
							-1325,
							-3595,
							-4546
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30067,
					"arcs": [
						[
							5526,
							5527,
							-5399,
							-5207,
							5528,
							-1654
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32007,
					"arcs": [
						[
							5529,
							5530,
							5531,
							5532,
							5533,
							5534,
							5535,
							5536,
							5537
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36071,
					"arcs": [
						[
							5538,
							5539,
							5540,
							-187,
							5541,
							5542,
							-3421,
							5543
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 12087,
					"arcs": [
						[
							[
								-5275,
								5544,
								-5272,
								5545
							]
						],
						[
							[
								5546
							]
						],
						[
							[
								5547
							]
						],
						[
							[
								5548,
								-5277,
								5549
							]
						],
						[
							[
								5550
							]
						],
						[
							[
								5551
							]
						],
						[
							[
								5552
							]
						],
						[
							[
								5553
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12091,
					"arcs": [
						[
							-5166,
							-3751,
							5554,
							5555,
							5556
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13101,
					"arcs": [
						[
							-3494,
							-1934,
							-3534,
							5557,
							5558
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13213,
					"arcs": [
						[
							5559,
							5560,
							-451,
							-5092,
							-5045,
							5561
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17201,
					"arcs": [
						[
							5562,
							5563,
							-3089,
							-5111,
							-4539
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18043,
					"arcs": [
						[
							5564,
							-5027,
							-4188,
							5565
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31073,
					"arcs": [
						[
							-796,
							5566,
							5567,
							-2189
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31141,
					"arcs": [
						[
							-1311,
							5568,
							5569,
							-2769,
							-5170,
							-3670,
							-3674,
							-5168
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20129,
					"arcs": [
						[
							-5475,
							-175,
							-4604,
							5570,
							-2927
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37111,
					"arcs": [
						[
							5571,
							-5196,
							5572,
							5573,
							5574,
							5575
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48373,
					"arcs": [
						[
							-4507,
							5576,
							5577,
							5578,
							-4877,
							-5375
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1119,
					"arcs": [
						[
							-2690,
							-2610,
							-2169,
							5579,
							5580,
							-4518,
							-600
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8007,
					"arcs": [
						[
							5581,
							5582,
							-1764,
							-3780,
							-4587,
							5583,
							5584
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37061,
					"arcs": [
						[
							5585,
							-4075,
							5586,
							5587,
							5588,
							5589
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38083,
					"arcs": [
						[
							5590,
							-3144,
							-2583,
							-2989,
							5591,
							-5251
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38061,
					"arcs": [
						[
							-3066,
							5592,
							-5255,
							5593,
							5594,
							5595
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40145,
					"arcs": [
						[
							5596,
							5597,
							-244,
							5598,
							5599,
							-2059
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46117,
					"arcs": [
						[
							5600,
							-1894,
							5601,
							-2892,
							5602,
							5603
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48257,
					"arcs": [
						[
							-1808,
							-2960,
							5604,
							-5289,
							-1332,
							-115
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48249,
					"arcs": [
						[
							-4129,
							-3837,
							5605,
							5606,
							-3110,
							-666
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48223,
					"arcs": [
						[
							-5366,
							-2035,
							5607,
							5608,
							-2957
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51183,
					"arcs": [
						[
							5609,
							5610,
							5611,
							5612,
							5613
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51640,
					"arcs": [
						[
							5614,
							5615
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37019,
					"arcs": [
						[
							5616,
							5617,
							5618,
							5619,
							-1949
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37115,
					"arcs": [
						[
							5620,
							5621,
							5622,
							5623,
							5624,
							5625
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 39043,
					"arcs": [
						[
							[
								-324,
								5626,
								5627,
								5628,
								-3652
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39145,
					"arcs": [
						[
							-1888,
							5629,
							5630,
							5631,
							5632,
							5633
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18061,
					"arcs": [
						[
							5634,
							5635,
							-5566,
							-4192,
							-959,
							5636,
							5637
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18115,
					"arcs": [
						[
							-4712,
							-3557,
							-5390,
							5638
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19119,
					"arcs": [
						[
							-4728,
							-462,
							5639,
							-2174,
							5640,
							-4034
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19167,
					"arcs": [
						[
							-5641,
							-1153,
							5641,
							5642,
							-4035
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21003,
					"arcs": [
						[
							5643,
							-4709,
							-3166,
							5644,
							5645,
							5646
						]
					]
				},
				{
					"type": "Polygon",
					"id": 9009,
					"arcs": [
						[
							5647,
							5648,
							5649,
							5650,
							5651
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12021,
					"arcs": [
						[
							5652,
							5653,
							-2005,
							-5273,
							-5549,
							5654
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13295,
					"arcs": [
						[
							-5280,
							5655,
							5656,
							5657,
							-5043,
							5658,
							5659,
							-5160
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17003,
					"arcs": [
						[
							5660,
							5661,
							-5037,
							5662,
							-4556,
							5663
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17185,
					"arcs": [
						[
							-1184,
							-2755,
							-3950,
							5664,
							5665,
							5666
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13115,
					"arcs": [
						[
							5667,
							-5659,
							-5048,
							5668,
							5669,
							5670
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54021,
					"arcs": [
						[
							-3826,
							5671,
							-4138,
							-4679,
							-4954
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54043,
					"arcs": [
						[
							5672,
							5673,
							5674,
							5675,
							5676,
							-3466,
							-4754
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13057,
					"arcs": [
						[
							-4976,
							5677,
							-2026,
							5678,
							5679,
							5680
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29103,
					"arcs": [
						[
							-2836,
							5681,
							5682,
							-4270,
							-1285,
							5683
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17137,
					"arcs": [
						[
							-5108,
							5684,
							5685,
							-2523,
							5686,
							-2213,
							5687
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18071,
					"arcs": [
						[
							-219,
							5688,
							-5079,
							-4911,
							5689,
							5690,
							5691
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19151,
					"arcs": [
						[
							-3121,
							5692,
							5693,
							-1670,
							-1438
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45011,
					"arcs": [
						[
							5694,
							5695,
							5696,
							5697,
							5698
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40065,
					"arcs": [
						[
							5699,
							5700,
							5701,
							5702,
							5703,
							5704
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42101,
					"arcs": [
						[
							5705,
							5706,
							5707,
							5708,
							5709,
							5710
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42133,
					"arcs": [
						[
							5711,
							5712,
							-4622,
							5713,
							5714,
							5715,
							5716
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21023,
					"arcs": [
						[
							5717,
							5718,
							5719,
							-3528,
							-3635,
							-3057
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 22075,
					"arcs": [
						[
							[
								5720,
								5721,
								5722,
								5723
							]
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 22065,
					"arcs": [
						[
							[
								5724,
								5725
							]
						],
						[
							[
								5726,
								5727,
								5728,
								5729,
								5730
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18123,
					"arcs": [
						[
							5731,
							5732,
							5733,
							5734,
							5735,
							5736
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20005,
					"arcs": [
						[
							5737,
							5738,
							5739,
							5740,
							5741,
							5742,
							-2703
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21235,
					"arcs": [
						[
							5743,
							5744,
							5745,
							5746,
							5747,
							5748
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21089,
					"arcs": [
						[
							-5632,
							5749,
							5750,
							-5055,
							5751
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21163,
					"arcs": [
						[
							5752,
							-5638,
							5753,
							5754,
							-5735
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39039,
					"arcs": [
						[
							5755,
							-1025,
							-107,
							5756,
							5757,
							5758
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39003,
					"arcs": [
						[
							-110,
							-2018,
							-1342,
							-2520,
							5759
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48347,
					"arcs": [
						[
							-533,
							5760,
							5761,
							5762,
							5763
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6001,
					"arcs": [
						[
							5764,
							5765,
							5766,
							-3755,
							5767
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6023,
					"arcs": [
						[
							5768,
							-3763,
							5769,
							5770,
							5771
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45051,
					"arcs": [
						[
							5772,
							-1950,
							-5620,
							5773,
							5774,
							5775
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45073,
					"arcs": [
						[
							5776,
							5777,
							5778,
							5779,
							5780,
							5781,
							5782,
							5783,
							5784
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48485,
					"arcs": [
						[
							5785,
							-4027,
							5786,
							-123,
							5787
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26031,
					"arcs": [
						[
							-4661,
							5788,
							5789,
							-2216,
							-1301,
							5790
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28009,
					"arcs": [
						[
							-4626,
							5791,
							-2553,
							-5511,
							5792
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28095,
					"arcs": [
						[
							5793,
							-5201,
							-3306,
							-3087,
							-2089,
							5794,
							5795
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28157,
					"arcs": [
						[
							5796,
							5797,
							5798,
							5799,
							5800,
							5801
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28087,
					"arcs": [
						[
							5802,
							-5795,
							-2092,
							-2166,
							-2609,
							5803
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29143,
					"arcs": [
						[
							5804,
							-4558,
							5805,
							5806,
							5807,
							5808,
							5809,
							5810,
							-4563
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22029,
					"arcs": [
						[
							5811,
							5812,
							-5802,
							5813,
							5814,
							5815,
							5816,
							5817
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23005,
					"arcs": [
						[
							-1207,
							5818,
							5819,
							5820,
							-4199
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 24041,
					"arcs": [
						[
							[
								5821,
								5822,
								5823,
								5824
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8071,
					"arcs": [
						[
							5825,
							-2386,
							5826,
							-2906,
							-2930,
							5827,
							5828,
							5829
						]
					]
				},
				{
					"type": "Polygon",
					"id": 9005,
					"arcs": [
						[
							5830,
							5831,
							5832,
							-5652,
							5833,
							5834
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13181,
					"arcs": [
						[
							5835,
							5836,
							5837,
							-3903,
							5838
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13119,
					"arcs": [
						[
							5839,
							-5782,
							5840,
							5841,
							-749
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17013,
					"arcs": [
						[
							5842,
							5843,
							5844,
							5845,
							5846,
							5847
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48443,
					"arcs": [
						[
							5848,
							-4643,
							5849,
							5850,
							5851
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49033,
					"arcs": [
						[
							5852,
							5853,
							5854,
							-436,
							-977,
							5855,
							-5355
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51103,
					"arcs": [
						[
							-3455,
							5856,
							5857
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 53033,
					"arcs": [
						[
							[
								5858,
								-3208,
								-5473,
								5859,
								5860
							]
						],
						[
							[
								5861
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29087,
					"arcs": [
						[
							5862,
							5863,
							5864,
							5865,
							5866,
							-4003
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30085,
					"arcs": [
						[
							5867,
							5868,
							5869,
							5870,
							5871,
							5872
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31065,
					"arcs": [
						[
							-2190,
							-5568,
							5873,
							-473,
							-823,
							-5386,
							-465
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32005,
					"arcs": [
						[
							-1943,
							5874,
							5875,
							-5269,
							-440,
							-1700
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36055,
					"arcs": [
						[
							5876,
							5877,
							-4293,
							5878,
							-4687,
							-4594
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24021,
					"arcs": [
						[
							5879,
							5880,
							5881,
							5882,
							5883,
							-3972,
							5884
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26053,
					"arcs": [
						[
							5885,
							5886,
							5887,
							-3474,
							5888
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27115,
					"arcs": [
						[
							5889,
							5890,
							5891,
							5892,
							5893,
							-2796
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17085,
					"arcs": [
						[
							5894,
							5895,
							-4542,
							5896,
							5897,
							5898
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18155,
					"arcs": [
						[
							-5639,
							-5389,
							-5053,
							5899,
							-4716,
							-4713
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20119,
					"arcs": [
						[
							-2751,
							-3396,
							5900,
							5901,
							-2709,
							-2454
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21135,
					"arcs": [
						[
							-5633,
							-5752,
							-5054,
							-4806,
							-3640,
							5902,
							5903
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54065,
					"arcs": [
						[
							5904,
							5905,
							5906,
							5907,
							5908
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56023,
					"arcs": [
						[
							5909,
							5910,
							5911,
							5912,
							5913,
							-437,
							-5855,
							5914
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1125,
					"arcs": [
						[
							-1226,
							-2097,
							5915,
							-48,
							5916,
							5917,
							-2167
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5149,
					"arcs": [
						[
							5918,
							-863,
							5919,
							-3875,
							5920,
							5921,
							5922
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5071,
					"arcs": [
						[
							5923,
							5924,
							-865,
							5925,
							5926
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33005,
					"arcs": [
						[
							-4577,
							5927,
							5928,
							-4657,
							5929
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36083,
					"arcs": [
						[
							-4847,
							5930,
							5931,
							5932,
							5933,
							5934
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37149,
					"arcs": [
						[
							5935,
							5936,
							5937,
							5938
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39105,
					"arcs": [
						[
							-2692,
							-36,
							5939,
							5940,
							5941,
							5942
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42057,
					"arcs": [
						[
							5943,
							5944,
							5945,
							5946,
							5947
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6095,
					"arcs": [
						[
							5948,
							-4399,
							5949,
							5950,
							5951,
							5952
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30041,
					"arcs": [
						[
							5953,
							5954,
							-4055,
							5955
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31025,
					"arcs": [
						[
							5956,
							5957,
							-4186,
							5958,
							5959,
							-2616
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32013,
					"arcs": [
						[
							5960,
							5961,
							5962,
							-5538,
							5963,
							5964,
							5965
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34007,
					"arcs": [
						[
							5966,
							5967,
							5968,
							-5709
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36081,
					"arcs": [
						[
							5969,
							-4012,
							5970,
							5971,
							5972,
							5973
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 23013,
					"arcs": [
						[
							[
								-456,
								5974
							]
						],
						[
							[
								5975
							]
						],
						[
							[
								-3591,
								5976,
								5977
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23007,
					"arcs": [
						[
							-5447,
							5978,
							-1204,
							-4198,
							5979
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 24039,
					"arcs": [
						[
							[
								5980,
								5981,
								5982,
								5983
							]
						],
						[
							[
								5984,
								5985
							]
						],
						[
							[
								5986,
								5987
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5147,
					"arcs": [
						[
							5988,
							5989,
							-1862,
							5990,
							5991,
							5992
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8037,
					"arcs": [
						[
							5993,
							5994,
							-4839,
							-4891,
							-5238,
							-568
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8015,
					"arcs": [
						[
							-5239,
							-4893,
							5995,
							5996,
							5997,
							5998
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13169,
					"arcs": [
						[
							5999,
							6000,
							6001,
							-3891,
							6002,
							6003,
							-5477
						]
					]
				},
				{
					"type": "Polygon",
					"id": 44001,
					"arcs": [
						[
							6004,
							6005,
							6006
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46009,
					"arcs": [
						[
							6007,
							6008,
							6009,
							6010
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 48261,
					"arcs": [
						[
							[
								6011,
								6012,
								6013,
								6014
							]
						],
						[
							[
								6015,
								6016,
								6017,
								6018,
								-3112
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50001,
					"arcs": [
						[
							6019,
							-5434,
							6020,
							6021,
							-5302,
							6022,
							6023
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36029,
					"arcs": [
						[
							6024,
							-4690,
							6025,
							-3267,
							6026,
							6027
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37007,
					"arcs": [
						[
							6028,
							6029,
							6030,
							6031
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37131,
					"arcs": [
						[
							6032,
							6033,
							6034,
							6035,
							-4379,
							-4078,
							-4504
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37119,
					"arcs": [
						[
							6036,
							-1418,
							6037,
							6038,
							6039,
							6040,
							6041
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42125,
					"arcs": [
						[
							-2766,
							6042,
							6043,
							6044,
							6045,
							-5324,
							6046,
							6047,
							6048
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27017,
					"arcs": [
						[
							-2760,
							6049,
							-5891,
							6050
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27117,
					"arcs": [
						[
							-1613,
							-5503,
							6051,
							-459,
							6052
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29163,
					"arcs": [
						[
							6053,
							-5848,
							6054,
							-4826,
							-1625,
							6055
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31067,
					"arcs": [
						[
							-5148,
							-557,
							-2618,
							6056,
							-3029,
							6057,
							6058
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31015,
					"arcs": [
						[
							-3426,
							6059,
							6060,
							-5175,
							6061
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31027,
					"arcs": [
						[
							6062,
							6063,
							-4567,
							6064,
							6065,
							6066
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13121,
					"arcs": [
						[
							-5099,
							6067,
							-5679,
							-2029,
							-1846,
							6068,
							6069,
							6070,
							-866,
							6071
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13021,
					"arcs": [
						[
							-5478,
							-6004,
							6072,
							-4901,
							6073
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13001,
					"arcs": [
						[
							6074,
							-4342,
							-3509,
							6075,
							6076,
							6077
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21123,
					"arcs": [
						[
							6078,
							-4259,
							6079,
							-4801,
							6080,
							6081
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21065,
					"arcs": [
						[
							6082,
							6083,
							-3412,
							-2716,
							6084
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20029,
					"arcs": [
						[
							6085,
							6086,
							-3914,
							-2293,
							-2289,
							6087
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20109,
					"arcs": [
						[
							6088,
							-2517,
							-5085,
							-71,
							6089,
							-3390
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21081,
					"arcs": [
						[
							-5388,
							-4649,
							-3059,
							-3634,
							6090,
							6091,
							-5050
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21125,
					"arcs": [
						[
							6092,
							-5088,
							-2720,
							6093,
							6094,
							-5744,
							6095
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50027,
					"arcs": [
						[
							6096,
							6097,
							-4573,
							6098,
							6099,
							-5303,
							-6022
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53011,
					"arcs": [
						[
							6100,
							-5317,
							6101,
							6102
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53019,
					"arcs": [
						[
							6103,
							6104,
							6105,
							6106
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45057,
					"arcs": [
						[
							-6041,
							6107,
							6108,
							6109,
							6110,
							-1587,
							6111
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48203,
					"arcs": [
						[
							6112,
							6113,
							6114,
							-530,
							6115,
							-4124
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48197,
					"arcs": [
						[
							-3168,
							6116,
							-5705,
							6117,
							6118,
							6119
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48351,
					"arcs": [
						[
							6120,
							-3963,
							6121,
							-4654,
							-4197,
							6122,
							-5416
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35007,
					"arcs": [
						[
							6123,
							-5829,
							6124,
							6125,
							6126,
							6127
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38021,
					"arcs": [
						[
							-3401,
							6128,
							6129,
							6130,
							6131,
							-2152
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38001,
					"arcs": [
						[
							-4601,
							-3313,
							6132,
							6133,
							-4423,
							6134,
							6135,
							-4739
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39095,
					"arcs": [
						[
							6136,
							-547,
							-3984,
							6137,
							-322,
							6138,
							-1023
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40025,
					"arcs": [
						[
							-2928,
							-5571,
							-4608,
							-3259,
							-2712,
							6139
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41041,
					"arcs": [
						[
							6140,
							6141,
							6142,
							6143,
							6144
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21167,
					"arcs": [
						[
							-5129,
							6145,
							-5123,
							6146,
							-4979,
							6147
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18175,
					"arcs": [
						[
							-5690,
							-4914,
							-5024,
							-5565,
							-5636,
							6148,
							-3198,
							6149
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21217,
					"arcs": [
						[
							-6080,
							-4258,
							-4696,
							6150,
							-4802
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27015,
					"arcs": [
						[
							-5308,
							-5229,
							-1540,
							-550,
							6151,
							-4283
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29137,
					"arcs": [
						[
							-1287,
							-4273,
							6152,
							6153,
							-1623,
							6154
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29001,
					"arcs": [
						[
							-3294,
							6155,
							-2837,
							-5684,
							-1284,
							-1838,
							-5020
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30055,
					"arcs": [
						[
							-5872,
							6156,
							6157,
							6158,
							-647,
							6159
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31081,
					"arcs": [
						[
							-3672,
							-5172,
							6160,
							-2722,
							-3263,
							-135
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31017,
					"arcs": [
						[
							6161,
							-4280,
							6162,
							-229,
							6163
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55013,
					"arcs": [
						[
							-5893,
							6164,
							-2592,
							6165,
							-4757,
							6166
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56015,
					"arcs": [
						[
							6167,
							6168,
							-1346,
							6169,
							6170,
							-2601
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1073,
					"arcs": [
						[
							-2096,
							6171,
							6172,
							6173,
							-49,
							-5916
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1043,
					"arcs": [
						[
							-2860,
							6174,
							6175,
							6176,
							6177,
							-2094
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51059,
					"arcs": [
						[
							6178,
							-3976,
							6179,
							-1415,
							6180,
							6181,
							6182,
							6183,
							6184,
							6185
						],
						[
							-4335
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51171,
					"arcs": [
						[
							6186,
							-2066,
							6187,
							6188,
							6189
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1095,
					"arcs": [
						[
							6190,
							-4158,
							-5163,
							-3858,
							6191,
							-6177,
							6192
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1009,
					"arcs": [
						[
							-6192,
							-3863,
							6193,
							-6172,
							-2095,
							-6178
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48391,
					"arcs": [
						[
							6194,
							6195,
							6196,
							6197,
							6198,
							6199,
							6200,
							6201,
							-3833
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48077,
					"arcs": [
						[
							-4026,
							6202,
							6203,
							6204,
							-124,
							-5787
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50007,
					"arcs": [
						[
							6205,
							6206,
							6207,
							-5431,
							-6020,
							6208,
							6209
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51131,
					"arcs": [
						[
							6210,
							6211
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38057,
					"arcs": [
						[
							-5253,
							-811,
							-5216,
							-1961,
							6212
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39041,
					"arcs": [
						[
							-4084,
							6213,
							-1378,
							6214,
							6215,
							-899
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45035,
					"arcs": [
						[
							6216,
							6217,
							6218,
							6219
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46017,
					"arcs": [
						[
							6220,
							6221,
							-1601,
							-3382,
							-2885
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47087,
					"arcs": [
						[
							6222,
							-4146,
							-3132,
							6223,
							6224
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47057,
					"arcs": [
						[
							6225,
							6226,
							6227,
							6228,
							6229,
							6230,
							-4871
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48091,
					"arcs": [
						[
							-2407,
							-2588,
							-5373,
							6231,
							6232
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49031,
					"arcs": [
						[
							-4943,
							-5422,
							6233,
							-4435
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8049,
					"arcs": [
						[
							6234,
							6235,
							6236,
							6237,
							-4288,
							-4836,
							-5995,
							6238
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6087,
					"arcs": [
						[
							-3758,
							-1666,
							-1428,
							6239,
							6240
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13009,
					"arcs": [
						[
							6241,
							-3502,
							-3887,
							-6002,
							6242
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13141,
					"arcs": [
						[
							6243,
							-4231,
							-3900,
							6244,
							-3497,
							-6242,
							6245
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16019,
					"arcs": [
						[
							-1257,
							6246,
							6247,
							6248,
							-5911,
							6249,
							6250
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24043,
					"arcs": [
						[
							-5947,
							6251,
							-5880,
							6252,
							6253,
							6254,
							-5905,
							6255
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17197,
					"arcs": [
						[
							6256,
							6257,
							6258,
							-1798,
							-998,
							6259
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19045,
					"arcs": [
						[
							6260,
							6261,
							6262,
							-4177,
							-4544,
							-3041,
							-62
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24047,
					"arcs": [
						[
							6263,
							6264,
							6265,
							6266,
							-5982
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34011,
					"arcs": [
						[
							6267,
							6268,
							-4006,
							6269,
							6270
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34033,
					"arcs": [
						[
							6271,
							6272,
							6273,
							-6271,
							6274,
							6275
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1011,
					"arcs": [
						[
							6276,
							-4527,
							6277,
							6278,
							-4928
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36085,
					"arcs": [
						[
							6279,
							6280,
							6281,
							6282
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29209,
					"arcs": [
						[
							-1328,
							-4269,
							-2416,
							6283,
							-1631
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45005,
					"arcs": [
						[
							-5698,
							6284,
							6285,
							6286,
							6287
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47005,
					"arcs": [
						[
							6288,
							-5189,
							-249,
							-3712,
							6289,
							-4110,
							-911
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25025,
					"arcs": [
						[
							6290,
							6291,
							6292,
							6293,
							6294,
							6295
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47009,
					"arcs": [
						[
							6296,
							-4873,
							-4633,
							6297,
							-4014,
							6298
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8051,
					"arcs": [
						[
							6299,
							6300,
							-3766,
							-5240,
							-5999,
							6301,
							6302,
							6303
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8053,
					"arcs": [
						[
							-6303,
							6304,
							6305,
							-5582,
							6306,
							-5002,
							6307
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 48273,
					"arcs": [
						[
							[
								6308,
								6309,
								-6012,
								6310
							]
						],
						[
							[
								6311,
								6312,
								-6016,
								-3111,
								-5607
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1087,
					"arcs": [
						[
							6313,
							6314,
							6315,
							-4528,
							-6277,
							-4927
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5139,
					"arcs": [
						[
							6316,
							6317,
							-4992,
							6318,
							6319,
							-3582,
							-5266
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17193,
					"arcs": [
						[
							6320,
							6321,
							-5666,
							6322,
							6323,
							6324,
							-4486
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24045,
					"arcs": [
						[
							6325,
							6326,
							-6264,
							-5981,
							6327
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41031,
					"arcs": [
						[
							-3172,
							-2826,
							-5395,
							6328,
							6329,
							-1087
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51109,
					"arcs": [
						[
							6330,
							-5425,
							6331,
							6332,
							6333,
							-405
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50011,
					"arcs": [
						[
							6334,
							-331,
							6335,
							-6207,
							6336
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 37055,
					"arcs": [
						[
							[
								6337
							]
						],
						[
							[
								6338,
								6339
							]
						],
						[
							[
								6340,
								6341
							]
						],
						[
							[
								6342,
								6343
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34035,
					"arcs": [
						[
							-3679,
							6344,
							6345,
							6346,
							6347
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34039,
					"arcs": [
						[
							-6345,
							-3678,
							6348,
							6349,
							-6280,
							6350
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36111,
					"arcs": [
						[
							6351,
							6352,
							6353,
							-5539,
							6354,
							6355
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45007,
					"arcs": [
						[
							-5780,
							6356,
							6357,
							6358,
							6359,
							6360
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48005,
					"arcs": [
						[
							6361,
							-5763,
							6362,
							-5413,
							6363,
							-5577,
							-4506,
							6364
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46103,
					"arcs": [
						[
							-201,
							-2509,
							-4143,
							6365,
							6366,
							6367,
							-730
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45009,
					"arcs": [
						[
							6368,
							6369,
							-6285,
							-5697
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47019,
					"arcs": [
						[
							-4042,
							6370,
							6371,
							-5194,
							6372,
							6373
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51035,
					"arcs": [
						[
							-4946,
							-5442,
							6374,
							6375,
							6376,
							-5615,
							6377,
							6378
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6115,
					"arcs": [
						[
							-4969,
							6379,
							-1690,
							-2269,
							-1696,
							6380
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16031,
					"arcs": [
						[
							6381,
							-494,
							6382,
							6383,
							-3802,
							6384,
							-5532,
							6385
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37175,
					"arcs": [
						[
							6386,
							6387,
							6388,
							6389,
							-5778,
							6390
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 12071,
					"arcs": [
						[
							[
								6391,
								6392,
								-5653,
								6393
							]
						],
						[
							[
								6394
							]
						],
						[
							[
								6395,
								6396
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41017,
					"arcs": [
						[
							-1088,
							-6330,
							6397,
							6398,
							-4029,
							6399,
							6400
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53075,
					"arcs": [
						[
							-4132,
							6401,
							6402,
							-3542,
							6403,
							6404,
							6405,
							-616,
							-4446,
							-5396
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29131,
					"arcs": [
						[
							6406,
							-1217,
							6407,
							-132,
							-5211,
							6408,
							6409
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26021,
					"arcs": [
						[
							6410,
							6411,
							6412,
							-3250,
							-3559
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6011,
					"arcs": [
						[
							6413,
							-4971,
							6414,
							-4396,
							6415
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5063,
					"arcs": [
						[
							6416,
							6417,
							6418,
							6419,
							6420,
							-3483,
							-4967
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51197,
					"arcs": [
						[
							-4947,
							-6379,
							6421,
							-4331,
							6422
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5065,
					"arcs": [
						[
							-2316,
							6423,
							-6417,
							-4966,
							-4529
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 48007,
					"arcs": [
						[
							[
								6424,
								6425,
								6426,
								6427
							]
						],
						[
							[
								6428,
								6429,
								6430,
								-6200
							]
						],
						[
							[
								6431,
								-3834,
								-6202
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45013,
					"arcs": [
						[
							6432,
							6433,
							6434,
							6435
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46135,
					"arcs": [
						[
							6436,
							-527,
							6437,
							-6063,
							6438,
							-6009
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37087,
					"arcs": [
						[
							6439,
							-5625,
							6440,
							6441,
							-6387,
							6442,
							6443,
							-4631
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48017,
					"arcs": [
						[
							-4585,
							-42,
							6444,
							-1197,
							6445
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19061,
					"arcs": [
						[
							6446,
							6447,
							-5899,
							6448,
							-60,
							-2937
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20121,
					"arcs": [
						[
							-3568,
							6449,
							6450,
							-1200,
							-3921
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6081,
					"arcs": [
						[
							-4160,
							6451,
							-3759,
							-6241,
							6452
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8069,
					"arcs": [
						[
							-4736,
							6453,
							6454,
							6455,
							-6236,
							6456
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18173,
					"arcs": [
						[
							6457,
							-3517,
							6458,
							6459,
							6460,
							6461,
							6462
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20113,
					"arcs": [
						[
							6463,
							6464,
							-1478,
							-4916,
							6465,
							-2243
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55037,
					"arcs": [
						[
							6466,
							6467,
							6468,
							-4451
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29055,
					"arcs": [
						[
							-1252,
							-1278,
							-3319,
							-2908,
							-3202,
							6469
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30075,
					"arcs": [
						[
							6470,
							6471,
							-4455,
							-854,
							6472,
							6473,
							6474
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25027,
					"arcs": [
						[
							-5929,
							6475,
							6476,
							6477,
							6478,
							-3781,
							6479,
							6480,
							6481,
							-4658
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17017,
					"arcs": [
						[
							-1192,
							-4910,
							6482,
							6483,
							-5685,
							-5107
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18021,
					"arcs": [
						[
							-303,
							6484,
							6485,
							-5139,
							-4785,
							-5378
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6021,
					"arcs": [
						[
							6486,
							-4972,
							-6414,
							6487,
							6488
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5085,
					"arcs": [
						[
							6489,
							6490,
							6491,
							6492,
							6493,
							6494
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31043,
					"arcs": [
						[
							6495,
							6496,
							6497,
							-4570
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37077,
					"arcs": [
						[
							6498,
							6499,
							6500,
							-3093,
							-3353,
							-1502,
							-236
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5075,
					"arcs": [
						[
							6501,
							6502,
							6503,
							6504,
							-6419,
							6505
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5079,
					"arcs": [
						[
							6506,
							6507,
							6508,
							-3288,
							6509
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5081,
					"arcs": [
						[
							6510,
							6511,
							-4989,
							6512,
							6513,
							-4355
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47029,
					"arcs": [
						[
							6514,
							6515,
							6516,
							-5626,
							-6440,
							-4630
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42017,
					"arcs": [
						[
							6517,
							6518,
							6519,
							6520,
							6521,
							-5707,
							6522,
							6523
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45019,
					"arcs": [
						[
							-6219,
							6524,
							6525,
							6526,
							6527
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 51001,
					"arcs": [
						[
							[
								-5983,
								-6267,
								6528,
								-6211,
								6529
							]
						],
						[
							[
								6530,
								-5985
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13029,
					"arcs": [
						[
							6531,
							6532,
							6533,
							6534,
							6535,
							6536
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48289,
					"arcs": [
						[
							-1914,
							6537,
							-5429,
							6538,
							6539,
							6540
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16007,
					"arcs": [
						[
							-5915,
							-5854,
							6541,
							6542
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42055,
					"arcs": [
						[
							-5946,
							6543,
							-3707,
							6544,
							6545,
							6546,
							-5881,
							-6252
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51159,
					"arcs": [
						[
							-3456,
							-5858,
							6547,
							-4361,
							6548
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 23015,
					"arcs": [
						[
							[
								6549,
								-3592,
								-5978,
								6550,
								6551
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30099,
					"arcs": [
						[
							6552,
							-4060,
							6553,
							-362,
							-2472
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51590,
					"arcs": [
						[
							-5182,
							6554
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37097,
					"arcs": [
						[
							6555,
							6556,
							-4299,
							6557,
							6558,
							6559,
							-6038,
							-1417,
							6560
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42005,
					"arcs": [
						[
							6561,
							6562,
							6563,
							6564,
							-5319,
							6565
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34001,
					"arcs": [
						[
							-5968,
							6566,
							6567,
							6568,
							-4007,
							-6269,
							6569
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42009,
					"arcs": [
						[
							6570,
							6571,
							6572,
							-5944,
							6573,
							6574
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20013,
					"arcs": [
						[
							6575,
							6576,
							-5738,
							-2702,
							-20
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22101,
					"arcs": [
						[
							6577,
							6578,
							6579,
							6580,
							6581
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51730,
					"arcs": [
						[
							6582,
							-2536,
							6583,
							6584,
							6585
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20173,
					"arcs": [
						[
							-4917,
							-1481,
							-2654,
							6586,
							-791
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42021,
					"arcs": [
						[
							6587,
							6588,
							6589,
							-6571,
							6590,
							-5321
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46019,
					"arcs": [
						[
							6591,
							6592,
							6593,
							-4139,
							-2507,
							-4457
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46027,
					"arcs": [
						[
							-526,
							-4037,
							6594,
							-4568,
							-6064,
							-6438
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47063,
					"arcs": [
						[
							6595,
							6596,
							-6516,
							6597,
							-6230
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45025,
					"arcs": [
						[
							6598,
							-6032,
							-4418,
							6599,
							6600,
							-6109
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47067,
					"arcs": [
						[
							6601,
							6602,
							6603,
							-6228,
							6604
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47071,
					"arcs": [
						[
							6605,
							-1594,
							-4113,
							6606,
							-5158,
							-24,
							6607,
							6608
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45027,
					"arcs": [
						[
							6609,
							-5335,
							6610,
							6611,
							6612,
							6613
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1033,
					"arcs": [
						[
							-5157,
							6614,
							-3330,
							-26
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46123,
					"arcs": [
						[
							-2889,
							-3428,
							6615,
							-4420,
							6616
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46105,
					"arcs": [
						[
							6617,
							-6135,
							-4428,
							6618,
							-4140,
							-6594
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40007,
					"arcs": [
						[
							-2710,
							-5902,
							6619,
							6620,
							6621,
							-4638,
							-4635,
							-4605
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12083,
					"arcs": [
						[
							6622,
							6623,
							6624,
							6625,
							6626,
							6627,
							-4958
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51135,
					"arcs": [
						[
							6628,
							6629,
							6630,
							6631,
							6632
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50025,
					"arcs": [
						[
							-6099,
							-4578,
							-5930,
							-4656,
							6633
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 25005,
					"arcs": [
						[
							[
								6634,
								6635,
								6636,
								-5391,
								6637,
								-6005,
								6638
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18073,
					"arcs": [
						[
							6639,
							6640,
							-5174,
							6641,
							6642,
							-2656,
							-2808
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17083,
					"arcs": [
						[
							-2526,
							6643,
							6644,
							-5845,
							6645
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18129,
					"arcs": [
						[
							6646,
							6647,
							6648,
							-3955,
							6649,
							-6324
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12015,
					"arcs": [
						[
							6650,
							-2780,
							-746,
							-6392,
							6651,
							-6396,
							6652
						]
					]
				},
				{
					"type": "Polygon",
					"id": 9003,
					"arcs": [
						[
							6653,
							6654,
							-5460,
							6655,
							-5648,
							-5833
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45031,
					"arcs": [
						[
							-6600,
							-4417,
							-5331,
							6656,
							6657
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42045,
					"arcs": [
						[
							6658,
							-5711,
							6659,
							6660,
							6661
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45033,
					"arcs": [
						[
							-4415,
							6662,
							-5773,
							6663,
							-5332
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45039,
					"arcs": [
						[
							-1588,
							-6111,
							6664,
							6665,
							6666,
							6667
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47089,
					"arcs": [
						[
							-6231,
							-6598,
							-6515,
							-4629,
							-4872
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16017,
					"arcs": [
						[
							-3038,
							6668,
							-320,
							-722,
							6669,
							-4172,
							6670
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37187,
					"arcs": [
						[
							-4382,
							6671,
							6672,
							6673,
							-4385,
							6674
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48195,
					"arcs": [
						[
							-4607,
							-4637,
							-916,
							-276,
							-3261
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47129,
					"arcs": [
						[
							6675,
							6676,
							-3714,
							-5348,
							6677
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40059,
					"arcs": [
						[
							6678,
							-592,
							6679,
							-3081,
							6680,
							-6621
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 47185,
					"arcs": [
						[
							[
								-5351,
								6681
							]
						],
						[
							[
								-5408,
								6682,
								-5345,
								6683,
								6684
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46063,
					"arcs": [
						[
							-4740,
							-6136,
							-6618,
							-6593,
							6685,
							6686
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47169,
					"arcs": [
						[
							6687,
							6688,
							6689,
							6690
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19103,
					"arcs": [
						[
							-1759,
							-3044,
							6691,
							6692,
							6693,
							-1008
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 25021,
					"arcs": [
						[
							[
								6694,
								6695
							]
						],
						[
							[
								-6292,
								6696
							]
						],
						[
							[
								6697,
								-6296,
								6698,
								6699,
								-6635,
								6700,
								-6478
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16043,
					"arcs": [
						[
							6701,
							-184,
							-3608,
							6702,
							6703,
							6704,
							6705,
							-1255
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17145,
					"arcs": [
						[
							6706,
							6707,
							6708,
							-3803,
							6709
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13233,
					"arcs": [
						[
							-5670,
							6710,
							6711,
							-951,
							6712,
							6713
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24003,
					"arcs": [
						[
							6714,
							6715,
							6716,
							6717,
							6718,
							6719
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12001,
					"arcs": [
						[
							-3537,
							6720,
							-2935,
							6721,
							-6624,
							6722,
							-4464
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8029,
					"arcs": [
						[
							-6301,
							6723,
							-3767
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1051,
					"arcs": [
						[
							6724,
							6725,
							-6314,
							-4926,
							6726,
							6727
						]
					]
				},
				{
					"type": "Polygon",
					"id": 9007,
					"arcs": [
						[
							-5464,
							6728,
							-5649,
							-6656
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1021,
					"arcs": [
						[
							-51,
							6729,
							6730,
							-6728,
							6731,
							-4932,
							-2085
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39173,
					"arcs": [
						[
							-6139,
							-326,
							-3655,
							6732,
							-2016,
							-1024
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20011,
					"arcs": [
						[
							-1210,
							-1202,
							-716,
							-3570,
							6733
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48497,
					"arcs": [
						[
							6734,
							-4431,
							-1487,
							-4316,
							-1752,
							6735
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48101,
					"arcs": [
						[
							-3148,
							-3169,
							-6120,
							6736,
							-780,
							-1833
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48103,
					"arcs": [
						[
							6737,
							6738,
							6739,
							6740,
							6741
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27069,
					"arcs": [
						[
							6742,
							6743,
							-3720,
							6744
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41057,
					"arcs": [
						[
							6745,
							6746,
							-4310,
							6747,
							-6141,
							6748
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42035,
					"arcs": [
						[
							6749,
							-727,
							6750,
							6751,
							-5325,
							6752
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54001,
					"arcs": [
						[
							6753,
							6754,
							6755,
							6756,
							6757,
							-2116
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31105,
					"arcs": [
						[
							6758,
							-2686,
							-3377,
							6759,
							6760
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38025,
					"arcs": [
						[
							-5594,
							-5254,
							-6213,
							-1960,
							-1018,
							6761
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47003,
					"arcs": [
						[
							6762,
							-5338,
							-5358,
							6763,
							-4867
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35027,
					"arcs": [
						[
							-4834,
							6764,
							-656,
							-5212,
							6765,
							-3682,
							-1131
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47013,
					"arcs": [
						[
							6766,
							-5748,
							6767,
							6768,
							6769,
							6770
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18181,
					"arcs": [
						[
							6771,
							6772,
							6773,
							6774,
							-2657,
							-6643
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18157,
					"arcs": [
						[
							-6775,
							6775,
							-4780,
							6776,
							-4791,
							-2194,
							-2658
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21047,
					"arcs": [
						[
							6777,
							-3932,
							-1521,
							-2558,
							-5188,
							6778,
							-2745
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38085,
					"arcs": [
						[
							6779,
							-5218,
							-3628,
							-4424,
							-6134
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21151,
					"arcs": [
						[
							-5121,
							6780,
							6781,
							-6085,
							-2715,
							-5087,
							6782
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13321,
					"arcs": [
						[
							6783,
							6784,
							6785,
							6786,
							-3908,
							-5073,
							-2594
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20147,
					"arcs": [
						[
							-471,
							6787,
							6788,
							6789,
							-3099,
							-824
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42063,
					"arcs": [
						[
							-6565,
							6790,
							6791,
							-6588,
							-5320
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17093,
					"arcs": [
						[
							-2230,
							6792,
							-6260,
							-997,
							-690,
							-2947
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18089,
					"arcs": [
						[
							-6259,
							6793,
							6794,
							6795,
							-6640,
							-2807,
							-1799
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17097,
					"arcs": [
						[
							-3857,
							6796,
							6797,
							-13
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17139,
					"arcs": [
						[
							6798,
							6799,
							6800,
							6801,
							-4773
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21105,
					"arcs": [
						[
							-4646,
							-4237,
							6802,
							6803,
							6804,
							6805
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20031,
					"arcs": [
						[
							-68,
							6806,
							-3922,
							-1680,
							6807,
							-1442
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17029,
					"arcs": [
						[
							6808,
							6809,
							6810,
							6811,
							6812,
							-6801
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17023,
					"arcs": [
						[
							6813,
							-305,
							-5377,
							6814,
							-3310,
							6815,
							-6811
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37017,
					"arcs": [
						[
							6816,
							6817,
							6818,
							-1947,
							6819
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20207,
					"arcs": [
						[
							-6808,
							-1212,
							6820,
							-1443
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19189,
					"arcs": [
						[
							6821,
							6822,
							-1491,
							-2598,
							-580
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17041,
					"arcs": [
						[
							6823,
							-4778,
							6824,
							-6809,
							-6800
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37163,
					"arcs": [
						[
							6825,
							-5192,
							6826,
							-5590,
							6827,
							-6818,
							6828
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26059,
					"arcs": [
						[
							6829,
							-5487,
							-549,
							6830,
							6831,
							6832,
							6833
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30009,
					"arcs": [
						[
							-5206,
							6834,
							6835,
							6836,
							-1655,
							-5529
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27073,
					"arcs": [
						[
							6837,
							-509,
							6838,
							6839,
							-839,
							6840
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51087,
					"arcs": [
						[
							6841,
							6842,
							6843,
							6844,
							6845,
							6846,
							6847
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33011,
					"arcs": [
						[
							-4576,
							6848,
							6849,
							6850,
							6851,
							-6476,
							-5928
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42037,
					"arcs": [
						[
							6852,
							-1369,
							-4100,
							6853,
							6854,
							-1298
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48067,
					"arcs": [
						[
							6855,
							6856,
							6857,
							6858,
							-2045
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19193,
					"arcs": [
						[
							6859,
							-2606,
							-3256,
							6860,
							6861,
							-6497,
							6862
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47061,
					"arcs": [
						[
							-5342,
							6863,
							6864,
							6865,
							6866
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21051,
					"arcs": [
						[
							-2719,
							6867,
							-3885,
							6868,
							6869,
							6870,
							-6094
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51036,
					"arcs": [
						[
							-6844,
							6871,
							-4444,
							6872,
							6873,
							6874,
							6875
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42069,
					"arcs": [
						[
							-3398,
							-3283,
							6876,
							-4407,
							-4096
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42077,
					"arcs": [
						[
							6877,
							6878,
							-6524,
							6879,
							-4861,
							6880
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29107,
					"arcs": [
						[
							6881,
							6882,
							6883,
							-2819,
							-2349,
							-2737
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42083,
					"arcs": [
						[
							-3269,
							-2626,
							-729,
							6884,
							-803,
							-1397
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29119,
					"arcs": [
						[
							-3596,
							-1634,
							6885,
							6886,
							6887
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42087,
					"arcs": [
						[
							-5327,
							6888,
							-4103,
							-3709,
							6889
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29151,
					"arcs": [
						[
							-1216,
							6890,
							-4829,
							6891,
							-128,
							-6408
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38105,
					"arcs": [
						[
							6892,
							-3067,
							-5596,
							6893,
							-5870,
							6894
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47157,
					"arcs": [
						[
							6895,
							6896,
							6897,
							-4628,
							6898,
							6899,
							6900
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19183,
					"arcs": [
						[
							-1009,
							-6694,
							6901,
							-2248,
							-4723,
							-4725
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26061,
					"arcs": [
						[
							6902,
							6903,
							6904,
							6905,
							6906,
							6907
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47159,
					"arcs": [
						[
							6908,
							-6225,
							6909,
							-5406,
							6910,
							-6690
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 47167,
					"arcs": [
						[
							[
								6911,
								-4314,
								-4624,
								-6898,
								6912
							]
						],
						[
							[
								6913,
								-6896,
								6914
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56035,
					"arcs": [
						[
							6915,
							6916,
							6917,
							-5913
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48245,
					"arcs": [
						[
							6918,
							6919,
							6920,
							6921,
							-3433,
							-4879
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53039,
					"arcs": [
						[
							6922,
							-3463,
							-4609,
							-1981,
							-192,
							-2824,
							6923,
							-5314
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53077,
					"arcs": [
						[
							6924,
							6925,
							-5472,
							-5300,
							-3464,
							-6923,
							-5313
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47113,
					"arcs": [
						[
							-1244,
							6926,
							-914,
							-1596,
							6927,
							6928,
							-4311
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30003,
					"arcs": [
						[
							6929,
							6930,
							6931,
							-6474,
							6932,
							6933,
							-6836
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47049,
					"arcs": [
						[
							-974,
							6934,
							-6678,
							-5347,
							6935,
							-3130
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48073,
					"arcs": [
						[
							6936,
							-534,
							-5764,
							-6362,
							6937,
							-5427,
							-5292
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51149,
					"arcs": [
						[
							-6585,
							6938,
							-5180,
							6939,
							-6875,
							6940,
							-5611,
							6941
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29133,
					"arcs": [
						[
							-5663,
							-5036,
							-4647,
							-6806,
							6942,
							-5806,
							-4557
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22055,
					"arcs": [
						[
							6943,
							6944,
							6945,
							6946,
							6947
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51683,
					"arcs": [
						[
							-260,
							6948
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29135,
					"arcs": [
						[
							-1221,
							6949,
							-1213,
							-6407,
							6950
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42095,
					"arcs": [
						[
							6951,
							-4411,
							6952,
							-6518,
							-6879
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20125,
					"arcs": [
						[
							6953,
							6954,
							6955,
							-4742,
							-3630,
							-2418,
							6956
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21131,
					"arcs": [
						[
							-3884,
							6957,
							6958,
							-6869
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21133,
					"arcs": [
						[
							-3882,
							6959,
							6960,
							6961,
							6962
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20191,
					"arcs": [
						[
							-6587,
							6963,
							6964,
							6965,
							-1796,
							-792
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21139,
					"arcs": [
						[
							6966,
							6967,
							6968,
							6969,
							-3527,
							-932,
							6970
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27023,
					"arcs": [
						[
							-508,
							-1511,
							-5310,
							6971,
							-6839
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29173,
					"arcs": [
						[
							-6154,
							6972,
							6973,
							-6056,
							-1624
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30031,
					"arcs": [
						[
							6974,
							-4275,
							6975,
							-5527,
							-1661,
							6976,
							-6703,
							-3607
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49017,
					"arcs": [
						[
							-4436,
							-6234,
							-5421,
							-1108,
							6977,
							-1603
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56003,
					"arcs": [
						[
							-6837,
							-6934,
							6978,
							6979,
							6980,
							-1656
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 53053,
					"arcs": [
						[
							[
								6981,
								-5860,
								-6926,
								6982,
								6983
							]
						],
						[
							[
								6984,
								6985,
								6986
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6013,
					"arcs": [
						[
							-5951,
							6987,
							6988,
							-5765,
							6989
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16045,
					"arcs": [
						[
							6990,
							6991,
							-1770,
							-2742,
							-3010,
							-5282,
							6992
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16075,
					"arcs": [
						[
							6993,
							-6993,
							-5281,
							6994
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24033,
					"arcs": [
						[
							6995,
							6996,
							-3974,
							6997,
							-6720,
							6998,
							6999,
							-6183
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32011,
					"arcs": [
						[
							-5536,
							7000,
							7001,
							7002
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22061,
					"arcs": [
						[
							7003,
							7004,
							7005,
							-3967,
							-3584
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22111,
					"arcs": [
						[
							-6320,
							-3580,
							7006,
							-7004,
							-3583
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37199,
					"arcs": [
						[
							-5197,
							-5572,
							7007,
							-5623,
							7008
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48045,
					"arcs": [
						[
							-562,
							7009,
							-3149,
							-1831,
							7010,
							7011
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27105,
					"arcs": [
						[
							7012,
							7013,
							7014,
							-2171,
							-5640,
							-461
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21145,
					"arcs": [
						[
							7015,
							7016,
							-6971,
							-931,
							-4234,
							-4645,
							-5035
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37037,
					"arcs": [
						[
							-3233,
							-2671,
							-238,
							-1506,
							7017,
							-3694,
							7018,
							-5241
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27045,
					"arcs": [
						[
							-1820,
							7019,
							7020,
							-2502,
							7021,
							-1663
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49011,
					"arcs": [
						[
							7022,
							7023,
							7024,
							-5357
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21159,
					"arcs": [
						[
							7025,
							-4755,
							-3472,
							7026,
							-3151,
							-4698
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37085,
					"arcs": [
						[
							-3695,
							-7018,
							-1505,
							-5193,
							-6826,
							7027,
							7028
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27063,
					"arcs": [
						[
							7029,
							-553,
							-1617,
							7030,
							7031,
							-2172,
							-7015
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49025,
					"arcs": [
						[
							-1604,
							-6978,
							-1117,
							-285,
							-3004,
							7032
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48251,
					"arcs": [
						[
							-1754,
							-4317,
							-1336,
							-4321,
							7033,
							-4115,
							7034
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55089,
					"arcs": [
						[
							7035,
							7036,
							7037,
							-928
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47147,
					"arcs": [
						[
							-1524,
							7038,
							7039,
							7040,
							7041,
							7042,
							-2559
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30045,
					"arcs": [
						[
							-4058,
							7043,
							-3045,
							7044,
							7045
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22031,
					"arcs": [
						[
							7046,
							-5499,
							-3644,
							-3961,
							7047,
							7048
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24005,
					"arcs": [
						[
							-5715,
							7049,
							7050,
							7051,
							-6716,
							7052,
							7053
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16079,
					"arcs": [
						[
							-3540,
							-4173,
							-6670,
							-721,
							7054,
							7055,
							7056
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24015,
					"arcs": [
						[
							-4620,
							7057,
							7058,
							7059,
							7060,
							7061
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37079,
					"arcs": [
						[
							-3125,
							7062,
							-4071,
							7063
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34019,
					"arcs": [
						[
							7064,
							-3680,
							-6348,
							7065,
							-6520
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5019,
					"arcs": [
						[
							7066,
							-210,
							7067,
							7068,
							-3073,
							-621
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37005,
					"arcs": [
						[
							7069,
							7070,
							7071,
							-4392
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37171,
					"arcs": [
						[
							7072,
							-6376,
							7073,
							-3215,
							-375,
							-4297,
							7074,
							-7071
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42099,
					"arcs": [
						[
							-3706,
							7075,
							7076,
							-6545
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5021,
					"arcs": [
						[
							7077,
							-3342,
							-4561,
							7078,
							7079
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49035,
					"arcs": [
						[
							-7024,
							7080,
							-981,
							-785,
							7081,
							7082
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54089,
					"arcs": [
						[
							7083,
							-4749,
							7084,
							7085,
							7086,
							7087
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37193,
					"arcs": [
						[
							7088,
							-4393,
							-7072,
							-7075,
							-4300,
							-6557,
							7089,
							-5221
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55055,
					"arcs": [
						[
							-2793,
							-1084,
							-1936,
							7090,
							-2998
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46051,
					"arcs": [
						[
							7091,
							7092,
							-6841,
							-838,
							-2283,
							-660
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46091,
					"arcs": [
						[
							7093,
							7094,
							-658,
							7095
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27025,
					"arcs": [
						[
							-5894,
							-6167,
							-4760,
							7096,
							-759,
							7097
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30059,
					"arcs": [
						[
							7098,
							-7045,
							-3049,
							-5398,
							-5528,
							-6976,
							-4274,
							-364
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48035,
					"arcs": [
						[
							-4116,
							-7034,
							-4324,
							7099,
							-251,
							-3409,
							-2497
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5091,
					"arcs": [
						[
							-6513,
							-4988,
							7100,
							7101,
							7102,
							-6857,
							7103
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16035,
					"arcs": [
						[
							7104,
							-7056,
							7105,
							-3999,
							-2273,
							-489,
							7106
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 37095,
					"arcs": [
						[
							[
								-6340,
								7107
							]
						],
						[
							[
								7108,
								7109,
								-6343,
								7110,
								-4386,
								-6674
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47065,
					"arcs": [
						[
							7111,
							7112,
							-5362,
							-1176,
							7113,
							7114,
							7115,
							7116,
							-5656,
							-5279
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19187,
					"arcs": [
						[
							7117,
							7118,
							-1733,
							-880,
							-1468,
							-1671,
							-5694
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17131,
					"arcs": [
						[
							-4179,
							-2490,
							-3077,
							7119,
							7120,
							7121,
							7122
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17147,
					"arcs": [
						[
							-626,
							-1722,
							-4779,
							-6824,
							-6799,
							-4772
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34021,
					"arcs": [
						[
							-7066,
							-6347,
							7123,
							-4374,
							7124,
							-6521
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31139,
					"arcs": [
						[
							7125,
							-6066,
							7126,
							-1309,
							-1619
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35017,
					"arcs": [
						[
							-3159,
							-3686,
							7127,
							-3610,
							7128
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35021,
					"arcs": [
						[
							-6126,
							7129,
							7130,
							7131,
							7132
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55065,
					"arcs": [
						[
							7133,
							7134,
							-4543,
							-5896,
							7135
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36047,
					"arcs": [
						[
							7136,
							-5974,
							7137
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51169,
					"arcs": [
						[
							7138,
							7139,
							7140,
							-4038,
							7141,
							-6603,
							7142
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29141,
					"arcs": [
						[
							-2821,
							-1222,
							-6951,
							-6410,
							7143,
							-5021
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5029,
					"arcs": [
						[
							-862,
							-2327,
							7144,
							-3870,
							-5920
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47045,
					"arcs": [
						[
							7145,
							7146,
							7147,
							7148,
							-1242,
							7149,
							7150
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27043,
					"arcs": [
						[
							-1538,
							-86,
							7151,
							-6822,
							-579,
							-1615
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27047,
					"arcs": [
						[
							-85,
							-801,
							-1665,
							-1488,
							-6823,
							-7152
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37125,
					"arcs": [
						[
							-5242,
							-7019,
							-3696,
							-7029,
							7152,
							-1516,
							7153,
							7154
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27053,
					"arcs": [
						[
							-3105,
							-762,
							7155,
							-3274,
							7156,
							-1013,
							-1823
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21213,
					"arcs": [
						[
							7157,
							7158,
							-5647,
							7159,
							-7040
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37153,
					"arcs": [
						[
							7160,
							-7154,
							-960,
							-4413,
							-6031
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48037,
					"arcs": [
						[
							-4356,
							-6514,
							-7104,
							-6856,
							-2044,
							7161
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47181,
					"arcs": [
						[
							-4112,
							7162,
							-5145,
							7163,
							-5154,
							-6607
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47183,
					"arcs": [
						[
							-6803,
							-4236,
							7164,
							-909,
							7165,
							7166
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55105,
					"arcs": [
						[
							-2999,
							-7091,
							-1939,
							-3088,
							-5564,
							7167
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16087,
					"arcs": [
						[
							7168,
							-6991,
							-6994,
							7169,
							7170
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24023,
					"arcs": [
						[
							7171,
							7172,
							7173,
							7174,
							7175,
							7176
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54077,
					"arcs": [
						[
							7177,
							-7177,
							7178,
							7179,
							-6755,
							7180,
							-481
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46023,
					"arcs": [
						[
							-2887,
							-3383,
							-3225,
							-2969,
							7181,
							-6011,
							7182,
							-6060,
							-3425
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37021,
					"arcs": [
						[
							-5624,
							-7008,
							-5576,
							7183,
							7184,
							-6441
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42107,
					"arcs": [
						[
							-6854,
							-4099,
							7185,
							-6881,
							-4864,
							-2532,
							7186,
							7187
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5031,
					"arcs": [
						[
							-6504,
							7188,
							-4566,
							7189,
							-54,
							7190
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35041,
					"arcs": [
						[
							7191,
							-4586,
							-6446,
							-1196,
							7192,
							-5213,
							-654
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31165,
					"arcs": [
						[
							-4882,
							-1264,
							7193,
							-1343,
							-6169,
							7194
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31167,
					"arcs": [
						[
							7195,
							-99,
							7196,
							-5569,
							-1310
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37023,
					"arcs": [
						[
							7197,
							-5224,
							7198,
							-1421,
							7199,
							7200,
							-5574
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36059,
					"arcs": [
						[
							7201,
							7202,
							-5972,
							7203
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31179,
					"arcs": [
						[
							-6065,
							-4572,
							7204,
							-94,
							-7196,
							-7127
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17031,
					"arcs": [
						[
							-14,
							-6798,
							7205,
							-6794,
							-6258,
							7206,
							-2228
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17043,
					"arcs": [
						[
							-7207,
							-6257,
							-6793,
							-2229
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17045,
					"arcs": [
						[
							7207,
							7208,
							-300,
							-6814,
							-6810,
							-6825
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17055,
					"arcs": [
						[
							7209,
							-4488,
							-336,
							-2850,
							-3804,
							-6709
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17059,
					"arcs": [
						[
							-4487,
							-6325,
							-6650,
							-3960,
							7210,
							-338
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17061,
					"arcs": [
						[
							7211,
							-2214,
							-5687,
							-2527,
							-6646,
							-5844
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48365,
					"arcs": [
						[
							-6115,
							7212,
							-7049,
							7213,
							-531
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27009,
					"arcs": [
						[
							-1875,
							-3103,
							-4820,
							-5232
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21237,
					"arcs": [
						[
							7214,
							7215,
							-3937,
							7216,
							-3414,
							7217
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45067,
					"arcs": [
						[
							-6664,
							-5776,
							7218,
							7219,
							-5333
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47187,
					"arcs": [
						[
							7220,
							7221,
							7222,
							7223,
							-4865,
							7224,
							-1902
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55117,
					"arcs": [
						[
							-1120,
							-741,
							7225,
							-7036,
							-927,
							-2221
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51013,
					"arcs": [
						[
							-6180,
							7226,
							7227,
							-6181,
							-1414
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56027,
					"arcs": [
						[
							-203,
							-733,
							-4883,
							-7195,
							-6168,
							-2600,
							-4684
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45071,
					"arcs": [
						[
							-5259,
							7228,
							-6667,
							7229,
							-4104,
							7230,
							7231
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24025,
					"arcs": [
						[
							-5714,
							-4621,
							-7062,
							7232,
							-7050
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46041,
					"arcs": [
						[
							-4426,
							7233,
							7234,
							-1895,
							-5601,
							7235
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47097,
					"arcs": [
						[
							-7150,
							-1246,
							-4315,
							-6912,
							7236
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46055,
					"arcs": [
						[
							-4142,
							7237,
							-5604,
							7238,
							7239,
							-6366
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39087,
					"arcs": [
						[
							-5631,
							7240,
							7241,
							7242,
							-4752,
							7243,
							-5750
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29181,
					"arcs": [
						[
							-2332,
							-3343,
							-7078,
							7244,
							7245
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42111,
					"arcs": [
						[
							-5322,
							-6591,
							-6575,
							7246,
							-7173,
							7247
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 48167,
					"arcs": [
						[
							[
								-3435,
								7248
							]
						],
						[
							[
								7249,
								-3843
							]
						],
						[
							[
								-3441,
								7250,
								-3841
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5045,
					"arcs": [
						[
							-7145,
							-2326,
							-3485,
							7251,
							-6495,
							7252,
							-3871
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31153,
					"arcs": [
						[
							-4224,
							7253,
							-4187,
							-5958,
							7254
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21011,
					"arcs": [
						[
							7255,
							-3642,
							-4811,
							7256,
							7257
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21013,
					"arcs": [
						[
							7258,
							-6870,
							-6959,
							7259,
							7260,
							7261,
							-5746
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37057,
					"arcs": [
						[
							-378,
							-1413,
							-5244,
							7262,
							7263,
							7264
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25001,
					"arcs": [
						[
							7265,
							7266,
							7267,
							-3979
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45083,
					"arcs": [
						[
							-5937,
							7268,
							7269,
							7270,
							-5257,
							7271
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56033,
					"arcs": [
						[
							-6933,
							-6473,
							-858,
							7272,
							-6979
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51093,
					"arcs": [
						[
							7273,
							7274,
							7275,
							-982,
							7276,
							-2499
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56037,
					"arcs": [
						[
							-6918,
							7277,
							7278,
							-3771,
							7279,
							-978,
							-438,
							-5914
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53003,
					"arcs": [
						[
							-617,
							-6406,
							7280,
							-4613
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47023,
					"arcs": [
						[
							-6928,
							-1595,
							-6606,
							7281,
							7282
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47109,
					"arcs": [
						[
							-7282,
							-6609,
							7283,
							7284
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19019,
					"arcs": [
						[
							7285,
							-2938,
							-1756,
							7286,
							-5116
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22119,
					"arcs": [
						[
							7287,
							-5267,
							-3586,
							-3966,
							7288
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47111,
					"arcs": [
						[
							-5645,
							-3165,
							-4147,
							-6223,
							-6909,
							-6689,
							7289
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37129,
					"arcs": [
						[
							7290,
							7291,
							-5618
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19023,
					"arcs": [
						[
							-2786,
							-5135,
							-5118,
							-1801,
							-2809
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46071,
					"arcs": [
						[
							-6367,
							-7240,
							7292,
							7293,
							7294,
							7295
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26023,
					"arcs": [
						[
							7296,
							-6834,
							7297,
							-3952,
							7298
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47139,
					"arcs": [
						[
							-4732,
							7299,
							-3623,
							-445,
							-5561,
							7300
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31007,
					"arcs": [
						[
							-1345,
							-142,
							-2682,
							-6759,
							7301,
							-6170
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51181,
					"arcs": [
						[
							-6941,
							-6874,
							7302,
							-7275,
							7303,
							-5612
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5051,
					"arcs": [
						[
							-5921,
							-3874,
							-4459,
							-206,
							7304
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29195,
					"arcs": [
						[
							7305,
							7306,
							7307,
							-1218,
							-2820,
							-6884
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31029,
					"arcs": [
						[
							7308,
							-1321,
							7309,
							7310,
							7311
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26131,
					"arcs": [
						[
							7312,
							-6908,
							7313,
							-5887
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37045,
					"arcs": [
						[
							-7200,
							-1420,
							7314,
							7315,
							7316,
							7317
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31057,
					"arcs": [
						[
							-7311,
							7318,
							7319,
							-1735,
							-1734,
							-2775,
							7320
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42121,
					"arcs": [
						[
							7321,
							-1399,
							7322,
							7323,
							7324,
							-4248
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21025,
					"arcs": [
						[
							-3415,
							-7217,
							-3936,
							7325,
							-3880,
							7326
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40103,
					"arcs": [
						[
							7327,
							7328,
							7329,
							-5150,
							7330,
							-1548
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21031,
					"arcs": [
						[
							-5496,
							7331,
							-5127,
							7332,
							7333,
							-3930
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46013,
					"arcs": [
						[
							-6132,
							7334,
							-7096,
							-657,
							-5262,
							-2867,
							-3301,
							-2153
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45001,
					"arcs": [
						[
							-6359,
							-5261,
							7335,
							7336,
							7337
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47131,
					"arcs": [
						[
							7338,
							-6804,
							-7167,
							7339,
							-7148,
							7340
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51043,
					"arcs": [
						[
							7341,
							7342,
							7343,
							-2062,
							7344
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12055,
					"arcs": [
						[
							7345,
							7346,
							-743,
							-2779,
							-1993
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5127,
					"arcs": [
						[
							7347,
							7348,
							-5923,
							7349,
							7350,
							7351
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1037,
					"arcs": [
						[
							7352,
							-3868,
							7353,
							7354,
							-6725,
							-6731
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12061,
					"arcs": [
						[
							7355,
							7356,
							7357,
							7358,
							-4897
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12111,
					"arcs": [
						[
							-7358,
							7359,
							7360,
							7361
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5131,
					"arcs": [
						[
							7362,
							7363,
							7364,
							7365,
							-7348,
							7366
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37161,
					"arcs": [
						[
							-7184,
							-5575,
							-7201,
							-7318,
							7367,
							-7269,
							-5936,
							7368
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32027,
					"arcs": [
						[
							-5965,
							7369,
							7370,
							7371
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50017,
					"arcs": [
						[
							-6021,
							-5433,
							-3451,
							7372,
							-6097
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51067,
					"arcs": [
						[
							-4676,
							-3813,
							7373,
							7374,
							7375,
							-5440
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55045,
					"arcs": [
						[
							-3000,
							-7168,
							-5563,
							-4538,
							-7135,
							7376
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48491,
					"arcs": [
						[
							7377,
							7378,
							7379,
							7380,
							-1924,
							7381
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32019,
					"arcs": [
						[
							7382,
							7383,
							7384,
							7385,
							7386,
							-5875,
							-1942
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13243,
					"arcs": [
						[
							7387,
							7388,
							-1844,
							-2818,
							7389,
							-818
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13159,
					"arcs": [
						[
							7390,
							-5105,
							7391,
							-6000,
							-5476,
							-1048
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19155,
					"arcs": [
						[
							7392,
							-4493,
							-3249,
							7393,
							-4183,
							-7254,
							-4223,
							7394
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48239,
					"arcs": [
						[
							-1792,
							-4320,
							7395,
							7396,
							7397,
							7398
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16073,
					"arcs": [
						[
							-5283,
							-3011,
							-1241,
							7399,
							-5530,
							-5963,
							7400
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 53035,
					"arcs": [
						[
							[
								-6986,
								7401,
								7402
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12131,
					"arcs": [
						[
							-3750,
							-3178,
							7403,
							7404,
							7405,
							7406,
							-5555
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13201,
					"arcs": [
						[
							-2142,
							-4536,
							7407,
							-3552
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13235,
					"arcs": [
						[
							-4904,
							-5096,
							7408,
							7409,
							-5039
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13275,
					"arcs": [
						[
							-3910,
							7410,
							7411,
							7412,
							7413,
							-2158
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13287,
					"arcs": [
						[
							7414,
							7415,
							-3831,
							-1955,
							7416,
							-6785
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34023,
					"arcs": [
						[
							-6346,
							-6351,
							-6283,
							7417,
							-4370,
							-7124
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31049,
					"arcs": [
						[
							-1392,
							7418,
							-1324,
							7419,
							-2683
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13297,
					"arcs": [
						[
							-1850,
							-2569,
							7420,
							-5101,
							7421,
							7422
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29089,
					"arcs": [
						[
							7423,
							7424,
							7425,
							-1219,
							-7308
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34013,
					"arcs": [
						[
							7426,
							7427,
							7428,
							-6349,
							-3677
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13309,
					"arcs": [
						[
							7429,
							7430,
							-4474,
							7431,
							7432,
							7433
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13311,
					"arcs": [
						[
							7434,
							7435,
							7436,
							7437,
							7438
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13125,
					"arcs": [
						[
							-3899,
							7439,
							-3498,
							-6245
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13209,
					"arcs": [
						[
							7440,
							7441,
							-7432,
							-4473
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48405,
					"arcs": [
						[
							7442,
							7443,
							-5414,
							-6363,
							-5762
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20043,
					"arcs": [
						[
							7444,
							-5866,
							7445,
							7446,
							-5739,
							-6577
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13255,
					"arcs": [
						[
							7447,
							7448,
							-4479,
							-1051,
							-5005,
							7449,
							7450,
							-868
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40055,
					"arcs": [
						[
							-2679,
							7451,
							-5701,
							7452
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40049,
					"arcs": [
						[
							7453,
							-4153,
							-2076,
							-2067,
							-388,
							-2920
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48449,
					"arcs": [
						[
							7454,
							-2049,
							-5411,
							-2032
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40071,
					"arcs": [
						[
							-6965,
							7455,
							7456,
							-7328,
							-1547,
							7457
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41045,
					"arcs": [
						[
							7458,
							-7170,
							-6995,
							-5284,
							-7401,
							-5962,
							7459,
							-4857
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22023,
					"arcs": [
						[
							7460,
							-4195,
							7461,
							7462,
							7463,
							-6921
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40023,
					"arcs": [
						[
							-4087,
							-2083,
							-4358,
							7464,
							-3847,
							7465
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51009,
					"arcs": [
						[
							-5469,
							7466,
							-5439,
							7467,
							-2073,
							-3810
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 53061,
					"arcs": [
						[
							[
								7468,
								7469,
								-3209,
								-5859,
								7470,
								7471
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28001,
					"arcs": [
						[
							7472,
							-3988,
							7473,
							-5797,
							-5813
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28005,
					"arcs": [
						[
							7474,
							-2632,
							7475,
							7476,
							-595,
							7477,
							-5799
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13175,
					"arcs": [
						[
							-3889,
							7478,
							-4475,
							-7431,
							7479,
							-5094
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13167,
					"arcs": [
						[
							-3500,
							7480,
							7481,
							-7479,
							-3888
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13133,
					"arcs": [
						[
							7482,
							7483,
							-4232,
							-6244,
							7484,
							-5103
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2016,
					"arcs": [
						[
							[
								7485
							]
						],
						[
							[
								7486
							]
						],
						[
							[
								7487
							]
						],
						[
							[
								7488
							]
						],
						[
							[
								7489
							]
						],
						[
							[
								7490
							]
						],
						[
							[
								7491
							]
						],
						[
							[
								7492
							]
						],
						[
							[
								7493
							]
						],
						[
							[
								7494
							]
						],
						[
							[
								7495
							]
						],
						[
							[
								7496
							]
						],
						[
							[
								7497
							]
						],
						[
							[
								7498
							]
						],
						[
							[
								7499
							]
						],
						[
							[
								7500
							]
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2100,
					"arcs": [
						[
							[
								-4761,
								7501,
								-4163,
								7502,
								-1577,
								7503
							],
							[
								-1572
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5095,
					"arcs": [
						[
							-5992,
							7504,
							-3449,
							7505,
							7506,
							7507
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48467,
					"arcs": [
						[
							-2959,
							7508,
							7509,
							7510,
							-5290,
							-5605
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40087,
					"arcs": [
						[
							-4091,
							-4854,
							-4148,
							-7454,
							-2919,
							7511
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36113,
					"arcs": [
						[
							7512,
							7513,
							-4845,
							7514
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36025,
					"arcs": [
						[
							7515,
							7516,
							7517,
							7518,
							-6356,
							7519,
							7520,
							7521
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22097,
					"arcs": [
						[
							7522,
							7523,
							7524,
							-6945,
							7525,
							-4262
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40113,
					"arcs": [
						[
							7526,
							-2420,
							-3633,
							-2056,
							7527,
							-7329,
							-7457
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40063,
					"arcs": [
						[
							-773,
							7528,
							7529,
							-4304,
							-4150,
							-4093
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51031,
					"arcs": [
						[
							-3811,
							-2074,
							-7468,
							-5438,
							7530,
							7531,
							7532
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40095,
					"arcs": [
						[
							-2070,
							7533,
							7534,
							7535,
							7536
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1103,
					"arcs": [
						[
							-2699,
							7537,
							-6193,
							-6176,
							7538
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48225,
					"arcs": [
						[
							-5428,
							-6938,
							-6365,
							-4505,
							7539,
							7540,
							-6539
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40121,
					"arcs": [
						[
							-7530,
							7541,
							7542,
							7543,
							-2079,
							-4086,
							-4305
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40061,
					"arcs": [
						[
							7544,
							7545,
							7546,
							7547,
							7548,
							-7543
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28011,
					"arcs": [
						[
							7549,
							7550,
							7551,
							7552,
							-5012,
							-3365
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28021,
					"arcs": [
						[
							7553,
							-3663,
							-4287,
							-3985,
							7554
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28025,
					"arcs": [
						[
							7555,
							-5796,
							-5803,
							7556,
							-4227
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5117,
					"arcs": [
						[
							7557,
							-5993,
							-7508,
							7558,
							-6491
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5107,
					"arcs": [
						[
							-7506,
							-3448,
							7559,
							7560,
							-7551,
							7561,
							7562
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2060,
					"arcs": [
						[
							7563,
							7564
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48423,
					"arcs": [
						[
							7565,
							-4126,
							7566,
							-535,
							-6937,
							-5291,
							-7511
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22107,
					"arcs": [
						[
							7567,
							-5730,
							7568,
							-5725,
							7569,
							-7555,
							-3989,
							-7473,
							-5812,
							7570
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47103,
					"arcs": [
						[
							-4868,
							-6764,
							-5360,
							7571,
							7572,
							-2697,
							-4047
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36007,
					"arcs": [
						[
							-2039,
							7573,
							-7522,
							7574,
							-3281,
							7575
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54009,
					"arcs": [
						[
							7576,
							-6043,
							-2765,
							7577
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39013,
					"arcs": [
						[
							-2014,
							7578,
							7579,
							-2768,
							7580,
							7581,
							7582
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40079,
					"arcs": [
						[
							-7548,
							7583,
							-7367,
							-7352,
							7584,
							-4352,
							-2081,
							7585
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54053,
					"arcs": [
						[
							-5942,
							7586,
							7587,
							7588,
							7589
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37099,
					"arcs": [
						[
							-6443,
							-6391,
							-5777,
							7590,
							7591
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54063,
					"arcs": [
						[
							-7085,
							-4748,
							7592,
							7593,
							7594
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54079,
					"arcs": [
						[
							7595,
							7596,
							-5674,
							7597,
							-7588
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55137,
					"arcs": [
						[
							-1040,
							-412,
							-4337,
							7598,
							-3315,
							7599
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54081,
					"arcs": [
						[
							7600,
							7601,
							-7088,
							7602,
							7603,
							7604
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54109,
					"arcs": [
						[
							7605,
							7606,
							-7604,
							7607,
							7608,
							-3468
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34037,
					"arcs": [
						[
							-3422,
							-5543,
							7609,
							-3675,
							7610,
							-4409
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2070,
					"arcs": [
						[
							[
								7611,
								7612,
								7613
							]
						],
						[
							[
								7614
							]
						],
						[
							[
								7615,
								7616
							]
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2261,
					"arcs": [
						[
							[
								7617
							]
						],
						[
							[
								7618
							]
						],
						[
							[
								7619,
								7620,
								7621,
								-4965,
								7622,
								-1864,
								-5010
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34017,
					"arcs": [
						[
							7623,
							7624,
							7625,
							-6281,
							-6350,
							-7429
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37173,
					"arcs": [
						[
							-4632,
							-6444,
							-7592,
							7626,
							-4015,
							-6298
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48313,
					"arcs": [
						[
							-6540,
							-7541,
							7627,
							7628,
							-4885
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51047,
					"arcs": [
						[
							7629,
							-2182,
							7630,
							-5423,
							-4326,
							7631
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51061,
					"arcs": [
						[
							-7344,
							7632,
							7633,
							-2183,
							-7630,
							7634,
							-2063
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54011,
					"arcs": [
						[
							7635,
							-7589,
							-7598,
							-5673,
							-4753,
							-7243
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42059,
					"arcs": [
						[
							-6048,
							7636,
							-479,
							7637,
							7638
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54051,
					"arcs": [
						[
							-7581,
							-2767,
							-6049,
							-7639,
							7639,
							7640
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1065,
					"arcs": [
						[
							-5917,
							-53,
							-2088,
							7641,
							7642
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28037,
					"arcs": [
						[
							-3987,
							-2633,
							-7475,
							-5798,
							-7474
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53041,
					"arcs": [
						[
							7643,
							7644,
							-6983,
							-6925,
							-5312,
							7645,
							7646,
							7647
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28041,
					"arcs": [
						[
							-4218,
							7648,
							7649,
							-833,
							7650
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 28047,
					"arcs": [
						[
							[
								7651
							]
						],
						[
							[
								7652,
								-5525,
								7653,
								7654
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54067,
					"arcs": [
						[
							7655,
							-4680,
							-2129,
							-4745,
							7656,
							7657
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18135,
					"arcs": [
						[
							-3034,
							7658,
							-4181,
							-2972,
							7659
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56013,
					"arcs": [
						[
							-1659,
							-3266,
							7660,
							-1653,
							7661,
							-7278,
							-6917,
							7662
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36061,
					"arcs": [
						[
							-7625,
							7663,
							-4013,
							-5970,
							-7137,
							7664
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27113,
					"arcs": [
						[
							-3723,
							-5509,
							7665,
							-2301,
							-2688,
							-2299
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5103,
					"arcs": [
						[
							-3074,
							-7069,
							7666,
							7667,
							-6317,
							-5265
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40013,
					"arcs": [
						[
							-7535,
							7668,
							-4088,
							-7466,
							-3846,
							7669,
							7670
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36115,
					"arcs": [
						[
							7671,
							-6023,
							-5305,
							7672,
							-5931,
							-4846,
							-7514
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48471,
					"arcs": [
						[
							-7540,
							-4509,
							-5374,
							7673,
							7674,
							-7628
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51157,
					"arcs": [
						[
							-2064,
							-7635,
							-7632,
							-4325,
							7675
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39167,
					"arcs": [
						[
							-1879,
							7676,
							7677,
							-3855,
							7678,
							7679,
							-34
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1099,
					"arcs": [
						[
							-2425,
							7680,
							7681,
							-5164,
							-147,
							7682
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51027,
					"arcs": [
						[
							-3470,
							7683,
							7684,
							7685,
							7686,
							7687
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12099,
					"arcs": [
						[
							7688,
							7689,
							-2002,
							7690
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13033,
					"arcs": [
						[
							7691,
							-5032,
							7692,
							-5699,
							-6288,
							7693,
							-488,
							7694
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48309,
					"arcs": [
						[
							-4323,
							-1916,
							-1541,
							7695,
							-252,
							-7100
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1081,
					"arcs": [
						[
							-1713,
							-3796,
							7696,
							-4522,
							-6316,
							7697
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 6041,
					"arcs": [
						[
							[
								7698,
								7699
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51053,
					"arcs": [
						[
							7700,
							7701,
							-6586,
							-6942,
							-5610,
							7702,
							7703,
							-6630
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45029,
					"arcs": [
						[
							-6370,
							7704,
							-6220,
							-6528,
							7705,
							-6434,
							7706
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12031,
					"arcs": [
						[
							7707,
							7708,
							7709,
							7710,
							7711
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39093,
					"arcs": [
						[
							7712,
							7713,
							7714,
							7715,
							7716,
							-5628
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38099,
					"arcs": [
						[
							-2234,
							7717,
							-3725,
							7718,
							-3013,
							-4302
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12067,
					"arcs": [
						[
							7719,
							-3492,
							-4463,
							7720,
							7721
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35061,
					"arcs": [
						[
							-4841,
							-4835,
							-1129,
							-3386
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17057,
					"arcs": [
						[
							-3022,
							7722,
							-3079,
							7723,
							7724,
							-4907,
							-1190
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26025,
					"arcs": [
						[
							-2458,
							-1476,
							-5488,
							-6830,
							-7297,
							-1495
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2090,
					"arcs": [
						[
							7725,
							7726,
							7727
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26027,
					"arcs": [
						[
							-6413,
							7728,
							7729,
							7730,
							-3251
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51045,
					"arcs": [
						[
							7731,
							7732,
							-4674,
							-4669,
							7733,
							-7594
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54057,
					"arcs": [
						[
							7734,
							7735,
							7736,
							-7175
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51165,
					"arcs": [
						[
							7737,
							-6189,
							7738,
							-3821,
							7739,
							7740,
							-4499
						],
						[
							-1422
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13037,
					"arcs": [
						[
							-819,
							-7390,
							-2817,
							-5074,
							-2138,
							-3551
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48333,
					"arcs": [
						[
							-1907,
							-258,
							-3410,
							-1027,
							7741
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16041,
					"arcs": [
						[
							7742,
							7743,
							-6542,
							7744,
							-3799
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6101,
					"arcs": [
						[
							-4970,
							-6381,
							-1702,
							7745,
							-4397,
							-6415
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8095,
					"arcs": [
						[
							7746,
							-1322,
							-7309,
							7747,
							-3379
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13043,
					"arcs": [
						[
							7748,
							7749,
							-4338,
							7750
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19097,
					"arcs": [
						[
							-6449,
							-5898,
							7751,
							-6261,
							-61
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28007,
					"arcs": [
						[
							-3942,
							-2101,
							7752,
							7753,
							-2863,
							7754,
							7755
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28019,
					"arcs": [
						[
							-4229,
							7756,
							7757,
							-7753,
							-2100
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 44009,
					"arcs": [
						[
							[
								7758
							]
						],
						[
							[
								-5462,
								-476,
								7759
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42007,
					"arcs": [
						[
							7760,
							7761,
							7762,
							7763,
							-6045,
							7764
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46109,
					"arcs": [
						[
							7765,
							7766,
							7767,
							-7092,
							-659,
							-7095
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46102,
					"arcs": [
						[
							-6368,
							-7296,
							7768,
							7769,
							-3189,
							-1261,
							-4881,
							-731
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42039,
					"arcs": [
						[
							7770,
							-1400,
							-7322,
							-4247,
							7771,
							-4404
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13271,
					"arcs": [
						[
							7772,
							-7434,
							7773,
							-2840,
							-3830,
							7774
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12047,
					"arcs": [
						[
							7775,
							-5558,
							-3533,
							-3489,
							7776
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13185,
					"arcs": [
						[
							7777,
							-3894,
							-3495,
							-5559,
							-7776,
							7778,
							7779
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13263,
					"arcs": [
						[
							7780,
							7781,
							-5068,
							7782,
							7783,
							7784,
							-3794
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 36103,
					"arcs": [
						[
							[
								7785
							]
						],
						[
							[
								-7202,
								7786
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1129,
					"arcs": [
						[
							-4521,
							7787,
							-145,
							7788,
							-7649,
							-4217
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54083,
					"arcs": [
						[
							-6757,
							7789,
							7790,
							-4496,
							-849,
							-2127,
							7791
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5003,
					"arcs": [
						[
							-4991,
							-3291,
							-3371,
							-3576,
							-6319
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28053,
					"arcs": [
						[
							7792,
							7793,
							7794,
							-5514,
							-5017,
							-5014
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48361,
					"arcs": [
						[
							-5417,
							-6123,
							-4196,
							-7461,
							-6920,
							7795
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13045,
					"arcs": [
						[
							-953,
							7796,
							-5100,
							-6072,
							-872,
							-2546,
							7797,
							7798
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16057,
					"arcs": [
						[
							-3541,
							-7057,
							-7105,
							7799,
							-6404
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16081,
					"arcs": [
						[
							-6705,
							7800,
							-6248,
							7801
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51081,
					"arcs": [
						[
							7802,
							-7703,
							-5614,
							7803,
							-6034
						],
						[
							-1103
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48371,
					"arcs": [
						[
							7804,
							7805,
							-6741,
							7806,
							-5852,
							7807,
							7808
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29021,
					"arcs": [
						[
							-7447,
							7809,
							-643,
							-2123,
							7810,
							-5740
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29165,
					"arcs": [
						[
							-7811,
							-2122,
							-3990,
							7811,
							7812,
							-5741
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39061,
					"arcs": [
						[
							7813,
							-2000,
							7814,
							7815,
							-4651,
							-5387,
							-3555
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30021,
					"arcs": [
						[
							7816,
							7817,
							7818,
							-6158
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30109,
					"arcs": [
						[
							-7818,
							7819,
							7820,
							-2447,
							7821,
							7822
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 15007,
					"arcs": [
						[
							[
								7823
							]
						],
						[
							[
								7824
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42033,
					"arcs": [
						[
							7825,
							-805,
							7826,
							-6753,
							-5330,
							7827,
							-6589,
							-6792
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47141,
					"arcs": [
						[
							-6224,
							-3131,
							-6936,
							-5346,
							-6683,
							-5407,
							-6910
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51185,
					"arcs": [
						[
							-7685,
							7828,
							7829,
							7830,
							-4329,
							7831
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28143,
					"arcs": [
						[
							7832,
							7833,
							-3658,
							-3053,
							-2103,
							7834,
							-7560,
							-3447
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28159,
					"arcs": [
						[
							-7758,
							7835,
							-2612,
							-2689,
							-2130,
							-7754
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29045,
					"arcs": [
						[
							-2835,
							-5385,
							7836,
							7837,
							7838,
							-5682
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48377,
					"arcs": [
						[
							7839,
							7840,
							7841
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51083,
					"arcs": [
						[
							7842,
							-7532,
							7843,
							7844,
							-6500,
							7845,
							-5184
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19149,
					"arcs": [
						[
							-5642,
							-2607,
							-6860,
							7846
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48385,
					"arcs": [
						[
							7847,
							7848,
							7849,
							-2940
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13073,
					"arcs": [
						[
							-5837,
							7850,
							7851,
							-5029,
							7852
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30083,
					"arcs": [
						[
							-6157,
							-5871,
							7853,
							-7820,
							-7817
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49003,
					"arcs": [
						[
							-6385,
							-3801,
							7854,
							-5353,
							7855,
							-5533
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48135,
					"arcs": [
						[
							7856,
							-3062,
							7857,
							-6738,
							7858,
							7859
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48187,
					"arcs": [
						[
							-6232,
							-5372,
							-1095,
							7860,
							7861,
							7862
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47091,
					"arcs": [
						[
							-4041,
							7863,
							7864,
							-4395,
							7865,
							7866,
							-6371
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12019,
					"arcs": [
						[
							-7711,
							7867,
							7868,
							-2933,
							7869
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12029,
					"arcs": [
						[
							7870,
							-7721,
							-4466,
							7871,
							7872
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27021,
					"arcs": [
						[
							-3272,
							-5507,
							7873,
							7874,
							7875,
							-5230,
							7876,
							-1513
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39171,
					"arcs": [
						[
							-6832,
							7877,
							-1026,
							-5756,
							7878,
							7879
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29197,
					"arcs": [
						[
							-3181,
							-1705,
							-2838,
							-6156,
							-3293
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30025,
					"arcs": [
						[
							7880,
							-7822,
							-2446,
							-4603,
							-4741,
							-6687,
							7881,
							7882
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30091,
					"arcs": [
						[
							7883,
							7884,
							-6895,
							-5869,
							7885
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54017,
					"arcs": [
						[
							-3853,
							7886,
							-2119,
							-4135,
							-5672,
							-3825
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30105,
					"arcs": [
						[
							7887,
							7888,
							-5873,
							-6160,
							-646,
							7889
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51015,
					"arcs": [
						[
							7890,
							-4500,
							-7741,
							7891,
							7892,
							-5467,
							7893
						],
						[
							-1432
						],
						[
							7894
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8115,
					"arcs": [
						[
							-2684,
							-7420,
							-1323,
							-7747,
							-3378
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13081,
					"arcs": [
						[
							-5041,
							7895,
							-7415,
							-6784,
							-2593,
							7896
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 12101,
					"arcs": [
						[
							[
								7897,
								7898,
								7899,
								7900,
								7901,
								7902
							]
						],
						[
							[
								7903,
								7904
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39141,
					"arcs": [
						[
							7905,
							-1884,
							7906,
							-2695,
							7907,
							-1886,
							7908
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8039,
					"arcs": [
						[
							-2379,
							7909,
							7910,
							7911
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13015,
					"arcs": [
						[
							-5669,
							-5047,
							-5681,
							7912,
							7913,
							-6711
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21227,
					"arcs": [
						[
							-5126,
							-4705,
							-5644,
							-7159,
							7914,
							-7333
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48403,
					"arcs": [
						[
							7915,
							-3964,
							-6121,
							-5415,
							-7444
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39147,
					"arcs": [
						[
							-6733,
							-3654,
							7916,
							7917,
							-2007,
							-2017
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48427,
					"arcs": [
						[
							-4516,
							7918,
							-3114,
							7919,
							7920
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49013,
					"arcs": [
						[
							-980,
							7921,
							7922,
							7923,
							7924,
							-787
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49015,
					"arcs": [
						[
							7925,
							7926,
							7927,
							-5420,
							-4941
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27071,
					"arcs": [
						[
							7928,
							-2763,
							7929,
							-5505,
							-4665
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30087,
					"arcs": [
						[
							-650,
							7930,
							-6475,
							-6932,
							7931,
							7932,
							7933,
							7934
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28027,
					"arcs": [
						[
							-7835,
							-2106,
							-4050,
							7935,
							-7552,
							-7561
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38005,
					"arcs": [
						[
							7936,
							-4303,
							-3016,
							7937,
							-2579,
							-3143
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38027,
					"arcs": [
						[
							-7938,
							-3015,
							-1366,
							-1314,
							-2580
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54107,
					"arcs": [
						[
							-35,
							-7680,
							7938,
							-3822,
							7939,
							7940,
							-5940
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54031,
					"arcs": [
						[
							7941,
							7942,
							-6190,
							-7738,
							-4498,
							7943
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54091,
					"arcs": [
						[
							7944,
							-482,
							-7181,
							-6754,
							-2115
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39051,
					"arcs": [
						[
							-6831,
							-548,
							-6137,
							-1022,
							-7878
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47011,
					"arcs": [
						[
							7945,
							-4733,
							-7301,
							-5560,
							7946,
							-7115
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 8123,
					"arcs": [
						[
							[
								7947
							]
						],
						[
							[
								7948,
								-6760,
								-3381,
								-2649,
								7949,
								7950,
								7951,
								-6455
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40057,
					"arcs": [
						[
							-2680,
							-7453,
							-5700,
							-6117,
							-3167,
							-1449
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13279,
					"arcs": [
						[
							-7441,
							7952,
							-4343,
							-6075,
							7953
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40085,
					"arcs": [
						[
							-2071,
							-7537,
							7954,
							-4429,
							7955,
							7956
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26151,
					"arcs": [
						[
							7957,
							7958,
							7959,
							7960,
							7961
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49019,
					"arcs": [
						[
							7962,
							7963,
							-571,
							-3769,
							-1110,
							-7928
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 48057,
					"arcs": [
						[
							[
								-6430,
								7964
							]
						],
						[
							[
								-7398,
								7965,
								7966,
								-6426,
								7967,
								-6198,
								7968
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49045,
					"arcs": [
						[
							-5534,
							-7856,
							-7025,
							-7083,
							7969,
							7970,
							7971
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49047,
					"arcs": [
						[
							-7923,
							7972,
							-3775,
							7973,
							-565,
							-7964,
							7974
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47115,
					"arcs": [
						[
							-6866,
							7975,
							-7112,
							-5278,
							-4155,
							7976
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40149,
					"arcs": [
						[
							-1683,
							-3745,
							7977,
							-2677
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20159,
					"arcs": [
						[
							-2244,
							-6466,
							-4915,
							-1977,
							-4796
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40131,
					"arcs": [
						[
							-3632,
							-4744,
							-4023,
							7978,
							-5597,
							-2058
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20209,
					"arcs": [
						[
							-7812,
							-3992,
							-2734,
							-3566,
							7979
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22093,
					"arcs": [
						[
							7980,
							7981,
							7982,
							7983
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 22109,
					"arcs": [
						[
							[
								7984
							]
						],
						[
							[
								7985
							]
						],
						[
							[
								-6581,
								7986,
								7987,
								7988
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41027,
					"arcs": [
						[
							-5315,
							-6924,
							-2823,
							7989,
							7990
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54027,
					"arcs": [
						[
							7991,
							-5908,
							7992,
							-7942,
							-7736
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47123,
					"arcs": [
						[
							7993,
							-6299,
							-4017,
							-3618,
							-7300,
							-4731
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12079,
					"arcs": [
						[
							7994,
							-7779,
							-7777,
							-3488,
							-7720,
							7995,
							7996
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48321,
					"arcs": [
						[
							-7966,
							-7397,
							7997,
							-3845,
							7998
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25015,
					"arcs": [
						[
							-4659,
							-6482,
							7999,
							8000
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17071,
					"arcs": [
						[
							8001,
							-7121,
							8002,
							-3020,
							8003,
							8004
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23011,
					"arcs": [
						[
							-5979,
							-5446,
							-3593,
							-6550,
							8005,
							-1205
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13005,
					"arcs": [
						[
							8006,
							-6077,
							8007,
							-3544,
							-2842
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51127,
					"arcs": [
						[
							8008,
							-4951,
							-4438,
							-6872,
							-6843,
							8009
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12109,
					"arcs": [
						[
							-7710,
							8010,
							-2134,
							8011,
							-7868
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13003,
					"arcs": [
						[
							-2844,
							-3549,
							-1930,
							-3493,
							-3893
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 53055,
					"arcs": [
						[
							[
								8012
							]
						],
						[
							[
								8013
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13103,
					"arcs": [
						[
							8014,
							8015,
							8016,
							-6533,
							8017,
							8018
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17195,
					"arcs": [
						[
							-6263,
							8019,
							-5113,
							-5484,
							8020,
							-2487,
							-4178
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39153,
					"arcs": [
						[
							8021,
							8022,
							8023,
							8024,
							8025
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13127,
					"arcs": [
						[
							-3506,
							8026,
							8027,
							8028,
							8029
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12119,
					"arcs": [
						[
							-6628,
							8030,
							8031,
							-7899,
							8032,
							-4959
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39155,
					"arcs": [
						[
							-3740,
							-4405,
							-7772,
							-4251,
							-2477,
							8033
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51005,
					"arcs": [
						[
							8034,
							-5465,
							8035,
							-7732,
							-7593,
							-4747
						],
						[
							-1940
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51071,
					"arcs": [
						[
							8036,
							-7086,
							-7595,
							-7734,
							-4668,
							-4944,
							8037
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51017,
					"arcs": [
						[
							-852,
							8038,
							-7894,
							-5466,
							-8035,
							-4746
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1117,
					"arcs": [
						[
							-6174,
							8039,
							-3869,
							-7353,
							-6730,
							-50
						]
					]
				},
				{
					"type": "Polygon",
					"id": 10001,
					"arcs": [
						[
							8040,
							8041,
							8042,
							8043,
							8044,
							8045
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18163,
					"arcs": [
						[
							8046,
							-6463,
							8047,
							-6648
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39071,
					"arcs": [
						[
							-2021,
							8048,
							-7909,
							-1890,
							8049,
							8050
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27075,
					"arcs": [
						[
							8051,
							-3134,
							8052,
							-2757
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 53057,
					"arcs": [
						[
							[
								8053
							]
						],
						[
							[
								-4919,
								8054,
								-3204,
								-7470,
								8055
							]
						],
						[
							[
								8056
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53065,
					"arcs": [
						[
							8057,
							-3040,
							8058,
							8059,
							-6105
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53067,
					"arcs": [
						[
							8060,
							8061,
							-6984,
							-7645,
							8062
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13137,
					"arcs": [
						[
							8063,
							-5784,
							8064,
							-747,
							8065,
							-7437,
							8066
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13187,
					"arcs": [
						[
							-448,
							8067,
							-7439,
							8068,
							8069
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17015,
					"arcs": [
						[
							-5897,
							-4541,
							-5114,
							-8020,
							-6262,
							-7752
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13147,
					"arcs": [
						[
							-5841,
							-5781,
							-6361,
							8070,
							8071
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48453,
					"arcs": [
						[
							8072,
							-7382,
							-1923,
							-1091,
							-5371,
							-2586
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28031,
					"arcs": [
						[
							-2574,
							-421,
							8073,
							-3332,
							-887,
							8074
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28045,
					"arcs": [
						[
							-4214,
							-7655,
							8075,
							8076
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28123,
					"arcs": [
						[
							-2865,
							-3354,
							-418,
							8077,
							8078
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53015,
					"arcs": [
						[
							-7646,
							-5311,
							-6101,
							8079,
							8080
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1079,
					"arcs": [
						[
							-6615,
							-5156,
							-2700,
							-7539,
							-6175,
							-2859,
							-3331
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8091,
					"arcs": [
						[
							-6304,
							-6308,
							-5001,
							-4532,
							8081
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8107,
					"arcs": [
						[
							8082,
							8083,
							-6239,
							-5994,
							-567,
							8084,
							-3773
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16023,
					"arcs": [
						[
							-1148,
							8085,
							-1259,
							8086,
							8087,
							-3337
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39005,
					"arcs": [
						[
							-7716,
							8088,
							8089,
							8090,
							-1374,
							-5246,
							8091
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29147,
					"arcs": [
						[
							-5381,
							-2266,
							-3600,
							8092,
							8093,
							-5864,
							8094
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40111,
					"arcs": [
						[
							-1675,
							-2060,
							-5600,
							8095,
							8096,
							-771
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39067,
					"arcs": [
						[
							-5236,
							-3700,
							8097,
							-7579,
							-2013
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13047,
					"arcs": [
						[
							-7117,
							8098,
							-5657
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13313,
					"arcs": [
						[
							-8099,
							-7116,
							-7947,
							-5562,
							-5044,
							-5658
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53017,
					"arcs": [
						[
							8099,
							-5296,
							-5471,
							-3206
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54003,
					"arcs": [
						[
							-5906,
							-6255,
							8100,
							8101
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28067,
					"arcs": [
						[
							-420,
							-2150,
							-4220,
							8102,
							-3333,
							-8074
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50015,
					"arcs": [
						[
							-330,
							-3453,
							-5432,
							-6208,
							-6336
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48457,
					"arcs": [
						[
							-6364,
							-5419,
							8103,
							-5578
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39151,
					"arcs": [
						[
							8104,
							-8024,
							8105,
							-2481,
							8106,
							-3697,
							-5235,
							8107
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13179,
					"arcs": [
						[
							8108,
							-6536,
							8109,
							8110,
							8111,
							-4340
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13183,
					"arcs": [
						[
							-8112,
							8112,
							-3504,
							-4341
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48469,
					"arcs": [
						[
							-2788,
							-1793,
							-7399,
							-7969,
							-6197,
							8113
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1115,
					"arcs": [
						[
							-3862,
							-4938,
							-3864,
							-8040,
							-6173,
							-6194
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5035,
					"arcs": [
						[
							-56,
							8114,
							-6915,
							-6901,
							8115,
							-7833,
							-3446,
							8116,
							-1860
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41007,
					"arcs": [
						[
							8117,
							8118,
							-6746,
							8119
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12059,
					"arcs": [
						[
							-3177,
							-3791,
							8120,
							-7404
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12133,
					"arcs": [
						[
							-8121,
							-3790,
							8121,
							-7405
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39081,
					"arcs": [
						[
							8122,
							8123,
							-7578,
							-2764,
							-7580,
							-8098,
							-3699
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37003,
					"arcs": [
						[
							-7090,
							-6556,
							8124,
							-5222
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37117,
					"arcs": [
						[
							-4080,
							-4383,
							-6675,
							-4384,
							8125,
							-3691
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28147,
					"arcs": [
						[
							-2630,
							-3230,
							-3300,
							8126,
							8127
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13291,
					"arcs": [
						[
							-3622,
							8128,
							8129,
							-7435,
							-8068,
							-447
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39001,
					"arcs": [
						[
							8130,
							-8050,
							-1889,
							-5634,
							-5904,
							8131
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48279,
					"arcs": [
						[
							-41,
							-2439,
							8132,
							8133,
							-6445
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31155,
					"arcs": [
						[
							8134,
							-4225,
							-7255,
							-5957,
							-2615,
							-2772
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54023,
					"arcs": [
						[
							-7176,
							-7737,
							-7944,
							-4497,
							-7791,
							8135,
							-7179
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54093,
					"arcs": [
						[
							-7180,
							-8136,
							-7790,
							-6756
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51023,
					"arcs": [
						[
							-7733,
							-8036,
							-5470,
							-3808,
							-4675
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31107,
					"arcs": [
						[
							-7183,
							-6010,
							-6439,
							-6067,
							-7126,
							-1618,
							-5176,
							-6061
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50013,
					"arcs": [
						[
							8136,
							-6337,
							-6206,
							8137
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31173,
					"arcs": [
						[
							-4571,
							-6498,
							-6862,
							8138,
							8139,
							-95,
							-7205
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13191,
					"arcs": [
						[
							-8113,
							-8111,
							8140,
							-8027,
							-3505
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13195,
					"arcs": [
						[
							-5842,
							-8072,
							8141,
							8142,
							-2985,
							8143,
							-750
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13199,
					"arcs": [
						[
							-869,
							-7451,
							8144,
							8145,
							-7781,
							-3793,
							8146
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48481,
					"arcs": [
						[
							-1568,
							8147,
							-3839,
							-7998,
							-7396,
							-4319
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13219,
					"arcs": [
						[
							-2568,
							-2987,
							8148,
							-7483,
							-5102,
							-7421
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13221,
					"arcs": [
						[
							-2986,
							-8143,
							8149,
							-3906,
							-4230,
							-7484,
							-8149
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39017,
					"arcs": [
						[
							-167,
							-2814,
							-2953,
							-2001,
							-7814,
							-2619
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13239,
					"arcs": [
						[
							8150,
							-7388,
							-817,
							8151
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39031,
					"arcs": [
						[
							8152,
							-5237,
							-2011,
							-1741,
							8153,
							-1376
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12065,
					"arcs": [
						[
							8154,
							-7413,
							8155,
							-7997,
							8156,
							8157,
							-4168
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12075,
					"arcs": [
						[
							-7872,
							-4465,
							-6723,
							-6623,
							-4962,
							8158
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41009,
					"arcs": [
						[
							8159,
							-8080,
							-6103,
							8160,
							8161,
							-8119
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12107,
					"arcs": [
						[
							-2934,
							-7869,
							-8012,
							-2137,
							8162,
							-6625,
							-6722
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12113,
					"arcs": [
						[
							-5167,
							-5557,
							8163,
							-3008
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23023,
					"arcs": [
						[
							-8006,
							-6552,
							8164,
							-5819,
							-1206
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47151,
					"arcs": [
						[
							8165,
							8166,
							-6771,
							8167,
							-6676,
							-6935,
							-973
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21221,
					"arcs": [
						[
							-3526,
							-2746,
							-6779,
							-5187,
							-1562,
							-934
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23031,
					"arcs": [
						[
							-4200,
							-5821,
							8168,
							8169,
							-4580,
							8170
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47021,
					"arcs": [
						[
							-7043,
							8171,
							-7222,
							8172,
							-2560
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18109,
					"arcs": [
						[
							8173,
							8174,
							8175,
							-216,
							8176,
							-5137,
							8177
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29019,
					"arcs": [
						[
							8178,
							-1628,
							8179,
							-1214,
							-6950,
							-1220,
							-7426
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18159,
					"arcs": [
						[
							-502,
							8180,
							-424,
							-4783,
							8181
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19057,
					"arcs": [
						[
							-2250,
							8182,
							-7122,
							-8002,
							8183
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33003,
					"arcs": [
						[
							-2556,
							-4201,
							-8171,
							-4579,
							-1305,
							8184
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19115,
					"arcs": [
						[
							-6693,
							8185,
							-4180,
							-7123,
							-8183,
							-2249,
							-6902
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6073,
					"arcs": [
						[
							8186,
							8187,
							8188,
							8189
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37043,
					"arcs": [
						[
							8190,
							8191,
							8192,
							-8129,
							-3621
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5033,
					"arcs": [
						[
							8193,
							8194,
							8195,
							-7364,
							8196,
							8197
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42127,
					"arcs": [
						[
							-3282,
							-7575,
							-7521,
							8198,
							-3424,
							-4408,
							-6877
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36077,
					"arcs": [
						[
							-4367,
							8199,
							8200,
							8201,
							8202,
							-7517,
							8203
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32017,
					"arcs": [
						[
							8204,
							8205,
							-4437,
							-1606,
							8206,
							-3002,
							8207,
							8208
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20103,
					"arcs": [
						[
							-5742,
							-7813,
							-7980,
							-3565,
							-4799,
							8209
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51073,
					"arcs": [
						[
							8210,
							8211,
							8212,
							8213,
							-4440,
							-4950
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37123,
					"arcs": [
						[
							-7263,
							-5243,
							-7155,
							-7161,
							8214
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5143,
					"arcs": [
						[
							8215,
							8216,
							-8194,
							8217
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47073,
					"arcs": [
						[
							-6604,
							-7142,
							-4044,
							8218,
							8219,
							-6596,
							-6229
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47179,
					"arcs": [
						[
							-4043,
							-6374,
							8220,
							8221,
							-8219
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30061,
					"arcs": [
						[
							-720,
							-4000,
							-7106,
							-7055
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51007,
					"arcs": [
						[
							-1638,
							-2212,
							8222,
							-7701,
							-6629,
							8223
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16065,
					"arcs": [
						[
							-6706,
							-7802,
							-6247,
							-1256
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8103,
					"arcs": [
						[
							-3774,
							-8085,
							-566,
							-7974
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37189,
					"arcs": [
						[
							-4394,
							-7089,
							-5220,
							8224,
							-7866
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45055,
					"arcs": [
						[
							-6110,
							-6601,
							-6658,
							8225,
							8226,
							8227,
							-6665
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41005,
					"arcs": [
						[
							8228,
							8229,
							-7990,
							-2828,
							-3171,
							-4308
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20161,
					"arcs": [
						[
							8230,
							8231,
							8232,
							8233,
							8234,
							-3916
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48419,
					"arcs": [
						[
							-7214,
							-7048,
							-3965,
							-7916,
							-7443,
							-5761,
							-532
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37049,
					"arcs": [
						[
							-4073,
							8235,
							-4389,
							8236,
							8237,
							8238,
							8239
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45043,
					"arcs": [
						[
							-7219,
							-5775,
							8240,
							-6526,
							8241,
							8242
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48487,
					"arcs": [
						[
							-6118,
							-5704,
							8243,
							-5788,
							-776,
							8244
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51069,
					"arcs": [
						[
							-7993,
							-5907,
							-8102,
							-7345,
							-2061,
							-6187,
							-7943
						],
						[
							-1678
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18081,
					"arcs": [
						[
							8245,
							-4491,
							8246,
							-217,
							-8176
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12089,
					"arcs": [
						[
							8247,
							8248,
							-7708,
							8249,
							8250
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17119,
					"arcs": [
						[
							-2525,
							-878,
							8251,
							-2638,
							8252,
							8253,
							-4550,
							8254,
							-6644
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19071,
					"arcs": [
						[
							-5959,
							-4185,
							-5383,
							8255,
							8256
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21053,
					"arcs": [
						[
							8257,
							-1101,
							8258,
							-971,
							-4145
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48219,
					"arcs": [
						[
							-8134,
							-2468,
							-3018,
							-1198
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48437,
					"arcs": [
						[
							-3257,
							-563,
							-7012,
							8259,
							8260,
							-2437
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13063,
					"arcs": [
						[
							8261,
							-4480,
							-7449,
							8262,
							-6070
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39049,
					"arcs": [
						[
							-900,
							-6216,
							8263,
							8264,
							-1881,
							8265
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48027,
					"arcs": [
						[
							-253,
							-7696,
							-1545,
							8266,
							-7379,
							8267,
							-1029
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13229,
					"arcs": [
						[
							-8008,
							-6076,
							-3508,
							8268,
							-3545
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38081,
					"arcs": [
						[
							8269,
							8270,
							-7094,
							-7335,
							-6131
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13231,
					"arcs": [
						[
							-7450,
							-5008,
							8271,
							-8145
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39029,
					"arcs": [
						[
							-2480,
							8272,
							-7761,
							8273,
							-8123,
							-3698,
							-8107
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6045,
					"arcs": [
						[
							-5771,
							8274,
							8275,
							-6489,
							8276,
							8277,
							8278
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16011,
					"arcs": [
						[
							8279,
							-8087,
							-1258,
							-6251,
							8280,
							8281,
							8282
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31021,
					"arcs": [
						[
							-8140,
							8283,
							8284,
							8285,
							8286,
							-96
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55001,
					"arcs": [
						[
							8287,
							-1041,
							-7600,
							-3318,
							8288,
							8289
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6063,
					"arcs": [
						[
							-2280,
							8290,
							-1686,
							-6380,
							-4968,
							8291
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18093,
					"arcs": [
						[
							-4788,
							8292,
							-5691,
							-6150,
							-3197,
							-754
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29039,
					"arcs": [
						[
							-713,
							8293,
							-4345,
							-892,
							-4710
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37059,
					"arcs": [
						[
							-4298,
							-379,
							-7265,
							8294,
							-6558
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40017,
					"arcs": [
						[
							-3703,
							-284,
							-4092,
							-7512,
							-2918,
							-3743,
							-905
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42041,
					"arcs": [
						[
							-7077,
							8295,
							-5712,
							8296,
							-6546
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21095,
					"arcs": [
						[
							-6958,
							-3883,
							-6963,
							8297,
							8298,
							-7260
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22113,
					"arcs": [
						[
							8299,
							-6948,
							8300,
							8301,
							-7463,
							8302
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 26083,
					"arcs": [
						[
							[
								-6904,
								8303
							]
						],
						[
							[
								8304
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35029,
					"arcs": [
						[
							-3685,
							-4378,
							8305,
							-3611,
							-7128
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36105,
					"arcs": [
						[
							-7520,
							-6355,
							-5544,
							-3420,
							-8199
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48185,
					"arcs": [
						[
							-7629,
							-7675,
							8306,
							8307,
							8308,
							-4886
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30019,
					"arcs": [
						[
							8309,
							-7886,
							-5868,
							-7889
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12005,
					"arcs": [
						[
							-8122,
							-3789,
							8310,
							8311,
							8312,
							-7406
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48307,
					"arcs": [
						[
							8313,
							8314,
							-1909,
							8315,
							-1073,
							-3188
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26087,
					"arcs": [
						[
							-7962,
							8316,
							-4203,
							8317,
							8318,
							8319
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20117,
					"arcs": [
						[
							-6058,
							-3028,
							-23,
							8320,
							-8232,
							8321
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38079,
					"arcs": [
						[
							8322,
							8323,
							-3141,
							8324
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30011,
					"arcs": [
						[
							8325,
							-7882,
							-6686,
							-6592,
							-4456,
							-6472
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20157,
					"arcs": [
						[
							-5141,
							8326,
							8327,
							-6086,
							8328
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 55003,
					"arcs": [
						[
							[
								8329
							]
						],
						[
							[
								8330
							]
						],
						[
							[
								8331
							]
						],
						[
							[
								8332
							]
						],
						[
							[
								8333,
								8334,
								-674,
								8335,
								8336
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20201,
					"arcs": [
						[
							-5149,
							-6059,
							-8322,
							-8231,
							-3915,
							-6087,
							-8328
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22007,
					"arcs": [
						[
							8337,
							8338,
							-7984,
							8339,
							-7987,
							-6580,
							8340,
							8341
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55031,
					"arcs": [
						[
							-6050,
							-2759,
							8342,
							8343,
							-2589,
							-6165,
							-5892
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45089,
					"arcs": [
						[
							-6611,
							-5334,
							-7220,
							-8243,
							8344
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47037,
					"arcs": [
						[
							-7042,
							8345,
							8346,
							8347,
							-7223,
							-8172
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13277,
					"arcs": [
						[
							-7417,
							-1959,
							-3892,
							8348,
							8349,
							-6786
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18095,
					"arcs": [
						[
							-8181,
							-501,
							8350,
							-2970,
							-1052,
							-425
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42051,
					"arcs": [
						[
							-6047,
							-5323,
							-7248,
							-7172,
							-7178,
							-480,
							-7637
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48337,
					"arcs": [
						[
							-6204,
							8351,
							-7956,
							-4432,
							-6735,
							8352
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36117,
					"arcs": [
						[
							8353,
							8354,
							8355,
							-4294,
							-5878
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37089,
					"arcs": [
						[
							-7185,
							-7369,
							-5939,
							8356,
							-6388,
							-6442
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40151,
					"arcs": [
						[
							-591,
							-708,
							-435,
							-2462,
							-3082,
							-6680
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45053,
					"arcs": [
						[
							8357,
							-6436,
							8358,
							8359,
							-8016
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48003,
					"arcs": [
						[
							-1921,
							-2347,
							-3060,
							-7857,
							8360,
							8361
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45045,
					"arcs": [
						[
							-8357,
							-5938,
							-7272,
							-5256,
							-6358,
							8362,
							-6389
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37029,
					"arcs": [
						[
							8363,
							8364,
							8365,
							-4597,
							8366,
							-986
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51710,
					"arcs": [
						[
							8367,
							-3193,
							8368,
							8369
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5007,
					"arcs": [
						[
							-6886,
							-1633,
							8370,
							8371,
							-8216,
							8372,
							8373
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22025,
					"arcs": [
						[
							8374,
							8375,
							8376,
							-7571,
							-5818,
							8377
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29037,
					"arcs": [
						[
							-3567,
							-2738,
							-2352,
							-2359,
							8378,
							-6450
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6097,
					"arcs": [
						[
							-8278,
							8379,
							8380,
							-5953,
							8381,
							-7699,
							8382
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55043,
					"arcs": [
						[
							8383,
							8384,
							8385,
							-7136,
							-5895,
							-6448,
							8386
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5093,
					"arcs": [
						[
							-4565,
							8387,
							-7151,
							-7237,
							-6913,
							-6897,
							-6914,
							-8115,
							-55,
							-7190
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16033,
					"arcs": [
						[
							-1147,
							-185,
							-6702,
							-1254,
							-8086
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25013,
					"arcs": [
						[
							-8000,
							-6481,
							8388,
							-6654,
							-5832,
							8389
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51051,
					"arcs": [
						[
							8390,
							-7687,
							8391,
							8392
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56007,
					"arcs": [
						[
							-7662,
							-1652,
							-4686,
							-4738,
							8393,
							-8083,
							-3772,
							-7279
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1063,
					"arcs": [
						[
							-2168,
							-5918,
							-7643,
							8394,
							-5580
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21197,
					"arcs": [
						[
							8395,
							8396,
							-7218,
							-3413,
							-6084,
							8397
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12013,
					"arcs": [
						[
							-3788,
							-4467,
							8398,
							-8311
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13107,
					"arcs": [
						[
							8399,
							-7695,
							-487,
							8400,
							-7751,
							-7953,
							-4472,
							-7482
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12085,
					"arcs": [
						[
							-7361,
							8401,
							-7689,
							8402
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35049,
					"arcs": [
						[
							8403,
							-4064,
							8404,
							-4590,
							8405,
							8406,
							-4831,
							-4840,
							-4068
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29111,
					"arcs": [
						[
							-7839,
							8407,
							-5288,
							8408,
							-4271,
							-5683
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6025,
					"arcs": [
						[
							8409,
							-157,
							8410,
							8411,
							-8189
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22035,
					"arcs": [
						[
							8412,
							-3368,
							8413,
							8414,
							-5728,
							8415
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22037,
					"arcs": [
						[
							-5800,
							-7478,
							-594,
							8416,
							8417,
							8418
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19005,
					"arcs": [
						[
							8419,
							8420,
							8421,
							8422,
							-2504
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19043,
					"arcs": [
						[
							-8423,
							8423,
							-8387,
							-6447,
							-2936,
							8424
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27169,
					"arcs": [
						[
							-4350,
							8425,
							8426,
							-4925,
							8427,
							-7020,
							-1819
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29005,
					"arcs": [
						[
							-8256,
							-5382,
							-8095,
							-5863,
							-4002,
							8428
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36019,
					"arcs": [
						[
							8429,
							-8138,
							-6210,
							8430,
							8431
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42015,
					"arcs": [
						[
							8432,
							-3285,
							-3397,
							-1371,
							8433,
							-1381,
							8434
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13161,
					"arcs": [
						[
							-7774,
							-7433,
							-7442,
							-7954,
							-6078,
							-8007,
							-2841
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17143,
					"arcs": [
						[
							-3078,
							-1774,
							-2187,
							8435,
							8436,
							-7724
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17167,
					"arcs": [
						[
							8437,
							-2662,
							-4776,
							8438,
							-873,
							-2524,
							-5686,
							-6484
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22021,
					"arcs": [
						[
							8439,
							8440,
							8441,
							8442,
							-8376,
							8443,
							-5060
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29223,
					"arcs": [
						[
							-3321,
							-4824,
							8444,
							8445,
							-3339,
							-2330,
							8446
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29041,
					"arcs": [
						[
							-1839,
							-1289,
							8447,
							-7424,
							-7307,
							8448,
							-5481
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29017,
					"arcs": [
						[
							-4823,
							8449,
							8450,
							8451,
							-8445
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30043,
					"arcs": [
						[
							8452,
							-366,
							-4276,
							-6975,
							-3606,
							-5405,
							-5402
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 10003,
					"arcs": [
						[
							[
								-6276,
								8453
							]
						],
						[
							[
								8454,
								-6661,
								8455,
								-6273,
								8456,
								-8041,
								8457,
								-7059
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17149,
					"arcs": [
						[
							-5286,
							-5109,
							-5688,
							-2215,
							-7212,
							-5843,
							-6054,
							-6974,
							8458
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21127,
					"arcs": [
						[
							-5489,
							-5057,
							8459,
							-4756,
							-7026,
							-4697,
							8460
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51175,
					"arcs": [
						[
							-5613,
							-7304,
							-7274,
							-2500,
							-7277,
							-988,
							8461,
							8462,
							-6035,
							-7804
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29013,
					"arcs": [
						[
							-6451,
							-8379,
							-2363,
							8463,
							-711,
							-1201
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22047,
					"arcs": [
						[
							8464,
							8465,
							8466,
							8467,
							-8338,
							8468,
							8469
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37073,
					"arcs": [
						[
							-8462,
							-987,
							-8367,
							-4600,
							8470,
							8471,
							8472
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55121,
					"arcs": [
						[
							-272,
							-2833,
							-4921,
							-8427,
							8473
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48389,
					"arcs": [
						[
							-613,
							8474,
							8475,
							-7805,
							8476,
							-1459
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5119,
					"arcs": [
						[
							-7253,
							-6494,
							8477,
							-1384,
							-4458,
							-3872
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8085,
					"arcs": [
						[
							-3768,
							-6724,
							-6300,
							-8082,
							-4531,
							-1111
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13237,
					"arcs": [
						[
							-5104,
							-7485,
							-6246,
							-6243,
							-6001,
							-7392
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28131,
					"arcs": [
						[
							-3335,
							8478,
							-836,
							-5526,
							-7653,
							-4213
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30079,
					"arcs": [
						[
							-6159,
							-7819,
							-7823,
							-7881,
							8479,
							-648
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51125,
					"arcs": [
						[
							-7893,
							8480,
							-2805,
							-5435,
							-7467,
							-5468
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47121,
					"arcs": [
						[
							-1175,
							-3719,
							-4734,
							-7946,
							-7114
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40091,
					"arcs": [
						[
							-772,
							-8097,
							8481,
							-7545,
							-7542,
							-7529
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49039,
					"arcs": [
						[
							8482,
							8483,
							-7926,
							-4940,
							8484,
							8485
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51037,
					"arcs": [
						[
							-5437,
							8486,
							8487,
							8488,
							-7844,
							-7531
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56019,
					"arcs": [
						[
							-7273,
							-857,
							-4683,
							-1650,
							8489,
							-6980
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55111,
					"arcs": [
						[
							8490,
							8491,
							-2996,
							8492,
							8493,
							8494
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27001,
					"arcs": [
						[
							-7875,
							8495,
							-2761,
							-6051,
							-5890,
							-2795,
							-1871,
							8496
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25009,
					"arcs": [
						[
							-6851,
							8497,
							8498,
							-6294,
							8499
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38067,
					"arcs": [
						[
							8500,
							-6745,
							-3726,
							-7718,
							-2233
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42029,
					"arcs": [
						[
							-4863,
							8501,
							-6662,
							-8455,
							-7058,
							-4619
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51195,
					"arcs": [
						[
							-6962,
							8502,
							-8393,
							8503,
							-7139,
							8504,
							-8298
						],
						[
							-2328
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36075,
					"arcs": [
						[
							8505,
							-2321,
							8506,
							-4369,
							-3687,
							8507,
							8508
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22051,
					"arcs": [
						[
							8509,
							8510,
							8511,
							-5724,
							8512,
							8513,
							-3939
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36079,
					"arcs": [
						[
							-5541,
							8514,
							8515,
							8516,
							-188
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32015,
					"arcs": [
						[
							-7370,
							-5964,
							-5537,
							-7003,
							8517,
							8518
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45015,
					"arcs": [
						[
							-6612,
							-8345,
							-8242,
							-6525,
							-6218,
							8519
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51760,
					"arcs": [
						[
							-6846,
							8520
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51101,
					"arcs": [
						[
							8521,
							-4952,
							-8009,
							8522
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42053,
					"arcs": [
						[
							-1398,
							-807,
							8523,
							8524,
							-7323
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56043,
					"arcs": [
						[
							-6981,
							-8490,
							-1649,
							-7661,
							-3265,
							-1657
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8023,
					"arcs": [
						[
							-4462,
							8525,
							-5830,
							-6124,
							8526,
							-3777
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47051,
					"arcs": [
						[
							-5343,
							-6867,
							-7977,
							-4154,
							8527,
							-7572,
							-5359
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6033,
					"arcs": [
						[
							-6488,
							-6416,
							-4401,
							8528,
							-8380,
							-8277
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48215,
					"arcs": [
						[
							-3113,
							-6019,
							8529,
							8530,
							8531,
							-7920
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48229,
					"arcs": [
						[
							8532,
							-1461,
							8533,
							8534,
							8535
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1013,
					"arcs": [
						[
							8536,
							-3481,
							-3749,
							8537,
							-7681,
							-2424
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5025,
					"arcs": [
						[
							-1386,
							8538,
							-6510,
							-3287,
							-4990,
							8539,
							8540
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20169,
					"arcs": [
						[
							-2296,
							-5083,
							-6464,
							-2242,
							-2872
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22121,
					"arcs": [
						[
							8541,
							-8418,
							8542,
							-8466,
							8543
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28089,
					"arcs": [
						[
							-5516,
							-7755,
							-2862,
							-8079,
							8544,
							-3660
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37143,
					"arcs": [
						[
							-8471,
							-4599,
							8545,
							8546
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51650,
					"arcs": [
						[
							8547,
							8548,
							8549,
							-197
						]
					]
				},
				{
					"type": "Polygon",
					"id": 9001,
					"arcs": [
						[
							-8516,
							8550,
							-5834,
							-5651,
							8551,
							8552
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36089,
					"arcs": [
						[
							8553,
							8554,
							8555,
							-2318,
							8556,
							8557
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26141,
					"arcs": [
						[
							8558,
							8559,
							-2217,
							-5790
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48301,
					"arcs": [
						[
							-612,
							8560,
							8561,
							8562,
							-8475
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36011,
					"arcs": [
						[
							-8355,
							8563,
							-8508,
							-3689,
							-2042,
							8564,
							8565
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18027,
					"arcs": [
						[
							-4789,
							-757,
							8566,
							-3515,
							-3948
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37155,
					"arcs": [
						[
							-962,
							-1518,
							8567,
							-6820,
							-1951,
							-6663,
							-4414
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18147,
					"arcs": [
						[
							8568,
							-5732,
							8569,
							8570,
							-6460
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21223,
					"arcs": [
						[
							8571,
							8572,
							8573,
							-5025,
							-4718
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 26029,
					"arcs": [
						[
							[
								-4662,
								-5791,
								-1300,
								8574,
								8575
							]
						],
						[
							[
								8576
							]
						],
						[
							[
								8577
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30047,
					"arcs": [
						[
							-2475,
							-3995,
							-718
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47053,
					"arcs": [
						[
							-7340,
							-7166,
							-915,
							-6927,
							-1243,
							-7149
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48477,
					"arcs": [
						[
							8578,
							8579,
							-4887,
							-8309,
							8580,
							-1571,
							8581
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16003,
					"arcs": [
						[
							-4615,
							-2276,
							-1766,
							-6992,
							-7169,
							8582
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35047,
					"arcs": [
						[
							8583,
							-7132,
							8584,
							8585,
							-4832,
							-8407
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46065,
					"arcs": [
						[
							-1893,
							8586,
							-2883,
							-5602
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48051,
					"arcs": [
						[
							8587,
							8588,
							-4888,
							-8580,
							8589
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48349,
					"arcs": [
						[
							-1334,
							-5295,
							8590,
							-1912,
							-4322
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21231,
					"arcs": [
						[
							-1100,
							8591,
							8592,
							-8166,
							-972,
							-8259
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19139,
					"arcs": [
						[
							-6692,
							-3043,
							-4545,
							-4175,
							-8186
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1019,
					"arcs": [
						[
							8593,
							-5671,
							-6714,
							8594,
							-4936,
							-3860,
							-5162
						]
					]
				},
				{
					"type": "Polygon",
					"id": 9013,
					"arcs": [
						[
							-8389,
							-6480,
							-3784,
							-5461,
							-6655
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8014,
					"arcs": [
						[
							8595,
							-7951,
							8596,
							-4996
						],
						[
							8597
						],
						[
							-7948
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8031,
					"arcs": [
						[
							8598,
							-2376,
							-4998
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51735,
					"arcs": [
						[
							8599,
							-8549,
							8600
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51740,
					"arcs": [
						[
							8601,
							-8370,
							8602,
							-984
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36119,
					"arcs": [
						[
							-8517,
							-8553,
							8603,
							-4010,
							8604,
							-189
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22071,
					"arcs": [
						[
							8605,
							8606,
							8607,
							-5721,
							-8512
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28033,
					"arcs": [
						[
							-6900,
							8608,
							-3656,
							-7834,
							-8116
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33015,
					"arcs": [
						[
							8609,
							-4581,
							-8170,
							8610,
							-8498,
							-6850
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 36045,
					"arcs": [
						[
							[
								-8557,
								-2322,
								-8506,
								8611
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53069,
					"arcs": [
						[
							-7647,
							-8081,
							-8160,
							-8118,
							8612,
							8613
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1045,
					"arcs": [
						[
							8614,
							8615,
							8616,
							-3363,
							-3174,
							-1717
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21199,
					"arcs": [
						[
							-4694,
							8617,
							-5089,
							-6093,
							8618,
							-8592,
							-1099
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18107,
					"arcs": [
						[
							-6777,
							-4784,
							-2258,
							8619,
							8620,
							8621,
							-4792
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20049,
					"arcs": [
						[
							-1445,
							8622,
							-6957,
							-2417,
							8623,
							-2652
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55093,
					"arcs": [
						[
							-3732,
							-1647,
							8624,
							-5519,
							-3277,
							8625
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48083,
					"arcs": [
						[
							-1782,
							8626,
							8627,
							-1910,
							-8315,
							8628
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22001,
					"arcs": [
						[
							-4263,
							-7526,
							-6944,
							-8300,
							8629
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5133,
					"arcs": [
						[
							8630,
							8631,
							-6511,
							-4354
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27055,
					"arcs": [
						[
							-8428,
							-4924,
							8632,
							-8420,
							-2503,
							-7021
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13109,
					"arcs": [
						[
							8633,
							-6537,
							-8109,
							-4339,
							-7750
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6065,
					"arcs": [
						[
							-151,
							-8410,
							-8188,
							8634,
							-702
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13039,
					"arcs": [
						[
							-8029,
							8635,
							-8248,
							8636,
							8637
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21141,
					"arcs": [
						[
							-3931,
							-7334,
							-7915,
							-7158,
							-7039,
							-1523
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 22087,
					"arcs": [
						[
							[
								8638
							]
						],
						[
							[
								8639
							]
						],
						[
							[
								8640,
								-5722,
								-8608
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40067,
					"arcs": [
						[
							-390,
							-2072,
							-7957,
							-8352,
							-6203,
							-4025
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22073,
					"arcs": [
						[
							-7005,
							-7007,
							-3579,
							8641,
							-8441,
							8642
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22049,
					"arcs": [
						[
							-7006,
							-8643,
							-8440,
							-5059,
							-3968
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36065,
					"arcs": [
						[
							-2320,
							8643,
							-8200,
							-4366,
							-8507
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36043,
					"arcs": [
						[
							-2319,
							-8556,
							8644,
							8645,
							8646,
							-8201,
							-8644
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41003,
					"arcs": [
						[
							8647,
							-1090,
							8648,
							-6143
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47189,
					"arcs": [
						[
							8649,
							-6691,
							-6911,
							-5410,
							-5367,
							8650,
							-8347
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13249,
					"arcs": [
						[
							-5071,
							-5067,
							8651,
							8652
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18127,
					"arcs": [
						[
							-3561,
							-6641,
							-6796,
							8653
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22059,
					"arcs": [
						[
							-5061,
							-8444,
							-8375,
							8654,
							-4813,
							-4817
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47001,
					"arcs": [
						[
							-8168,
							-6770,
							8655,
							-4875,
							-3715,
							-6677
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24510,
					"arcs": [
						[
							8656,
							-6717,
							-7052
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2068,
					"arcs": [
						[
							-7727,
							8657,
							8658,
							8659
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21149,
					"arcs": [
						[
							8660,
							8661,
							-5491,
							-3928,
							8662,
							8663
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49049,
					"arcs": [
						[
							-7082,
							-788,
							-7925,
							8664,
							-8483,
							8665,
							-7970
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18063,
					"arcs": [
						[
							-2257,
							8666,
							-8174,
							8667,
							-8620
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41035,
					"arcs": [
						[
							8668,
							8669,
							-6400,
							-4032,
							-945,
							-3761,
							8670
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37145,
					"arcs": [
						[
							-7846,
							-6499,
							-235,
							-2670,
							-5185
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18001,
					"arcs": [
						[
							8671,
							8672,
							-964,
							-3032,
							8673
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47173,
					"arcs": [
						[
							-6769,
							8674,
							-6226,
							-4870,
							-8656
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17183,
					"arcs": [
						[
							-1533,
							-575,
							-2659,
							-2197,
							8675,
							-7208,
							-4777
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32023,
					"arcs": [
						[
							8676,
							-8518,
							-7002,
							8677,
							-8209,
							8678,
							8679,
							8680,
							8681
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19197,
					"arcs": [
						[
							8682,
							-2599,
							-2810,
							-1731,
							-7119
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22033,
					"arcs": [
						[
							-8417,
							-598,
							8683,
							8684,
							-8467,
							-8543
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40075,
					"arcs": [
						[
							-7978,
							-3744,
							-2364,
							8685,
							-5702,
							-7452,
							-2678
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48383,
					"arcs": [
						[
							-121,
							8686,
							-1991,
							-673,
							8687,
							8688
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40141,
					"arcs": [
						[
							-8686,
							-2368,
							-4028,
							-5786,
							-8244,
							-5703
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8041,
					"arcs": [
						[
							8689,
							-7911,
							8690,
							-2383,
							8691,
							-2402
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48411,
					"arcs": [
						[
							-8316,
							-1908,
							-7742,
							-1031,
							8692,
							-3815,
							-1074
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29185,
					"arcs": [
						[
							-8464,
							-2362,
							-5023,
							-1607,
							-4344,
							-8294,
							-712
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32001,
					"arcs": [
						[
							-7371,
							-8519,
							-8677,
							8693,
							-7385,
							8694
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46137,
					"arcs": [
						[
							-6619,
							-4427,
							-7236,
							-7238,
							-4141
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4011,
					"arcs": [
						[
							-5076,
							-3160,
							-7129,
							-3609,
							8695,
							8696
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12057,
					"arcs": [
						[
							-7901,
							8697,
							8698,
							8699,
							8700
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2170,
					"arcs": [
						[
							8701,
							-8659,
							8702,
							-7620,
							-5009,
							8703,
							-1867,
							8704
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31075,
					"arcs": [
						[
							-3191,
							8705,
							-1269,
							8706,
							-1389
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48221,
					"arcs": [
						[
							-1755,
							-7035,
							-4114,
							-2495,
							-1035
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48053,
					"arcs": [
						[
							-1030,
							-8268,
							-7378,
							-8073,
							-2585,
							-3816,
							-8693
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22063,
					"arcs": [
						[
							-597,
							8707,
							8708,
							8709,
							-8684
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1001,
					"arcs": [
						[
							-6732,
							-6727,
							-4931,
							8710,
							-4933
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1005,
					"arcs": [
						[
							-6278,
							-4526,
							8711,
							-8152,
							-822,
							8712,
							-8616,
							8713
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26125,
					"arcs": [
						[
							-8318,
							-4207,
							8714,
							8715,
							-1293,
							8716
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26001,
					"arcs": [
						[
							8717,
							8718,
							-2846,
							8719
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26111,
					"arcs": [
						[
							-2207,
							-4246,
							8720,
							8721,
							-2428
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26129,
					"arcs": [
						[
							8722,
							-2849,
							8723,
							-2204,
							-3136
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26145,
					"arcs": [
						[
							-4245,
							8724,
							8725,
							8726,
							8727,
							-8721
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8043,
					"arcs": [
						[
							-5997,
							8728,
							-2403,
							-8692,
							-2382,
							-4769,
							8729
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8047,
					"arcs": [
						[
							8730,
							-4994,
							-4289,
							-6238
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48461,
					"arcs": [
						[
							-7858,
							-3061,
							-8689,
							8731,
							-6739
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8055,
					"arcs": [
						[
							8732,
							-4770,
							-2387,
							-5826,
							-8526,
							-4461
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34003,
					"arcs": [
						[
							-190,
							-8605,
							-4009,
							-7664,
							-7624,
							-7428,
							8733
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 48489,
					"arcs": [
						[
							[
								-6014,
								8734,
								8735,
								8736
							]
						],
						[
							[
								-6018,
								8737,
								8738,
								-8530
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22083,
					"arcs": [
						[
							-3578,
							8739,
							-8416,
							-5727,
							8740,
							-8442,
							-8642
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6051,
					"arcs": [
						[
							-5270,
							-5876,
							-7387,
							8741,
							8742,
							8743,
							8744,
							-4765,
							-2878
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 12037,
					"arcs": [
						[
							[
								8745
							]
						],
						[
							[
								-4470,
								-4170,
								8746,
								8747
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18025,
					"arcs": [
						[
							-3199,
							-6149,
							-5635,
							-5753,
							-5734,
							8748
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21161,
					"arcs": [
						[
							-5720,
							8749,
							-8132,
							-5903,
							-3639,
							-3529
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21195,
					"arcs": [
						[
							-3152,
							-7027,
							-3471,
							-7688,
							-8391,
							-8503,
							-6961,
							8750
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35025,
					"arcs": [
						[
							-5214,
							-7193,
							-1195,
							-2025,
							-1922,
							-8362,
							8751,
							-8561,
							-611
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53047,
					"arcs": [
						[
							8752,
							-6107,
							8753,
							-5297,
							-8100,
							-3205,
							-8055,
							-4918
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54087,
					"arcs": [
						[
							8754,
							-4956,
							8755,
							8756,
							8757
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26147,
					"arcs": [
						[
							-7961,
							8758,
							-4204,
							-8317
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20141,
					"arcs": [
						[
							8759,
							8760,
							-2292,
							-2874,
							8761,
							8762,
							8763
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 22057,
					"arcs": [
						[
							[
								8764
							]
						],
						[
							[
								-7983,
								8765,
								-3940,
								-8514,
								8766,
								-7988,
								-8340
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38009,
					"arcs": [
						[
							8767,
							-8325,
							-3140,
							8768,
							-4511
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37091,
					"arcs": [
						[
							-8463,
							-8473,
							8769,
							8770,
							-4380,
							-6036
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 26097,
					"arcs": [
						[
							[
								8771
							]
						],
						[
							[
								-2902,
								8772,
								8773,
								8774
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41011,
					"arcs": [
						[
							8775,
							8776,
							8777
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8109,
					"arcs": [
						[
							-6302,
							-5998,
							-8730,
							-4771,
							-8733,
							-4460,
							-1761,
							8778,
							-6305
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24029,
					"arcs": [
						[
							-7060,
							-8458,
							-8046,
							8779,
							8780
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32009,
					"arcs": [
						[
							-8681,
							8781,
							-8743,
							8782
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36021,
					"arcs": [
						[
							8783,
							-5934,
							8784,
							8785,
							-6353
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38023,
					"arcs": [
						[
							8786,
							-3068,
							-6893,
							-7885
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55079,
					"arcs": [
						[
							-7038,
							8787,
							-990,
							-1082
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13067,
					"arcs": [
						[
							-7913,
							-5680,
							-6068,
							-5098,
							8788
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17189,
					"arcs": [
						[
							-2641,
							8789,
							8790,
							-6707,
							8791,
							8792
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21229,
					"arcs": [
						[
							8793,
							-5130,
							-6148,
							-4978,
							-4255
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18151,
					"arcs": [
						[
							-7298,
							-6833,
							-7880,
							8794,
							-3953
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35035,
					"arcs": [
						[
							-3683,
							-6766,
							-5215,
							-615,
							-1458,
							-8533,
							8795,
							-4375
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55123,
					"arcs": [
						[
							-4923,
							8796,
							8797,
							-8495,
							8798,
							8799,
							-8421,
							-8633
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13259,
					"arcs": [
						[
							-4525,
							8800,
							8801,
							-1845,
							-7389,
							-8151,
							-8712
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13257,
					"arcs": [
						[
							-8065,
							-5783,
							-5840,
							-748
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35045,
					"arcs": [
						[
							8802,
							8803,
							-5584,
							-4592,
							-4070,
							-3355,
							-5075
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51550,
					"arcs": [
						[
							-985,
							-8603,
							-8369,
							-3196,
							8804,
							-8364
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26155,
					"arcs": [
						[
							-8727,
							8805,
							-1291,
							8806,
							-1463,
							8807
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38037,
					"arcs": [
						[
							-5219,
							-6780,
							-6133,
							-3312,
							-1963
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38053,
					"arcs": [
						[
							-7854,
							-6894,
							-5595,
							-6762,
							-1017,
							-2444,
							-7821
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41019,
					"arcs": [
						[
							8808,
							-8669,
							8809,
							-1229,
							8810,
							-8776,
							8811
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55023,
					"arcs": [
						[
							-8800,
							8812,
							-8384,
							-8424,
							-8422
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8035,
					"arcs": [
						[
							-2380,
							-7912,
							-8690,
							-2401,
							-4999
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 48061,
					"arcs": [
						[
							[
								8813,
								-8736
							]
						],
						[
							[
								-8739,
								8814,
								-8531
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13217,
					"arcs": [
						[
							8815,
							-7422,
							-5106,
							-7391,
							-1047,
							-4478
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16053,
					"arcs": [
						[
							-4483,
							-495,
							-6382,
							8816,
							-3512
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19091,
					"arcs": [
						[
							-582,
							-8683,
							-7118,
							-5693
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21165,
					"arcs": [
						[
							-7257,
							-4810,
							8817,
							-7215,
							-8397,
							8818
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29183,
					"arcs": [
						[
							8819,
							-5846,
							-6645,
							-8255,
							-4549,
							-1248,
							-1434
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30111,
					"arcs": [
						[
							-3243,
							8820,
							-7933,
							8821,
							-6930,
							-6835,
							-5205
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38093,
					"arcs": [
						[
							-2581,
							-1316,
							-1365,
							-1363,
							8822,
							-2260,
							-2990
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46059,
					"arcs": [
						[
							-2869,
							-5263,
							-1557,
							-1597,
							-6222,
							8823
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53049,
					"arcs": [
						[
							8824,
							-7648,
							-8614,
							8825
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28065,
					"arcs": [
						[
							-2575,
							-8075,
							-886,
							-3297,
							-3228
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31101,
					"arcs": [
						[
							-1391,
							8826,
							-2433,
							-2733,
							-1318,
							-7419
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41013,
					"arcs": [
						[
							-6329,
							-5394,
							-4859,
							8827,
							-6398
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37031,
					"arcs": [
						[
							-8239,
							8828,
							8829,
							8830
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17151,
					"arcs": [
						[
							-340,
							8831,
							-6968,
							8832,
							8833
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32031,
					"arcs": [
						[
							-2268,
							-1688,
							8834,
							-947,
							-4031,
							8835,
							-5966,
							-7372,
							-8695,
							-7384,
							8836,
							-1941,
							-1698
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18003,
					"arcs": [
						[
							-1141,
							8837,
							-5758,
							8838,
							8839,
							-8672,
							8840,
							-2238,
							-2875
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20087,
					"arcs": [
						[
							-2704,
							-5743,
							-8210,
							-4798,
							8841
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20177,
					"arcs": [
						[
							-2705,
							-8842,
							-4797,
							8842,
							8843,
							8844
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46101,
					"arcs": [
						[
							8845,
							-6053,
							-4727,
							8846
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22123,
					"arcs": [
						[
							-3369,
							-8413,
							-8740,
							-3577
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1089,
					"arcs": [
						[
							-7573,
							-8528,
							-4159,
							-6191,
							-7538,
							-2698
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18067,
					"arcs": [
						[
							8847,
							8848,
							-503,
							-8182,
							-4782,
							8849
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18103,
					"arcs": [
						[
							8850,
							8851,
							-504,
							-8849,
							8852
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40083,
					"arcs": [
						[
							-1549,
							-7331,
							-5153,
							8853,
							-280,
							-3702
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13241,
					"arcs": [
						[
							-8192,
							8854,
							-5785,
							-8064,
							8855
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37113,
					"arcs": [
						[
							-4016,
							-7627,
							-7591,
							-8855,
							-8191,
							-3620
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36031,
					"arcs": [
						[
							8856,
							-8431,
							-6209,
							-6024,
							-7672,
							-7513,
							8857
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40001,
					"arcs": [
						[
							8858,
							-8373,
							-8218,
							-8198,
							8859,
							-241
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48183,
					"arcs": [
						[
							-4125,
							-6116,
							-529,
							-7567
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47177,
					"arcs": [
						[
							-5409,
							-6685,
							8860,
							8861,
							-6864,
							-5341,
							-5369
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48177,
					"arcs": [
						[
							-7861,
							-1094,
							8862,
							-1795,
							-2787,
							-4118,
							8863
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48175,
					"arcs": [
						[
							-4119,
							-2789,
							-8114,
							-6196,
							8864
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55021,
					"arcs": [
						[
							-8289,
							-3317,
							8865,
							-2791,
							-2997,
							-8492,
							8866
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16005,
					"arcs": [
						[
							8867,
							-7743,
							-3798,
							8868,
							-8282
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17011,
					"arcs": [
						[
							-8021,
							-5483,
							-696,
							-3388,
							-2184,
							-1772,
							-2488
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30013,
					"arcs": [
						[
							-6554,
							-4059,
							-7046,
							-7099,
							-363
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41029,
					"arcs": [
						[
							-1230,
							-8810,
							-8671,
							-3760
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13247,
					"arcs": [
						[
							-1851,
							-7423,
							-8816,
							-4477,
							8869
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39045,
					"arcs": [
						[
							-8265,
							8870,
							-1750,
							8871,
							-1882
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 26041,
					"arcs": [
						[
							[
								8872
							]
						],
						[
							[
								8873,
								-4210,
								8874,
								8875,
								-3406
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29149,
					"arcs": [
						[
							-92,
							-2333,
							-7246,
							8876,
							8877,
							-2314,
							8878
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48199,
					"arcs": [
						[
							-5579,
							-8104,
							-5418,
							-7796,
							-6919,
							-4878
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22041,
					"arcs": [
						[
							-8741,
							-5731,
							-7568,
							-8377,
							-8443
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36027,
					"arcs": [
						[
							-6354,
							-8786,
							8879,
							-5835,
							-8551,
							-8515,
							-5540
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51199,
					"arcs": [
						[
							-8214,
							8880,
							-8601,
							-8548,
							-196,
							-4442,
							-2727,
							-4441
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28149,
					"arcs": [
						[
							-5729,
							-8415,
							8881,
							-5517,
							-3664,
							-7554,
							-7570,
							-5726,
							-7569
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31103,
					"arcs": [
						[
							-6616,
							-3427,
							-6062,
							-4277,
							-6162,
							8882
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39111,
					"arcs": [
						[
							-7582,
							-7641,
							8883,
							-3851,
							-7678,
							8884
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47059,
					"arcs": [
						[
							-6597,
							-8220,
							-8222,
							8885,
							-5621,
							-6517
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53063,
					"arcs": [
						[
							-8059,
							-3039,
							-6671,
							-4174,
							-3543,
							-6403,
							8886
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8079,
					"arcs": [
						[
							-8779,
							-1765,
							-5583,
							-6306
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21215,
					"arcs": [
						[
							-4191,
							-3925,
							-5132,
							8887,
							-956
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27079,
					"arcs": [
						[
							8888,
							8889,
							-2531,
							-82,
							-1537,
							-5228
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29113,
					"arcs": [
						[
							-6055,
							-5847,
							-8820,
							-1433,
							-4827
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29127,
					"arcs": [
						[
							-8409,
							-5287,
							-8459,
							-6973,
							-6153,
							-4272
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1111,
					"arcs": [
						[
							8890,
							-7798,
							-2548,
							8891,
							-1710,
							8892,
							8893
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55047,
					"arcs": [
						[
							-7599,
							-4336,
							-2223,
							-2792,
							-8866,
							-3316
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55049,
					"arcs": [
						[
							8894,
							-8493,
							-3001,
							-7377,
							-7134,
							-8386
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27167,
					"arcs": [
						[
							8895,
							-2165,
							8896,
							8897,
							8898
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42003,
					"arcs": [
						[
							8899,
							-6566,
							-5318,
							-6046,
							-7764
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29510,
					"arcs": [
						[
							-8254,
							8900,
							-4551
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51041,
					"arcs": [
						[
							-2211,
							-6847,
							-8521,
							-6845,
							-6876,
							-6940,
							-5179,
							-6939,
							-6584,
							-2537,
							-6583,
							-7702,
							-8223
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48085,
					"arcs": [
						[
							8901,
							8902,
							-2954,
							-1806,
							-113,
							-1485
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47153,
					"arcs": [
						[
							-8862,
							8903,
							-5363,
							-7113,
							-7976,
							-6865
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20115,
					"arcs": [
						[
							-5082,
							-2541,
							-3155,
							-2650,
							-1479,
							-6465
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48117,
					"arcs": [
						[
							-1828,
							-3258,
							-2435,
							-39,
							-4584,
							8904
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37051,
					"arcs": [
						[
							-7153,
							-7028,
							-6829,
							-6817,
							-8568,
							-1517
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21173,
					"arcs": [
						[
							-7258,
							-8819,
							-8396,
							8905,
							8906
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29157,
					"arcs": [
						[
							-2391,
							-4241,
							8907,
							-3806,
							8908,
							8909,
							-8450,
							-4822
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36109,
					"arcs": [
						[
							8910,
							-8565,
							-2041,
							8911,
							8912,
							-4843
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42119,
					"arcs": [
						[
							-5326,
							-6752,
							8913,
							8914,
							-4101,
							-6889
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51033,
					"arcs": [
						[
							8915,
							-2178,
							8916,
							-4365,
							-4953,
							-8522,
							8917
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13223,
					"arcs": [
						[
							-7914,
							-8789,
							-5097,
							-7797,
							-952,
							-6712
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46129,
					"arcs": [
						[
							-3430,
							-2155,
							-3303,
							8918,
							-7234,
							-4425
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5113,
					"arcs": [
						[
							-7585,
							-7351,
							8919,
							8920,
							-8631,
							-4353
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17181,
					"arcs": [
						[
							-8909,
							-3805,
							-2852,
							8921,
							8922,
							-5661,
							8923
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31137,
					"arcs": [
						[
							-795,
							-521,
							8924,
							-469,
							-5874,
							-5567
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32003,
					"arcs": [
						[
							-8208,
							-3006,
							-700,
							8925,
							-8679
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37133,
					"arcs": [
						[
							8926,
							-8830,
							8927,
							8928,
							-5588
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47025,
					"arcs": [
						[
							-5747,
							-7262,
							8929,
							-6605,
							-6227,
							-8675,
							-6768
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5097,
					"arcs": [
						[
							-7350,
							-5922,
							-7305,
							-211,
							-7067,
							-620,
							-8920
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5123,
					"arcs": [
						[
							-5991,
							-1861,
							-8117,
							-3445,
							-7505
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48147,
					"arcs": [
						[
							8930,
							-7670,
							-3850,
							-5364,
							-2955,
							-8903
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37025,
					"arcs": [
						[
							-6560,
							8931,
							8932,
							8933,
							-6039
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27123,
					"arcs": [
						[
							8934,
							-3275,
							-7156,
							-761
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37071,
					"arcs": [
						[
							-1419,
							-6037,
							8935,
							-7315
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51105,
					"arcs": [
						[
							-8299,
							-8505,
							-7143,
							-6602,
							-8930,
							-7261
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5009,
					"arcs": [
						[
							-2414,
							-5,
							-2563,
							8936,
							8937
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29073,
					"arcs": [
						[
							-6892,
							-4828,
							-1435,
							-1253,
							-6470,
							-3201,
							-129
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21189,
					"arcs": [
						[
							-3416,
							-7327,
							-3886,
							-6868,
							-2718
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17047,
					"arcs": [
						[
							-1185,
							-5667,
							-6322,
							8938
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37035,
					"arcs": [
						[
							-5223,
							-8125,
							-6561,
							-1416,
							-7199
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21019,
					"arcs": [
						[
							-7244,
							-4751,
							-8460,
							-5056,
							-5751
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42013,
					"arcs": [
						[
							-7828,
							-5329,
							8939,
							-6572,
							-6590
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45003,
					"arcs": [
						[
							8940,
							8941,
							-4108,
							8942,
							-5695,
							-7693,
							-5031
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47079,
					"arcs": [
						[
							-4235,
							-1564,
							-5190,
							-6289,
							-910,
							-7165
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21093,
					"arcs": [
						[
							8943,
							-5754,
							-5637,
							-958,
							8944,
							-6082,
							8945,
							8946
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26063,
					"arcs": [
						[
							-7959,
							8947,
							8948
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30071,
					"arcs": [
						[
							8949,
							-7890,
							-645,
							8950,
							8951,
							8952
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39015,
					"arcs": [
						[
							8953,
							-2022,
							-8051,
							-8131,
							-8750,
							-5719
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46069,
					"arcs": [
						[
							8954,
							-2870,
							-8824,
							-6221,
							-2884,
							-8587,
							-1892
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51021,
					"arcs": [
						[
							8955,
							-8038,
							-4948,
							-6423,
							-4330,
							-7831
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13089,
					"arcs": [
						[
							-1852,
							-8870,
							-4476,
							-8262,
							-6069
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21121,
					"arcs": [
						[
							-6095,
							-6871,
							-7259,
							-5745
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37167,
					"arcs": [
						[
							8956,
							-8215,
							-6030,
							8957,
							-8933
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46035,
					"arcs": [
						[
							-3240,
							-2801,
							8958,
							-2967,
							-3224
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48475,
					"arcs": [
						[
							-8563,
							8959,
							-7859,
							-6742,
							-7806,
							-8476
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51139,
					"arcs": [
						[
							-6188,
							-2065,
							-7676,
							-4328,
							-3817,
							-7739
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33013,
					"arcs": [
						[
							8960,
							-1307,
							-4582,
							-8610,
							-6849,
							-4575
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47043,
					"arcs": [
						[
							-247,
							-2561,
							-8173,
							-7221,
							-1901,
							-3710
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51167,
					"arcs": [
						[
							-8392,
							-7686,
							-7832,
							-4334,
							8961,
							-7140,
							-8504
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27143,
					"arcs": [
						[
							-2543,
							-1015,
							8962,
							-8889,
							-5227,
							-5307
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48271,
					"arcs": [
						[
							-4641,
							-2942,
							8963,
							-3734,
							8964
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 6037,
					"arcs": [
						[
							[
								8965
							]
						],
						[
							[
								8966
							]
						],
						[
							[
								8967,
								-704,
								8968,
								8969,
								-3374
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46127,
					"arcs": [
						[
							-4036,
							-5643,
							-7847,
							-6863,
							-6496,
							-4569,
							-6595
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45017,
					"arcs": [
						[
							8970,
							8971,
							-6614,
							8972,
							-4106
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45037,
					"arcs": [
						[
							8973,
							8974,
							-8941,
							-5030,
							-7852,
							8975
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25003,
					"arcs": [
						[
							-5933,
							8976,
							-4660,
							-8001,
							-8390,
							-5831,
							-8880,
							-8785
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5083,
					"arcs": [
						[
							-7366,
							8977,
							-5926,
							-864,
							-5919,
							-7349
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22095,
					"arcs": [
						[
							8978,
							-8709,
							8979,
							8980,
							-8510,
							-3941,
							-8766,
							-7982
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27061,
					"arcs": [
						[
							-7930,
							-2762,
							-8496,
							-7874,
							-5506
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30039,
					"arcs": [
						[
							-3997,
							8981,
							-5400,
							8982
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36121,
					"arcs": [
						[
							-4689,
							8983,
							-2623,
							-3268,
							-6026
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5041,
					"arcs": [
						[
							8984,
							-7562,
							-7550,
							-3364,
							-3289,
							-6509
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16069,
					"arcs": [
						[
							-6405,
							-7800,
							-7107,
							-491,
							-2272,
							-4614,
							-7281
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27011,
					"arcs": [
						[
							8985,
							-1815,
							-510,
							-6838,
							-7093,
							-7768
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35033,
					"arcs": [
						[
							-4589,
							8986,
							-6127,
							-7133,
							-8584,
							-8406
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13163,
					"arcs": [
						[
							-7440,
							-3898,
							8987,
							-5033,
							-7692,
							-8400,
							-7481,
							-3499
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47119,
					"arcs": [
						[
							-1903,
							-7225,
							-4869,
							-4045,
							8988,
							-5143
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17133,
					"arcs": [
						[
							-4553,
							8989,
							8990,
							-4239,
							8991
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27135,
					"arcs": [
						[
							8992,
							-4667,
							-5504,
							-3721,
							-6744
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31131,
					"arcs": [
						[
							-5960,
							-8257,
							-8429,
							-4001,
							8993,
							-2617
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31177,
					"arcs": [
						[
							-8286,
							8994,
							-7395,
							-4222,
							8995
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56021,
					"arcs": [
						[
							-2602,
							-6171,
							-7302,
							-6761,
							-7949,
							-6454,
							-4735
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47135,
					"arcs": [
						[
							-6290,
							-3711,
							-1905,
							-5146,
							-7163,
							-4111
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48043,
					"arcs": [
						[
							8996,
							-7808,
							-5851,
							8997,
							-7841
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37157,
					"arcs": [
						[
							8998,
							8999,
							-5186,
							-3231,
							-1410,
							-3214
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51177,
					"arcs": [
						[
							-5424,
							-7631,
							-2181,
							-4252,
							-2179,
							-8916,
							9000,
							-6332
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21239,
					"arcs": [
						[
							-3522,
							9001,
							9002,
							-5119,
							-6146,
							-5128
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45087,
					"arcs": [
						[
							-7271,
							9003,
							9004,
							-1589,
							-6668,
							-7229,
							-5258
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53031,
					"arcs": [
						[
							9005,
							9006,
							9007,
							9008,
							9009
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6059,
					"arcs": [
						[
							-8969,
							-703,
							-8635,
							-8187,
							9010
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12127,
					"arcs": [
						[
							-8163,
							-2136,
							9011,
							9012,
							-995,
							9013,
							-6626
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24017,
					"arcs": [
						[
							-6184,
							-7000,
							9014,
							9015,
							9016
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29155,
					"arcs": [
						[
							-5811,
							9017,
							-7146,
							-8388,
							-4564
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35059,
					"arcs": [
						[
							-5828,
							-2929,
							-6140,
							-2714,
							-2485,
							9018,
							-7130,
							-6125
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41025,
					"arcs": [
						[
							-6399,
							-8828,
							-4858,
							-7460,
							-5961,
							-8836,
							-4030
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48141,
					"arcs": [
						[
							-8796,
							-8536,
							9019,
							-4376
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39053,
					"arcs": [
						[
							9020,
							-2693,
							-5943,
							-7590,
							-7636,
							-7242
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5067,
					"arcs": [
						[
							-6420,
							-6505,
							-7191,
							-58,
							-1859,
							-5990,
							9021
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17081,
					"arcs": [
						[
							-8791,
							9022,
							9023,
							-4484,
							-7210,
							-6708
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21181,
					"arcs": [
						[
							-3636,
							-3531,
							-3643,
							-7256,
							9024
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35028,
					"arcs": [
						[
							-4591,
							-8405,
							-4065,
							-8404,
							-4067
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48161,
					"arcs": [
						[
							-8591,
							-5294,
							-5430,
							-6538,
							-1913
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45065,
					"arcs": [
						[
							-7337,
							9025,
							-8976,
							-7851,
							-5836,
							9026
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1027,
					"arcs": [
						[
							9027,
							-8894,
							9028,
							-7354,
							-3867
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1067,
					"arcs": [
						[
							-8713,
							-821,
							-3550,
							-3359,
							-8617
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40041,
					"arcs": [
						[
							-4021,
							9029,
							-6887,
							-8374,
							-8859,
							-240,
							9030
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51077,
					"arcs": [
						[
							9031,
							-4332,
							-6422,
							-6378,
							-5616,
							-6377,
							-7073,
							-7070,
							-4391,
							-7865
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12081,
					"arcs": [
						[
							-8699,
							-1995,
							-2778,
							9032,
							9033
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20139,
					"arcs": [
						[
							9034,
							-8843,
							-4800,
							-3919,
							-6807,
							-67
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17129,
					"arcs": [
						[
							-4909,
							-2663,
							-8438,
							-6483
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20089,
					"arcs": [
						[
							-607,
							-5142,
							-8329,
							-6088,
							-2288,
							-8761,
							9035
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25023,
					"arcs": [
						[
							-6700,
							9036,
							-6696,
							9037,
							-7267,
							9038,
							-6636
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29099,
					"arcs": [
						[
							-4554,
							-8992,
							-4238,
							-2389,
							-1275,
							-1250
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55051,
					"arcs": [
						[
							9039,
							-5889,
							-3473,
							-675,
							-8335
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4021,
					"arcs": [
						[
							9040,
							9041,
							-5454,
							-4983
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21175,
					"arcs": [
						[
							-4809,
							-5490,
							-8461,
							-4699,
							-3938,
							-7216,
							-8818
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24027,
					"arcs": [
						[
							-5884,
							9042,
							-7053,
							-6715,
							-6998,
							-3973
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39073,
					"arcs": [
						[
							-1883,
							-8872,
							-1749,
							-31,
							-2691,
							-7907
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16083,
					"arcs": [
						[
							-1240,
							-3513,
							-8817,
							-6386,
							-5531,
							-7400
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26055,
					"arcs": [
						[
							-5449,
							9043,
							9044,
							-3221,
							-262,
							-177
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34029,
					"arcs": [
						[
							-4372,
							9045,
							-6568,
							9046
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39035,
					"arcs": [
						[
							9047,
							9048,
							-3742,
							-8022,
							9049,
							-7714
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1109,
					"arcs": [
						[
							-4929,
							-6279,
							-8714,
							-8615,
							-1716,
							-3479
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8089,
					"arcs": [
						[
							-2708,
							-2399,
							-2907,
							-5827,
							-2385
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12125,
					"arcs": [
						[
							9050,
							-2931,
							-6721,
							-3536
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13031,
					"arcs": [
						[
							-486,
							9051,
							-8018,
							-6532,
							-8634,
							-7749,
							-8401
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39121,
					"arcs": [
						[
							-2015,
							-7583,
							-8885,
							-7677,
							-1878,
							-1743
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17157,
					"arcs": [
						[
							-8991,
							9052,
							-8792,
							-6710,
							-3807,
							-8908,
							-4240
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51085,
					"arcs": [
						[
							-9001,
							-8918,
							-8523,
							-8010,
							-6842,
							9053,
							-6333
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13091,
					"arcs": [
						[
							-5095,
							-7480,
							-7430,
							-7773,
							9054,
							-7409
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12105,
					"arcs": [
						[
							-8032,
							9055,
							-4899,
							-7346,
							-1992,
							-8698,
							-7900
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21085,
					"arcs": [
						[
							9056,
							-8947,
							9057,
							-5124,
							-7332,
							-5495
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27093,
					"arcs": [
						[
							-4821,
							-1825,
							-2545,
							-5306,
							-1509
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29179,
					"arcs": [
						[
							-3322,
							-8447,
							-2329,
							-90,
							-2910
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48431,
					"arcs": [
						[
							-120,
							-2412,
							-3329,
							-2675,
							-1988,
							-8687
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48495,
					"arcs": [
						[
							-8752,
							-8361,
							-7860,
							-8960,
							-8562
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17203,
					"arcs": [
						[
							-2186,
							-693,
							-1709,
							-1720,
							9058,
							-8436
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39097,
					"arcs": [
						[
							-2644,
							-103,
							-901,
							-8266,
							-1880,
							9059,
							-3344
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29003,
					"arcs": [
						[
							-8094,
							9060,
							-644,
							-7810,
							-7446,
							-5865
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5087,
					"arcs": [
						[
							-8372,
							9061,
							9062,
							-5924,
							9063,
							-8195,
							-8217
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37141,
					"arcs": [
						[
							-6828,
							-5589,
							-8929,
							9064,
							-7291,
							-5617,
							-1948,
							-6819
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54073,
					"arcs": [
						[
							-7679,
							-3854,
							-3823,
							-7939
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51820,
					"arcs": [
						[
							-7895
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30065,
					"arcs": [
						[
							9065,
							9066,
							-7934,
							-8821,
							-3242
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1029,
					"arcs": [
						[
							-3866,
							-4937,
							-8595,
							-6713,
							-954,
							-7799,
							-8891,
							-9028
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13049,
					"arcs": [
						[
							9067,
							-8637,
							-8251,
							9068,
							-3547
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21027,
					"arcs": [
						[
							-5736,
							-5755,
							-8944,
							-9057,
							-5494,
							9069
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22053,
					"arcs": [
						[
							-80,
							-4264,
							-8630,
							-8303,
							-7462,
							-4194,
							-4653
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29207,
					"arcs": [
						[
							-8446,
							-8452,
							9070,
							-4559,
							-5805,
							-4562,
							-3340
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35019,
					"arcs": [
						[
							-8586,
							9071,
							-652,
							-6765,
							-4833
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42097,
					"arcs": [
						[
							-4102,
							-8915,
							9072,
							-1299,
							-6855,
							-7188,
							9073,
							-3705
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47175,
					"arcs": [
						[
							-6684,
							-5352,
							-6682,
							-5350,
							-5361,
							-8904,
							-8861
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48339,
					"arcs": [
						[
							-7674,
							-5376,
							-4880,
							-3438,
							9074,
							-8307
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55057,
					"arcs": [
						[
							-2830,
							9075,
							-8290,
							-8867,
							-8491,
							-8798,
							9076
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24011,
					"arcs": [
						[
							9077,
							-8044,
							9078,
							9079,
							-5823
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17153,
					"arcs": [
						[
							-8923,
							9080,
							9081,
							-7016,
							-5034,
							-5662
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5073,
					"arcs": [
						[
							-4987,
							-3076,
							-5264,
							-7288,
							9082,
							-7101
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28083,
					"arcs": [
						[
							9083,
							-4052,
							-227,
							-3944,
							9084,
							-7794
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48275,
					"arcs": [
						[
							9085,
							-778,
							-921,
							-782
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40115,
					"arcs": [
						[
							-4547,
							-3597,
							-6888,
							-9030,
							-4020
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2164,
					"arcs": [
						[
							[
								9086,
								-7564,
								9087,
								-7612,
								9088,
								-1870,
								9089,
								9090,
								-2980
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39037,
					"arcs": [
						[
							-4182,
							-7659,
							-3033,
							-968,
							9091,
							-2965,
							-2950,
							-2812
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27139,
					"arcs": [
						[
							-1014,
							-7157,
							-3279,
							-2528,
							-8890,
							-8963
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19111,
					"arcs": [
						[
							-2251,
							-8184,
							-8005,
							9092,
							-7837,
							-5384
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45049,
					"arcs": [
						[
							-6286,
							-7707,
							-6433,
							-8358,
							-8015,
							9093
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19133,
					"arcs": [
						[
							-6861,
							-1695,
							9094,
							-8284,
							-8139
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27173,
					"arcs": [
						[
							-6840,
							-6972,
							-5309,
							-4281,
							-5501,
							-1611,
							-840
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36033,
					"arcs": [
						[
							-8432,
							-8857,
							9095,
							-8554,
							9096
						]
					]
				},
				{
					"type": "Polygon",
					"id": 25017,
					"arcs": [
						[
							-6852,
							-8500,
							-6293,
							-6697,
							-6291,
							-6698,
							-6477
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30005,
					"arcs": [
						[
							9097,
							-8953,
							9098,
							-4056,
							-5955
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 53029,
					"arcs": [
						[
							[
								-7472,
								9099
							]
						],
						[
							[
								9100
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1123,
					"arcs": [
						[
							-9029,
							-8893,
							-1714,
							-7698,
							-6315,
							-6726,
							-7355
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13085,
					"arcs": [
						[
							-5091,
							-449,
							-8070,
							9101,
							-2027,
							-5678,
							-4975
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13105,
					"arcs": [
						[
							-8071,
							-6360,
							-7338,
							-9027,
							-5839,
							-3902,
							-8150,
							-8142
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19085,
					"arcs": [
						[
							-9095,
							-1694,
							-4494,
							-7393,
							-8995,
							-8285
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21185,
					"arcs": [
						[
							-8574,
							9102,
							-3927,
							-4190,
							-5026
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46095,
					"arcs": [
						[
							9103,
							-2890,
							-6617,
							-4419,
							-7294
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49007,
					"arcs": [
						[
							-8665,
							-7924,
							-7975,
							-7963,
							-7927,
							-8484
						]
					]
				},
				{
					"type": "Polygon",
					"id": 15003,
					"arcs": [
						[
							9104
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47165,
					"arcs": [
						[
							-7160,
							-5646,
							-7290,
							-6688,
							-8650,
							-8346,
							-7041
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53045,
					"arcs": [
						[
							-9008,
							9105,
							-7402,
							-6985,
							9106,
							-8061,
							9107
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5001,
					"arcs": [
						[
							-6492,
							-7559,
							-7507,
							-7563,
							-8985,
							-6508,
							9108
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19011,
					"arcs": [
						[
							-5117,
							-7287,
							-1760,
							-1007,
							-2254
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29225,
					"arcs": [
						[
							-372,
							-1283,
							-2806,
							-2338,
							-4268,
							-2923
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37103,
					"arcs": [
						[
							-4074,
							-8240,
							-8831,
							-8927,
							-5587
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19037,
					"arcs": [
						[
							9109,
							-2506,
							9110,
							-5133,
							-2785
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22077,
					"arcs": [
						[
							9111,
							-5815,
							9112,
							-8544,
							-8465,
							9113,
							-7524,
							9114
						]
					]
				},
				{
					"type": "Polygon",
					"id": 10005,
					"arcs": [
						[
							-8043,
							9115,
							-6265,
							-6327,
							9116,
							-9079
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45079,
					"arcs": [
						[
							-6666,
							-8228,
							9117,
							-8971,
							-4105,
							-7230
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48331,
					"arcs": [
						[
							-8267,
							-1544,
							9118,
							-8588,
							9119,
							-7380
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54019,
					"arcs": [
						[
							9120,
							-7657,
							-4750,
							-7084,
							-7602
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22015,
					"arcs": [
						[
							-7102,
							-9083,
							-7289,
							-3971,
							-5498,
							9121
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53009,
					"arcs": [
						[
							-9006,
							9122
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13027,
					"arcs": [
						[
							9123,
							9124,
							-7780,
							-7995,
							-8156,
							-7412
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 48355,
					"arcs": [
						[
							[
								-6428,
								9125,
								-6309,
								9126
							]
						],
						[
							[
								-3836,
								9127,
								-6312,
								-5606
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30073,
					"arcs": [
						[
							9128,
							-3603,
							9129,
							-4061,
							-6553,
							-2471
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32029,
					"arcs": [
						[
							-7383,
							-8837
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12115,
					"arcs": [
						[
							-9033,
							-2781,
							-6651,
							9130
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46075,
					"arcs": [
						[
							-7239,
							-5603,
							-2891,
							-9104,
							-7293
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48287,
					"arcs": [
						[
							-7381,
							-9120,
							-8590,
							-8579,
							9131,
							-1925
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29033,
					"arcs": [
						[
							-2108,
							-5482,
							-8449,
							-7306,
							-6883,
							9132
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5121,
					"arcs": [
						[
							-7245,
							-7080,
							9133,
							-6502,
							9134,
							-8877
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17033,
					"arcs": [
						[
							-6815,
							-5379,
							-3945,
							-2753,
							-1182,
							-3311
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45081,
					"arcs": [
						[
							-7231,
							-4109,
							-8942,
							-8975,
							9135
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6027,
					"arcs": [
						[
							-8744,
							-8782,
							-8680,
							-8926,
							-699,
							9136,
							9137,
							9138
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21037,
					"arcs": [
						[
							9139,
							-3055,
							-4648,
							-7816
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28093,
					"arcs": [
						[
							-6899,
							-4627,
							-5793,
							-5510,
							-683,
							-3657,
							-8609
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 26033,
					"arcs": [
						[
							[
								9140,
								-8773,
								-2901
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31147,
					"arcs": [
						[
							-3027,
							-4004,
							-5867,
							-7445,
							-6576,
							-19
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36013,
					"arcs": [
						[
							9141,
							-6027,
							-3270,
							-1395,
							9142
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47099,
					"arcs": [
						[
							-5144,
							-8989,
							-4049,
							-5155,
							-7164
						]
					]
				},
				{
					"type": "Polygon",
					"id": 15005,
					"arcs": [
						[
							9143,
							-3097
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13075,
					"arcs": [
						[
							-8349,
							-3895,
							-7778,
							-9125,
							9144
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26013,
					"arcs": [
						[
							9145,
							9146,
							9147,
							-6906
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40101,
					"arcs": [
						[
							-5599,
							-243,
							9148,
							-7546,
							-8482,
							-8096
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17191,
					"arcs": [
						[
							9149,
							-1273,
							-1186,
							-8939,
							-6321,
							-4485,
							-9024
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39161,
					"arcs": [
						[
							9150,
							-111,
							-5760,
							-2519,
							-965,
							-8673,
							-8840
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39047,
					"arcs": [
						[
							-9060,
							-1885,
							-7906,
							-8049,
							-2020,
							-3345
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48493,
					"arcs": [
						[
							9151,
							-7862,
							-8864,
							-4117,
							-1067
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48243,
					"arcs": [
						[
							-1460,
							-8477,
							-7809,
							-8997,
							-7840,
							-8534
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36095,
					"arcs": [
						[
							9152,
							-2857,
							9153,
							9154,
							-7518,
							-8203
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12003,
					"arcs": [
						[
							-1932,
							-3548,
							-9069,
							-8250,
							-7712,
							-7870,
							-2932,
							-9051,
							-3535
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19059,
					"arcs": [
						[
							-7032,
							9155,
							9156,
							-2173
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34041,
					"arcs": [
						[
							-4410,
							-7611,
							-3681,
							-7065,
							-6519,
							-6953
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45021,
					"arcs": [
						[
							-7368,
							-7317,
							9157,
							-9004,
							-7270
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49023,
					"arcs": [
						[
							-7971,
							-8666,
							-8486,
							9158,
							9159
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41039,
					"arcs": [
						[
							-6144,
							-8649,
							-1089,
							-6401,
							-8670,
							-8809,
							9160
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47171,
					"arcs": [
						[
							-8886,
							-8221,
							-6373,
							-5198,
							-7009,
							-5622
						]
					]
				},
				{
					"type": "Polygon",
					"id": 50003,
					"arcs": [
						[
							-7673,
							-5304,
							-6100,
							-6634,
							-4655,
							-8977,
							-5932
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53071,
					"arcs": [
						[
							-4449,
							9161,
							-3460,
							-5397
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6055,
					"arcs": [
						[
							-8529,
							-4400,
							-5949,
							-8381
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21209,
					"arcs": [
						[
							9162,
							-6091,
							-3638,
							9163,
							9164,
							-9002,
							-3521
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26157,
					"arcs": [
						[
							9165,
							-8948,
							-7958,
							-8320,
							9166,
							-8725,
							-4244
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27029,
					"arcs": [
						[
							-5508,
							-3273,
							-634,
							9167,
							-2302,
							-7666
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48341,
					"arcs": [
						[
							-3262,
							-279,
							9168,
							-536,
							-1827,
							-2483
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48105,
					"arcs": [
						[
							-6740,
							-8732,
							-8688,
							-672,
							-1812,
							-2461,
							-4640,
							-5849,
							-7807
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48499,
					"arcs": [
						[
							-5608,
							-2034,
							-5412,
							-4127,
							-7566,
							-7510,
							9169
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40117,
					"arcs": [
						[
							-7528,
							-2055,
							-1673,
							-5151,
							-7330
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36017,
					"arcs": [
						[
							-4368,
							-8204,
							-7516,
							-7574,
							-2038
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40069,
					"arcs": [
						[
							-2078,
							-4152,
							-4306,
							-4089,
							-7669,
							-7534,
							-2069
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6067,
					"arcs": [
						[
							-4398,
							-7746,
							-1701,
							-443,
							9170,
							9171,
							-6988,
							-5950
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6029,
					"arcs": [
						[
							-334,
							9172,
							-9137,
							-698,
							-8968,
							-3373,
							-2896,
							-8
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21079,
					"arcs": [
						[
							-6147,
							-5122,
							-6783,
							-5086,
							9173,
							-4980
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30017,
					"arcs": [
						[
							-649,
							-8480,
							-7883,
							-8326,
							-6471,
							-7931
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46107,
					"arcs": [
						[
							-8919,
							-3302,
							-2871,
							-8955,
							-1891,
							-7235
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38049,
					"arcs": [
						[
							-4512,
							-8769,
							-3145,
							-5591,
							-5250,
							9174
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8083,
					"arcs": [
						[
							-5459,
							9175,
							-8803,
							-1114
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51107,
					"arcs": [
						[
							9176,
							-6253,
							-5885,
							-3977,
							-6179,
							9177,
							-7633,
							-7343
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1085,
					"arcs": [
						[
							-8711,
							-4930,
							-3477,
							-8537,
							-2423,
							-4934
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6077,
					"arcs": [
						[
							-9172,
							9178,
							-3878,
							9179,
							-5766,
							-6989
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21067,
					"arcs": [
						[
							-9165,
							9180,
							9181,
							-6781,
							-5120,
							-9003
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42081,
					"arcs": [
						[
							-1382,
							-8434,
							-1370,
							-6853,
							-1297,
							-9073,
							-8914,
							-6751,
							-726
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51003,
					"arcs": [
						[
							-7740,
							-3820,
							-5426,
							-6331,
							-404,
							-2802,
							-8481,
							-7892
						],
						[
							9182
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51075,
					"arcs": [
						[
							-6334,
							-9054,
							-6848,
							-2210,
							-1636,
							-406
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28111,
					"arcs": [
						[
							-8103,
							-4219,
							-7651,
							-832,
							-8479,
							-3334
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26049,
					"arcs": [
						[
							-9167,
							-8319,
							-8717,
							-1292,
							-8806,
							-8726
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39079,
					"arcs": [
						[
							-7908,
							-2694,
							-9021,
							-7241,
							-5630,
							-1887
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5015,
					"arcs": [
						[
							-1632,
							-6284,
							-2415,
							-8938,
							9183,
							-9062,
							-8371
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12103,
					"arcs": [
						[
							9184,
							-7902,
							-8701,
							9185,
							-7904
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 21075,
					"arcs": [
						[
							[
								-6943,
								-6805,
								-7339,
								9186,
								-5807
							]
						],
						[
							[
								9187,
								-5809
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54045,
					"arcs": [
						[
							-5677,
							9188,
							-7606,
							-3467
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51091,
					"arcs": [
						[
							-4501,
							-7891,
							-8039,
							-851
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29081,
					"arcs": [
						[
							-1156,
							-3564,
							-3994,
							-1899,
							-764,
							9189,
							-3598
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54049,
					"arcs": [
						[
							-483,
							-7945,
							-2114,
							9190
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28051,
					"arcs": [
						[
							-9085,
							-3943,
							-7756,
							-5515,
							-7795
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21101,
					"arcs": [
						[
							-8048,
							-6462,
							9191,
							-8661,
							9192,
							-3956,
							-6649
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29091,
					"arcs": [
						[
							-2374,
							-2340,
							-1407,
							-93,
							-8879,
							-2313
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48019,
					"arcs": [
						[
							9193,
							-2409,
							9194,
							-3237,
							9195,
							-7849
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4027,
					"arcs": [
						[
							-8411,
							-156,
							-4985,
							-5458,
							9196
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21001,
					"arcs": [
						[
							-4803,
							-6151,
							-4695,
							-1097,
							9197,
							9198
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29175,
					"arcs": [
						[
							-1288,
							-6155,
							-1629,
							-8179,
							-7425,
							-8448
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51147,
					"arcs": [
						[
							-5436,
							-2803,
							-1639,
							-8224,
							-6633,
							9199,
							-8487
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30069,
					"arcs": [
						[
							-8951,
							-651,
							-7935,
							-9067,
							9200
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51099,
					"arcs": [
						[
							9201,
							9202,
							-4359,
							-8917,
							-2177
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21179,
					"arcs": [
						[
							-957,
							-8888,
							-5131,
							-8794,
							-4254,
							-6079,
							-8945
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37137,
					"arcs": [
						[
							-4388,
							9203,
							-8237
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16021,
					"arcs": [
						[
							9204,
							-316,
							-6669,
							-3037
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22103,
					"arcs": [
						[
							9205,
							-4215,
							-8077,
							9206,
							-8606,
							-8511,
							-8981,
							9207
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 24019,
					"arcs": [
						[
							[
								-5987,
								9208
							]
						],
						[
							[
								-5824,
								-9080,
								-9117,
								-6326,
								9209
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54039,
					"arcs": [
						[
							9210,
							-8757,
							9211,
							-7658,
							-9121,
							-7601,
							9212,
							-5675,
							-7597
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28161,
					"arcs": [
						[
							-3051,
							-687,
							-2147,
							-222,
							-4051
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12053,
					"arcs": [
						[
							-4960,
							-8033,
							-7898,
							9213
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54055,
					"arcs": [
						[
							9214,
							-7608,
							-7603,
							-7087,
							-8037,
							-8956,
							-7830
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13253,
					"arcs": [
						[
							-3553,
							-7408,
							-4535,
							-3785,
							-3361
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32021,
					"arcs": [
						[
							-7386,
							-8694,
							-8682,
							-8783,
							-8742
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13189,
					"arcs": [
						[
							-5838,
							-7853,
							-5028,
							-8988,
							-3897,
							-3904
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36057,
					"arcs": [
						[
							9215,
							-4849,
							-2854,
							-9153,
							-8202,
							-8647
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6035,
					"arcs": [
						[
							-948,
							-8835,
							-1687,
							-8291,
							-2279
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18051,
					"arcs": [
						[
							-5665,
							-3949,
							-3518,
							-6458,
							-8047,
							-6647,
							-6323
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 22045,
					"arcs": [
						[
							[
								-6947,
								9216,
								-8469,
								-8342,
								9217,
								-6578,
								9218,
								-8301
							]
						],
						[
							[
								9219
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26043,
					"arcs": [
						[
							9220,
							9221,
							-3404,
							9222,
							-6468
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39025,
					"arcs": [
						[
							-1999,
							-2023,
							-8954,
							-5718,
							-3056,
							-9140,
							-7815
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34005,
					"arcs": [
						[
							-6522,
							-7125,
							-4373,
							-9047,
							-6567,
							-5967,
							-5708
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21059,
					"arcs": [
						[
							-6461,
							-8571,
							9223,
							-5492,
							-8662,
							-9192
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24013,
					"arcs": [
						[
							9224,
							-5716,
							-7054,
							-9043,
							-5883
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47069,
					"arcs": [
						[
							-4312,
							-6929,
							-7283,
							-7285,
							9225,
							-2549,
							-5792,
							-4625
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6099,
					"arcs": [
						[
							-5767,
							-9180,
							-3877,
							-2881,
							-4768,
							9226,
							-3756
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17163,
					"arcs": [
						[
							-8901,
							-8253,
							-2642,
							-8793,
							-9053,
							-8990,
							-4552
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38035,
					"arcs": [
						[
							-7719,
							-3724,
							-2306,
							-3624,
							-382,
							-3014
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42073,
					"arcs": [
						[
							-4250,
							9227,
							-7762,
							-8273,
							-2479
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49053,
					"arcs": [
						[
							-1605,
							-7033,
							-3003,
							-8207
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54029,
					"arcs": [
						[
							-8274,
							-7765,
							-6044,
							-7577,
							-8124
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38015,
					"arcs": [
						[
							-5252,
							-5592,
							-2992,
							-3626,
							-5217,
							-809
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24001,
					"arcs": [
						[
							-7247,
							-6574,
							-5948,
							-6256,
							-5909,
							-7992,
							-7735,
							-7174
						]
					]
				},
				{
					"type": "Polygon",
					"id": 32033,
					"arcs": [
						[
							-5535,
							-7972,
							-9160,
							9228,
							-8205,
							-8678,
							-7001
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26011,
					"arcs": [
						[
							-8724,
							-2848,
							9229,
							-4242,
							-2205
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30035,
					"arcs": [
						[
							9230,
							-3604,
							-9129,
							-2470
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47095,
					"arcs": [
						[
							-5810,
							-9188,
							-5808,
							-9187,
							-7341,
							-7147,
							-9018
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48181,
					"arcs": [
						[
							-7955,
							-7536,
							-7671,
							-8931,
							-8902,
							-1484,
							-4430
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21091,
					"arcs": [
						[
							-8570,
							-5737,
							-9070,
							-5493,
							-9224
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20149,
					"arcs": [
						[
							-8321,
							-22,
							-2706,
							-8845,
							9231,
							-8233
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51119,
					"arcs": [
						[
							-4363,
							9232,
							9233,
							-8211,
							-4949
						]
					]
				},
				{
					"type": "Polygon",
					"id": 56039,
					"arcs": [
						[
							-1660,
							-7663,
							-6916,
							-5912,
							-6249,
							-7801,
							-6704,
							-6977
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5101,
					"arcs": [
						[
							-9184,
							-8937,
							-2566,
							-859,
							-5925,
							-9063
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8093,
					"arcs": [
						[
							-4837,
							-4291,
							-5000,
							-2404,
							-8729,
							-5996,
							-4892
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29029,
					"arcs": [
						[
							-7144,
							-6409,
							-5210,
							-1279,
							-370,
							-1609,
							-5022
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31053,
					"arcs": [
						[
							-97,
							-8287,
							-8996,
							-4221,
							-8135,
							-2771,
							9234
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26163,
					"arcs": [
						[
							-8715,
							-4206,
							9235,
							-3982,
							9236
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20183,
					"arcs": [
						[
							9237,
							-608,
							-9036,
							-8760,
							9238,
							-6789
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22105,
					"arcs": [
						[
							-7477,
							9239,
							9240,
							-9208,
							-8980,
							-8708,
							-596
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51770,
					"arcs": [
						[
							-267,
							-4678
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27087,
					"arcs": [
						[
							-2303,
							-9168,
							-633,
							9241
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30103,
					"arcs": [
						[
							-7932,
							-6931,
							-8822
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 55007,
					"arcs": [
						[
							[
								9242,
								-8337,
								9243,
								-8344
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1091,
					"arcs": [
						[
							-5581,
							-8395,
							-7642,
							-2087,
							-4935,
							-2427,
							9244,
							-4519
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21099,
					"arcs": [
						[
							-8946,
							-6081,
							-4805,
							9245,
							-4707,
							-5125,
							-9058
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22009,
					"arcs": [
						[
							-4814,
							-8655,
							-8378,
							-5817,
							9246,
							-9115,
							-7523,
							-4261
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41053,
					"arcs": [
						[
							-6748,
							-4309,
							-3173,
							-1085,
							-8648,
							-6142
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47105,
					"arcs": [
						[
							-3717,
							-4874,
							-6297,
							-7994,
							-4730
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28115,
					"arcs": [
						[
							-5513,
							-5203,
							9247,
							-2144,
							-685
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31041,
					"arcs": [
						[
							-231,
							9248,
							-2053,
							9249,
							-2963,
							-516,
							-794,
							-2731,
							-4063
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20099,
					"arcs": [
						[
							9250,
							-3574,
							-4548,
							-4018,
							-4743,
							-6956
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38077,
					"arcs": [
						[
							-3349,
							9251,
							-8899,
							9252,
							-7766,
							-8271,
							9253
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48157,
					"arcs": [
						[
							-1567,
							9254,
							-3443,
							-3840,
							-8148
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31031,
					"arcs": [
						[
							-7770,
							9255,
							-4421,
							-8883,
							-6164,
							-228,
							9256,
							-1265,
							-8706,
							-3190
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51141,
					"arcs": [
						[
							-5441,
							-7376,
							9257,
							-3212,
							-7074,
							-6375
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8125,
					"arcs": [
						[
							-3380,
							-7748,
							-7312,
							-7321,
							-2777,
							-159,
							-1728
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24035,
					"arcs": [
						[
							-8780,
							-8045,
							-9078,
							-5822,
							9258
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12069,
					"arcs": [
						[
							-6627,
							-9014,
							-994,
							9259,
							-9056,
							-8031
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13053,
					"arcs": [
						[
							9260,
							-7784,
							9261,
							-8801,
							-4524
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13293,
					"arcs": [
						[
							-8272,
							-5007,
							-5480,
							9262,
							-5069,
							-7782,
							-8146
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37011,
					"arcs": [
						[
							-7867,
							-8225,
							-5225,
							-7198,
							-5573,
							-5195,
							-6372
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30077,
					"arcs": [
						[
							-2473,
							-367,
							-8453,
							-5401,
							-8982,
							-3996
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31169,
					"arcs": [
						[
							-3108,
							-5147,
							-8327,
							-5140
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42061,
					"arcs": [
						[
							-5328,
							-6890,
							-3708,
							-6544,
							-5945,
							-6573,
							-8940
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51143,
					"arcs": [
						[
							9263,
							-7374,
							-3812,
							-7533,
							-7843,
							-5183,
							-6555,
							-5181,
							-9000
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22117,
					"arcs": [
						[
							9264,
							-8127,
							-3299,
							-4212,
							-9206,
							-9241
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51153,
					"arcs": [
						[
							-9178,
							-6186,
							9265,
							-2175,
							-7634
						],
						[
							-261,
							-6949
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40129,
					"arcs": [
						[
							9266,
							9267,
							-1685,
							-2676,
							-3222,
							-45
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19049,
					"arcs": [
						[
							-1469,
							-884,
							-1789,
							-1985,
							-1471
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26007,
					"arcs": [
						[
							-8560,
							9268,
							-8718,
							-2218
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18131,
					"arcs": [
						[
							-5173,
							9269,
							9270,
							-6772,
							-6642
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41059,
					"arcs": [
						[
							-3461,
							-9162,
							-4448,
							-4617,
							-3730,
							-4855,
							-4610
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55083,
					"arcs": [
						[
							-4453,
							9271,
							9272,
							-1927,
							-2271,
							-1043,
							9273
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39125,
					"arcs": [
						[
							-5757,
							-106,
							-9151,
							-8839
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39133,
					"arcs": [
						[
							-3741,
							-8034,
							-2476,
							-8106,
							-8023
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30027,
					"arcs": [
						[
							-4057,
							-9099,
							-8952,
							-9201,
							-9066,
							-3241,
							-3046,
							-7044
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48029,
					"arcs": [
						[
							-9195,
							-2408,
							-6233,
							-7863,
							-9152,
							-1066,
							-3238
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34015,
					"arcs": [
						[
							-6660,
							-5710,
							-5969,
							-6570,
							-6268,
							-6274,
							-8456
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42043,
					"arcs": [
						[
							-9074,
							-7187,
							-2535,
							-4623,
							-5713,
							-8296,
							-7076
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55067,
					"arcs": [
						[
							-2667,
							-4454,
							-9274,
							-1045,
							-2270,
							-1855,
							9274
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48155,
					"arcs": [
						[
							-6119,
							-8245,
							-779,
							-9086,
							-781,
							-6737
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26103,
					"arcs": [
						[
							-9147,
							9275,
							-4211,
							-8874,
							-3405,
							-9222,
							9276
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26153,
					"arcs": [
						[
							-2903,
							-8775,
							9277,
							-8875,
							-4209
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51193,
					"arcs": [
						[
							-9203,
							9278,
							-3457,
							-6549,
							-4360
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53027,
					"arcs": [
						[
							-9009,
							-9108,
							-8063,
							-7644,
							-8825,
							9279
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49029,
					"arcs": [
						[
							-5856,
							-976,
							-7081,
							-7023,
							-5356
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54037,
					"arcs": [
						[
							-6254,
							-9177,
							-7342,
							-8101
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5069,
					"arcs": [
						[
							-8478,
							-6493,
							-9109,
							-6507,
							-8539,
							-1385
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29177,
					"arcs": [
						[
							-2120,
							-2109,
							-9133,
							-6882,
							-2736,
							-3991
						]
					]
				},
				{
					"type": "Polygon",
					"id": 11001,
					"arcs": [
						[
							-3975,
							-6997,
							9280,
							-7227
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48095,
					"arcs": [
						[
							-1783,
							-8629,
							-8314,
							-3187,
							-1990
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19063,
					"arcs": [
						[
							-7031,
							-1616,
							-577,
							-3120,
							-9156
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21119,
					"arcs": [
						[
							-3935,
							-3153,
							-8751,
							-6960,
							-3881,
							-7326
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 55029,
					"arcs": [
						[
							[
								9281
							]
						],
						[
							[
								-1105,
								9282
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16029,
					"arcs": [
						[
							-8281,
							-6250,
							-5910,
							-6543,
							-7744,
							-8868
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41051,
					"arcs": [
						[
							-8161,
							-6102,
							-5316,
							-7991,
							-8230,
							9283
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26071,
					"arcs": [
						[
							-6907,
							-9148,
							-9277,
							-9221,
							-6467,
							-4450,
							-3475,
							-5888,
							-7314
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26081,
					"arcs": [
						[
							-1519,
							-355,
							-1493,
							-2457,
							-307,
							-4346,
							-3417
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51025,
					"arcs": [
						[
							9284,
							9285,
							-6631,
							-7704,
							-7803,
							-6033,
							-4503
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27051,
					"arcs": [
						[
							-8897,
							-2164,
							-361,
							-1813,
							9286
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17067,
					"arcs": [
						[
							-7838,
							-9093,
							-8004,
							-3023,
							-1188,
							-5285,
							-8408
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21017,
					"arcs": [
						[
							-3637,
							-9025,
							-8907,
							9287,
							-9181,
							-9164
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22017,
					"arcs": [
						[
							9288,
							-6858,
							-7103,
							-9122,
							-5497,
							-7047,
							-7213,
							-6114
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2050,
					"arcs": [
						[
							[
								-846,
								9289,
								-8705,
								-1866,
								-9089,
								-7614,
								9290,
								-7617,
								9291
							]
						],
						[
							[
								9292
							]
						],
						[
							[
								9293
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40135,
					"arcs": [
						[
							-242,
							-8860,
							-8197,
							-7363,
							-7584,
							-7547,
							-9149
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17069,
					"arcs": [
						[
							-339,
							-7211,
							-3959,
							9294,
							-6969,
							-8832
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12051,
					"arcs": [
						[
							-745,
							-7691,
							-2006,
							-5654,
							-6393
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13215,
					"arcs": [
						[
							-3795,
							-7785,
							-9261,
							-4523,
							-7697
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13251,
					"arcs": [
						[
							-7694,
							-6287,
							-9094,
							-8019,
							-9052,
							-485
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24009,
					"arcs": [
						[
							-6719,
							9295,
							9296,
							-9015,
							-6999
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27101,
					"arcs": [
						[
							-5502,
							-4285,
							9297,
							-7013,
							-460,
							-6052
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55119,
					"arcs": [
						[
							-679,
							9298,
							-1853,
							-2284,
							9299,
							-1641
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13285,
					"arcs": [
						[
							-2547,
							-870,
							-8147,
							-3792,
							-1711,
							-8892
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28117,
					"arcs": [
						[
							-2551,
							9300,
							-29,
							-3304,
							-5200,
							-5512
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4007,
					"arcs": [
						[
							-288,
							-5453,
							9301,
							-9041,
							-4982,
							-4889
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26039,
					"arcs": [
						[
							-1303,
							9302,
							-3135,
							-3220
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39091,
					"arcs": [
						[
							-2521,
							-1340,
							-902,
							-101,
							9303
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20025,
					"arcs": [
						[
							-3395,
							-4495,
							-593,
							-6679,
							-6620,
							-5901
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35037,
					"arcs": [
						[
							-8585,
							-7131,
							-9019,
							-2484,
							-1829,
							-8905,
							-4583,
							-7192,
							-653,
							-9072
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51111,
					"arcs": [
						[
							-8488,
							-9200,
							-6632,
							-9286,
							9304
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40045,
					"arcs": [
						[
							-6681,
							-3084,
							9305,
							-9267,
							-44,
							-4639,
							-6622
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18037,
					"arcs": [
						[
							-3516,
							-8567,
							-756,
							-3200,
							-8749,
							-5733,
							-8569,
							-6459
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6015,
					"arcs": [
						[
							9306,
							-1232,
							-3764,
							-5769,
							9307
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36063,
					"arcs": [
						[
							-4596,
							-4691,
							-6025,
							9308
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49027,
					"arcs": [
						[
							-9229,
							-9159,
							-8485,
							-4939,
							-4433,
							-8206
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1035,
					"arcs": [
						[
							-8538,
							-3753,
							-5165,
							-7682
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 22099,
					"arcs": [
						[
							[
								-9218,
								-8341,
								-6579
							]
						],
						[
							[
								-9114,
								-8470,
								-9217,
								-6946,
								-7525
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36107,
					"arcs": [
						[
							-8912,
							-2040,
							-7576,
							-3286,
							-8433,
							9309
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48473,
					"arcs": [
						[
							-8308,
							-9075,
							-3444,
							-9255,
							-1566,
							-8581
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48395,
					"arcs": [
						[
							-1543,
							-1915,
							-6541,
							-4884,
							-8589,
							-9119
						]
					]
				},
				{
					"type": "Polygon",
					"id": 1025,
					"arcs": [
						[
							-9245,
							-2426,
							-7683,
							-146,
							-7788,
							-4520
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21147,
					"arcs": [
						[
							-8619,
							-6096,
							-5749,
							-6767,
							-8167,
							-8593
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26065,
					"arcs": [
						[
							-1464,
							-8807,
							-1296,
							-5485,
							-1474
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17187,
					"arcs": [
						[
							-7120,
							-3080,
							-7723,
							-3021,
							-8003
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37177,
					"arcs": [
						[
							9310,
							-7109,
							-6673
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17049,
					"arcs": [
						[
							9311,
							9312,
							-3308,
							-1271,
							-1527
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48129,
					"arcs": [
						[
							-943,
							-1452,
							-3146,
							-7010,
							-561
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48189,
					"arcs": [
						[
							-2438,
							-8261,
							9313,
							-2466,
							-8133
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2240,
					"arcs": [
						[
							-7726,
							9314,
							9315,
							-7621,
							-8703,
							-8658
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39033,
					"arcs": [
						[
							-7918,
							9316,
							-5248,
							9317,
							-4082,
							-2008
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20061,
					"arcs": [
						[
							-3917,
							-8235,
							9318,
							-2538,
							-5081
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48247,
					"arcs": [
						[
							9319,
							-668,
							-3115,
							-7919,
							-4515
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26161,
					"arcs": [
						[
							-1294,
							-8716,
							-9237,
							-3981,
							-545,
							-5486
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20035,
					"arcs": [
						[
							-2653,
							-8624,
							-2421,
							-7527,
							-7456,
							-6964
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5013,
					"arcs": [
						[
							9320,
							-8540,
							-4993,
							-6318,
							-7668
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40043,
					"arcs": [
						[
							-3083,
							-2464,
							-908,
							-1681,
							-9268,
							-9306
						]
					]
				},
				{
					"type": "Polygon",
					"id": 53043,
					"arcs": [
						[
							-8754,
							-6106,
							-8060,
							-8887,
							-6402,
							-4131,
							-5298
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22115,
					"arcs": [
						[
							-3962,
							-3650,
							-4815,
							-77,
							-4652,
							-6122
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12123,
					"arcs": [
						[
							-7996,
							-7722,
							-7871,
							9321,
							-8157
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21057,
					"arcs": [
						[
							-9198,
							-1102,
							-8258,
							-4144,
							-3163,
							9322
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26009,
					"arcs": [
						[
							-8575,
							-1304,
							-3219,
							-9045,
							9323
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 22125,
					"arcs": [
						[
							[
								-5801,
								-8419,
								-8542,
								-9113,
								-5814
							]
						],
						[
							[
								-5816,
								-9112,
								-9247
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31099,
					"arcs": [
						[
							-520,
							-3264,
							-603,
							9324,
							-8925
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54097,
					"arcs": [
						[
							-2117,
							-6758,
							-7792,
							-2126,
							-4136
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54005,
					"arcs": [
						[
							-5676,
							-9213,
							-7605,
							-7607,
							-9189
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54035,
					"arcs": [
						[
							-5941,
							-7941,
							9325,
							-8758,
							-9211,
							-7596,
							-7587
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12045,
					"arcs": [
						[
							-8312,
							-8399,
							-4471,
							-8748,
							9326
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19065,
					"arcs": [
						[
							-9111,
							-2505,
							-8425,
							-7286,
							-5134
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17179,
					"arcs": [
						[
							-8437,
							-9059,
							-1724,
							-2660,
							-4908,
							-7725
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27059,
					"arcs": [
						[
							-2797,
							-7098,
							-758,
							-3104,
							-1873
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55113,
					"arcs": [
						[
							-9244,
							-8336,
							-681,
							-1640,
							-2590
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36001,
					"arcs": [
						[
							-2856,
							-4848,
							-5935,
							9327,
							-9154
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39149,
					"arcs": [
						[
							-2522,
							-9304,
							-100,
							-2964,
							-9092,
							-967
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6103,
					"arcs": [
						[
							-8292,
							-4973,
							-6487,
							-8276,
							9328,
							-2281
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8001,
					"arcs": [
						[
							-8597,
							-7950,
							-2648,
							-1725,
							-2377,
							-8599,
							-4997
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45077,
					"arcs": [
						[
							-6390,
							-8363,
							-6357,
							-5779
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28113,
					"arcs": [
						[
							-2631,
							-8128,
							-9265,
							-9240,
							-7476
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19161,
					"arcs": [
						[
							-1439,
							-1672,
							-342,
							-1692,
							-3255
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48065,
					"arcs": [
						[
							-9169,
							-278,
							-920,
							-944,
							-560,
							-537
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28105,
					"arcs": [
						[
							-4228,
							-7557,
							-5804,
							-2608,
							-7836,
							-7757
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41001,
					"arcs": [
						[
							-3728,
							-4616,
							-8583,
							-7171,
							-7459,
							-4856
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4009,
					"arcs": [
						[
							-5452,
							-5077,
							-8697,
							9329,
							-5455,
							-9042,
							-9302
						]
					]
				},
				{
					"type": "Polygon",
					"id": 22005,
					"arcs": [
						[
							-8685,
							-8710,
							-8979,
							-7981,
							-8339,
							-8468
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12095,
					"arcs": [
						[
							-996,
							9330,
							-4895,
							-9260
						]
					]
				},
				{
					"type": "Polygon",
					"id": 15001,
					"arcs": [
						[
							9331
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28003,
					"arcs": [
						[
							-9226,
							-7284,
							-6608,
							-30,
							-9301,
							-2550
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21169,
					"arcs": [
						[
							-9246,
							-4804,
							-9199,
							-9323,
							-3162,
							-4708
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12093,
					"arcs": [
						[
							-4898,
							-7359,
							-7362,
							-8403,
							-744,
							-7347
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55005,
					"arcs": [
						[
							-6166,
							-2591,
							-1643,
							9332,
							-1644,
							-4758
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36041,
					"arcs": [
						[
							-8555,
							-9096,
							-8858,
							-7515,
							-4851,
							9333,
							-8645
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31061,
					"arcs": [
						[
							-9325,
							-609,
							-9238,
							-6788,
							-470
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13157,
					"arcs": [
						[
							9334,
							-751,
							-8144,
							-2984,
							-2567
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30051,
					"arcs": [
						[
							-3602,
							9335,
							-5956,
							-4054,
							-9130
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20051,
					"arcs": [
						[
							9336,
							-8763,
							9337,
							-2224,
							9338,
							-2309
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48059,
					"arcs": [
						[
							-3327,
							-2916,
							-1457,
							-1906,
							-8628,
							9339
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8057,
					"arcs": [
						[
							-8394,
							-4737,
							-6457,
							-6235,
							-8084
						]
					]
				},
				{
					"type": "Polygon",
					"id": 4003,
					"arcs": [
						[
							-5456,
							-9330,
							-8696,
							-3613,
							9340,
							-3746
						]
					]
				},
				{
					"type": "Polygon",
					"id": 33009,
					"arcs": [
						[
							-7373,
							-3450,
							-736,
							-2557,
							-8185,
							-1308,
							-8961,
							-4574,
							-6098
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19137,
					"arcs": [
						[
							-7394,
							-3248,
							-3211,
							-5380,
							-4184
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36035,
					"arcs": [
						[
							-9334,
							-4850,
							-9216,
							-8646
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20135,
					"arcs": [
						[
							-5084,
							-2310,
							-9339,
							-2227,
							-1975,
							-3183,
							-4253,
							-349
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21103,
					"arcs": [
						[
							-8573,
							9341,
							9342,
							-3519,
							-3923,
							-9103
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42001,
					"arcs": [
						[
							-8297,
							-5717,
							-9225,
							-5882,
							-6547
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12009,
					"arcs": [
						[
							9343,
							-7356,
							-4896,
							-9331,
							-9013
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21041,
					"arcs": [
						[
							-5900,
							-5052,
							9344,
							-9342,
							-8572,
							-4717
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27163,
					"arcs": [
						[
							-8935,
							-760,
							-7097,
							-4759,
							-3733,
							-8626,
							-3276
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27027,
					"arcs": [
						[
							9345,
							-638,
							-2162,
							-8896,
							-9252,
							-3348
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13079,
					"arcs": [
						[
							-9263,
							-5479,
							-6074,
							-4900,
							-4701,
							-5070
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18015,
					"arcs": [
						[
							9346,
							-8850,
							-4781,
							-6776,
							-6774
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18033,
					"arcs": [
						[
							-8795,
							-7879,
							-5759,
							-8838,
							-1140
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18097,
					"arcs": [
						[
							-2256,
							-427,
							-1056,
							-4489,
							-8246,
							-8175,
							-8667
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37179,
					"arcs": [
						[
							-6040,
							-8934,
							-8958,
							-6029,
							-6599,
							-6108
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36015,
					"arcs": [
						[
							-3617,
							-4844,
							-8913,
							-9310,
							-8435,
							-1380
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31183,
					"arcs": [
						[
							-5177,
							-1621,
							-5169,
							-3665,
							9347,
							-2051
						]
					]
				},
				{
					"type": "Polygon",
					"id": 23003,
					"arcs": [
						[
							-2636,
							-5500,
							-4265,
							-5444,
							9348
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18017,
					"arcs": [
						[
							-9271,
							9349,
							-8853,
							-8848,
							-9347,
							-6773
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29075,
					"arcs": [
						[
							-8093,
							-3599,
							-9190,
							-768,
							-639,
							-9061
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18105,
					"arcs": [
						[
							-8177,
							-220,
							-5692,
							-8293,
							-4787,
							-5138
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31097,
					"arcs": [
						[
							-8994,
							-4005,
							-3025,
							-6057
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6005,
					"arcs": [
						[
							-442,
							-5268,
							-3879,
							-9179,
							-9171
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31085,
					"arcs": [
						[
							-1320,
							-2732,
							-2192,
							9350,
							-7319,
							-7310
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39075,
					"arcs": [
						[
							9351,
							-8108,
							-5234,
							-8153,
							-1375,
							-8091
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5061,
					"arcs": [
						[
							-624,
							-4986,
							-6512,
							-8632,
							-8921
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27033,
					"arcs": [
						[
							-4284,
							-6152,
							-554,
							-7030,
							-7014,
							-9298
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21233,
					"arcs": [
						[
							-3957,
							-9193,
							-8664,
							9352,
							-2743,
							9353
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51540,
					"arcs": [
						[
							-9183
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48479,
					"arcs": [
						[
							-3736,
							-2994,
							-402,
							-669,
							-9320,
							-4514,
							9354
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55091,
					"arcs": [
						[
							-8625,
							-1646,
							-274,
							9355,
							-4348,
							-5520
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5145,
					"arcs": [
						[
							-3484,
							-6421,
							-9022,
							-5989,
							-7558,
							-6490,
							-7252
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45091,
					"arcs": [
						[
							-7316,
							-8936,
							-6042,
							-6112,
							-1586,
							-9005,
							-9158
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13197,
					"arcs": [
						[
							-7783,
							-5072,
							-8653,
							9356,
							-1841,
							-8802,
							-9262
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37041,
					"arcs": [
						[
							-8770,
							-8472,
							-8547,
							9357
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55011,
					"arcs": [
						[
							-273,
							-8474,
							-8426,
							-4349,
							-9356
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 8013,
					"arcs": [
						[
							[
								-8598
							]
						],
						[
							[
								-6456,
								-7952,
								-8596,
								-4995,
								-8731,
								-6237
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31037,
					"arcs": [
						[
							-7197,
							-98,
							-9235,
							-2770,
							-5570
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46007,
					"arcs": [
						[
							-7295,
							-4422,
							-9256,
							-7769
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5135,
					"arcs": [
						[
							-2315,
							-8878,
							-9135,
							-6506,
							-6418,
							-6424
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40097,
					"arcs": [
						[
							-4022,
							-9031,
							-239,
							-5598,
							-7979
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55081,
					"arcs": [
						[
							-9077,
							-8797,
							-4922,
							-2831
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13071,
					"arcs": [
						[
							-6787,
							-8350,
							-9145,
							-9124,
							-7411,
							-3909
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38101,
					"arcs": [
						[
							-4513,
							-9175,
							-5249,
							-5593,
							-3065
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17035,
					"arcs": [
						[
							9358,
							-6812,
							-6816,
							-3309,
							-9313
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40077,
					"arcs": [
						[
							-7549,
							-7586,
							-2080,
							-7544
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54047,
					"arcs": [
						[
							-3469,
							-7609,
							-9215,
							-7829,
							-7684
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54015,
					"arcs": [
						[
							-8756,
							-4955,
							-4681,
							-7656,
							-9212
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5055,
					"arcs": [
						[
							-9134,
							-7079,
							-4560,
							-7189,
							-6503
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20167,
					"arcs": [
						[
							-8762,
							-2873,
							-2246,
							-4795,
							-2225,
							-9338
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55017,
					"arcs": [
						[
							-9333,
							-1642,
							-9300,
							-2287,
							-269,
							-1645
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55103,
					"arcs": [
						[
							-8494,
							-8895,
							-8385,
							-8813,
							-8799
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16025,
					"arcs": [
						[
							9359,
							-4481,
							-3510,
							-1238
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39077,
					"arcs": [
						[
							-5629,
							-7717,
							-8092,
							-5245,
							-9317,
							-7917,
							-3653
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48379,
					"arcs": [
						[
							-5609,
							-9170,
							-7509,
							-2958
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12039,
					"arcs": [
						[
							-4537,
							-2160,
							9360,
							-4468,
							-3787
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19089,
					"arcs": [
						[
							-1664,
							-7022,
							-2501,
							-9110,
							-585
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48315,
					"arcs": [
						[
							-2046,
							-6859,
							-9289,
							-6113,
							-4123
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5047,
					"arcs": [
						[
							-8196,
							-9064,
							-5927,
							-8978,
							-7365
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29031,
					"arcs": [
						[
							-8910,
							-8924,
							-5664,
							-4555,
							-9071,
							-8451
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48265,
					"arcs": [
						[
							-2335,
							-397,
							-2410,
							-9194,
							-7848,
							-2939
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2130,
					"arcs": [
						[
							[
								9361
							]
						],
						[
							[
								9362
							]
						],
						[
							[
								-1353,
								9363,
								-292,
								9364
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51191,
					"arcs": [
						[
							-8962,
							-4333,
							-9032,
							-7864,
							-4040,
							-1401,
							-4039,
							-7141
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36051,
					"arcs": [
						[
							-4688,
							-5879,
							-4296,
							-3614,
							-2624,
							-8984
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42049,
					"arcs": [
						[
							9365,
							-9143,
							-1394,
							-7771,
							-4403
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48263,
					"arcs": [
						[
							-3116,
							-3236,
							-812,
							-3325,
							-2912
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13261,
					"arcs": [
						[
							-1842,
							-9357,
							-8652,
							-5066,
							-5042,
							-7897,
							-2597,
							-2815
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51510,
					"arcs": [
						[
							-7228,
							-9281,
							-6996,
							-6182
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31175,
					"arcs": [
						[
							-2052,
							-9348,
							-3668,
							-2961,
							-9250
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55075,
					"arcs": [
						[
							-6469,
							-9223,
							-3408,
							9366,
							-9272,
							-4452
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20163,
					"arcs": [
						[
							-6790,
							-9239,
							-8764,
							-9337,
							-2308,
							-3100
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20205,
					"arcs": [
						[
							-1444,
							-6821,
							9367,
							-6954,
							-8623
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13281,
					"arcs": [
						[
							-8193,
							-8856,
							-8067,
							-7436,
							-8130
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39089,
					"arcs": [
						[
							-6215,
							-1377,
							-8154,
							-1746,
							-1747,
							-8871,
							-8264
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42025,
					"arcs": [
						[
							-4098,
							-4412,
							-6952,
							-6878,
							-7186
						]
					]
				},
				{
					"type": "Polygon",
					"id": 30081,
					"arcs": [
						[
							-3998,
							-8983,
							-5404,
							-180,
							-1146,
							-2275
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39169,
					"arcs": [
						[
							9368,
							-8025,
							-8105,
							-9352,
							-8090
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54105,
					"arcs": [
						[
							-3828,
							-4957,
							-8755,
							-9326,
							-7940
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28055,
					"arcs": [
						[
							-3367,
							-5016,
							-5019,
							-5518,
							-8882,
							-8414
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39085,
					"arcs": [
						[
							9369,
							-4406,
							-3738,
							-9049
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48387,
					"arcs": [
						[
							-7465,
							-4357,
							-7162,
							-2043,
							-7455,
							-2031,
							-5365,
							-3848
						]
					]
				},
				{
					"type": "Polygon",
					"id": 54103,
					"arcs": [
						[
							-7640,
							-7638,
							-484,
							-9191,
							-2113,
							-7887,
							-3852,
							-8884
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36099,
					"arcs": [
						[
							-8356,
							-8566,
							-8911,
							-4842,
							-540,
							-4295
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13055,
					"arcs": [
						[
							-5660,
							-5668,
							-8594,
							-5161
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51089,
					"arcs": [
						[
							-7375,
							-9264,
							-8999,
							-3213,
							-9258
						],
						[
							-1423
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28121,
					"arcs": [
						[
							-8545,
							-8078,
							-423,
							-2573,
							-3661
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 1097,
					"arcs": [
						[
							[
								9370
							]
						],
						[
							[
								-7789,
								-144,
								9371,
								-5523,
								-834,
								-7650
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26149,
					"arcs": [
						[
							-1496,
							-7299,
							-3951,
							9372,
							-7730
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49009,
					"arcs": [
						[
							-7280,
							-3770,
							-7973,
							-7922,
							-979
						]
					]
				},
				{
					"type": "Polygon",
					"id": 36039,
					"arcs": [
						[
							-9155,
							-9328,
							-8784,
							-6352,
							-7519
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31171,
					"arcs": [
						[
							-9257,
							-233,
							-4062,
							-2430,
							-1266
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31115,
					"arcs": [
						[
							-6163,
							-4279,
							-5178,
							-2054,
							-9249,
							-230
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46079,
					"arcs": [
						[
							-3070,
							9373,
							-8847,
							-4726,
							9374,
							-1062
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28017,
					"arcs": [
						[
							-9248,
							-5202,
							-5794,
							-7556,
							-4226,
							-2145
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31013,
					"arcs": [
						[
							-1263,
							-3192,
							-138,
							-1344,
							-7194
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13139,
					"arcs": [
						[
							-9102,
							-8069,
							-7438,
							-8066,
							-752,
							-9335,
							-1848,
							-2028
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48237,
					"arcs": [
						[
							-125,
							-6205,
							-8353,
							-6736,
							-1751,
							-1033,
							-1078
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20133,
					"arcs": [
						[
							-1211,
							-6734,
							-3575,
							-9251,
							-6955,
							-9368
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8017,
					"arcs": [
						[
							-163,
							-3393,
							9375,
							-2395,
							9376
						]
					]
				},
				{
					"type": "Polygon",
					"id": 19041,
					"arcs": [
						[
							-9157,
							-3122,
							-1437,
							-1151
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17021,
					"arcs": [
						[
							-4775,
							9377,
							-874,
							-8439
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18035,
					"arcs": [
						[
							-500,
							9378,
							-3035,
							-7660,
							-2971,
							-8351
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38045,
					"arcs": [
						[
							-8823,
							-1362,
							9379,
							-6129,
							-3400,
							-2261
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26133,
					"arcs": [
						[
							-264,
							-3139,
							-2202,
							-629,
							-1499
						]
					]
				},
				{
					"type": "Polygon",
					"id": 5039,
					"arcs": [
						[
							-209,
							-1387,
							-8541,
							-9321,
							-7667,
							-7068
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16013,
					"arcs": [
						[
							-3338,
							-8088,
							-8280,
							9380,
							-6383,
							-493,
							-4482,
							-9360,
							-1237
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21107,
					"arcs": [
						[
							-9353,
							-8663,
							-3933,
							-6778,
							-2744
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48463,
					"arcs": [
						[
							-2941,
							-7850,
							-9196,
							-3239,
							9381,
							-8964
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55141,
					"arcs": [
						[
							-2285,
							-1857,
							-1042,
							-8288,
							-9076,
							-2829
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31005,
					"arcs": [
						[
							-8707,
							-1268,
							-2434,
							-8827,
							-1390
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20071,
					"arcs": [
						[
							-9376,
							-3392,
							9382,
							-2440,
							9383,
							-2396
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21049,
					"arcs": [
						[
							-9288,
							-8906,
							-8398,
							-6083,
							-6782,
							-9182
						]
					]
				},
				{
					"type": "Polygon",
					"id": 47149,
					"arcs": [
						[
							-8348,
							-8651,
							-5370,
							-5339,
							-6763,
							-4866,
							-7224
						]
					]
				},
				{
					"type": "Polygon",
					"id": 24037,
					"arcs": [
						[
							-9297,
							9384,
							-9016
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37191,
					"arcs": [
						[
							-3126,
							-7064,
							-4076,
							-5586,
							-6827,
							-5191
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37053,
					"arcs": [
						[
							-8805,
							-3195,
							9385,
							-6341,
							9386,
							-8365
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8099,
					"arcs": [
						[
							-2397,
							-9384,
							-2443,
							-5474,
							-2925,
							-2904
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17005,
					"arcs": [
						[
							-877,
							-1530,
							-2639,
							-8252
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18009,
					"arcs": [
						[
							9387,
							-3030,
							-9379,
							-499
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26057,
					"arcs": [
						[
							-2429,
							-8722,
							-8728,
							-8808,
							-1462,
							-353
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31185,
					"arcs": [
						[
							-5171,
							-5209,
							-3107,
							-2723,
							-6161
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48153,
					"arcs": [
						[
							-8260,
							-7011,
							-1835,
							-2782,
							-9314
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40081,
					"arcs": [
						[
							-8854,
							-5152,
							-1676,
							-769,
							-4853,
							-281
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6019,
					"arcs": [
						[
							-4766,
							-8745,
							-9139,
							9388,
							-332,
							-1430,
							-1669,
							9389
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27153,
					"arcs": [
						[
							-1514,
							-7877,
							-5233,
							-4818,
							-358,
							-2163
						]
					]
				},
				{
					"type": "Polygon",
					"id": 31087,
					"arcs": [
						[
							1734,
							-7320,
							-9351,
							-2191,
							-468,
							-1736,
							-1735
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38095,
					"arcs": [
						[
							9390,
							-2236,
							-4301,
							-7937,
							-3142,
							-8324
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17087,
					"arcs": [
						[
							-8922,
							-2851,
							-8834,
							9391,
							-9081
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20203,
					"arcs": [
						[
							-3391,
							-6090,
							-76,
							-414,
							-2441,
							-9383
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27107,
					"arcs": [
						[
							-2304,
							-9242,
							-632,
							-9346,
							-3347,
							-3625
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48149,
					"arcs": [
						[
							-1926,
							-9132,
							-8582,
							-1570,
							-4318,
							-1790,
							-8863,
							-1093
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46011,
					"arcs": [
						[
							-1591,
							-842,
							-1614,
							-8846,
							-9374,
							-3069
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46067,
					"arcs": [
						[
							-8959,
							-2800,
							9392,
							-528,
							-6437,
							-6008,
							-7182,
							-2968
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48025,
					"arcs": [
						[
							-4120,
							-8865,
							-6195,
							-3832,
							-4128
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42031,
					"arcs": [
						[
							-8525,
							9393,
							-6563,
							9394,
							-7324
						]
					]
				},
				{
					"type": "Polygon",
					"id": 29027,
					"arcs": [
						[
							-1627,
							-4825,
							-6891,
							-1215,
							-8180
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21187,
					"arcs": [
						[
							-9345,
							-5051,
							-6092,
							-9163,
							-3520,
							-9343
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41067,
					"arcs": [
						[
							-8162,
							-9284,
							-8229,
							-4307,
							-6747
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26105,
					"arcs": [
						[
							-2944,
							-1501,
							-828,
							9395
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13315,
					"arcs": [
						[
							-5040,
							-7410,
							-9055,
							-7775,
							-3829,
							-7416,
							-7896
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8073,
					"arcs": [
						[
							-7910,
							-2378,
							-1729,
							-164,
							-9377,
							-2394,
							-2707,
							-8691
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51117,
					"arcs": [
						[
							-8489,
							-9305,
							-9285,
							-4502,
							-3090,
							-6501,
							-7845
						]
					]
				},
				{
					"type": "Polygon",
					"id": 8067,
					"arcs": [
						[
							-5003,
							-6307,
							-5585,
							-8804,
							-9176
						]
					]
				},
				{
					"type": "Polygon",
					"id": 46087,
					"arcs": [
						[
							-1063,
							-9375,
							-4729,
							-523,
							-9393,
							-2799
						]
					]
				},
				{
					"type": "Polygon",
					"id": 55069,
					"arcs": [
						[
							-678,
							-2668,
							-9275,
							-1854,
							-9299
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20181,
					"arcs": [
						[
							-2776,
							-1739,
							-2518,
							-6089,
							-3389,
							-161
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13289,
					"arcs": [
						[
							-6003,
							-3890,
							-5093,
							-4902,
							-6073
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42019,
					"arcs": [
						[
							-4249,
							-7325,
							-9395,
							-6562,
							-8900,
							-7763,
							-9228
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6105,
					"arcs": [
						[
							-3762,
							-2282,
							-9329,
							-8275,
							-5770
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13113,
					"arcs": [
						[
							-6071,
							-8263,
							-7448,
							-867
						]
					]
				},
				{
					"type": "Polygon",
					"id": 2290,
					"arcs": [
						[
							-2511,
							-1967,
							-2208,
							9396,
							-9315,
							-7728,
							-8660,
							-8702,
							-9290,
							-845
						]
					]
				},
				{
					"type": "Polygon",
					"id": 28133,
					"arcs": [
						[
							-7553,
							-7936,
							-4053,
							-9084,
							-7793,
							-5013
						]
					]
				},
				{
					"type": "Polygon",
					"id": 12073,
					"arcs": [
						[
							-9361,
							-2159,
							-7414,
							-8155,
							-4167,
							-4469
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26135,
					"arcs": [
						[
							-2219,
							-8720,
							-8723,
							-9303
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18133,
					"arcs": [
						[
							9397,
							-8621,
							-8668,
							-8178,
							-5136,
							-6486
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48115,
					"arcs": [
						[
							-3019,
							-2371,
							-2358,
							-2344,
							-1919
						]
					]
				},
				{
					"type": "Polygon",
					"id": 49005,
					"arcs": [
						[
							-3800,
							-7745,
							-5853,
							-5354,
							-7855
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45047,
					"arcs": [
						[
							-5260,
							-7232,
							-9136,
							-8974,
							-9026,
							-7336
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45061,
					"arcs": [
						[
							-8226,
							-6657,
							-5337,
							9398
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45075,
					"arcs": [
						[
							-4107,
							-8973,
							-6613,
							-8520,
							-6217,
							-7705,
							-6369,
							-5696,
							-8943
						]
					]
				},
				{
					"type": "Polygon",
					"id": 40053,
					"arcs": [
						[
							-1797,
							-6966,
							-7458,
							-1546,
							-432
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18165,
					"arcs": [
						[
							-2196,
							-4794,
							9399,
							-301,
							-7209,
							-8676
						]
					]
				},
				{
					"type": "Polygon",
					"id": 35055,
					"arcs": [
						[
							-3778,
							-8527,
							-6128,
							-8987,
							-4588
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21055,
					"arcs": [
						[
							-9295,
							-3958,
							-9354,
							-2748,
							-3525,
							-6970
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18179,
					"arcs": [
						[
							-2239,
							-8841,
							-8674,
							-3031,
							-9388,
							-498
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17121,
					"arcs": [
						[
							-2640,
							-1528,
							-1274,
							-9150,
							-9023,
							-8790
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48441,
					"arcs": [
						[
							-3328,
							-9340,
							-8627,
							-1781,
							-3323
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27035,
					"arcs": [
						[
							-7876,
							-8497,
							-1877,
							-5231
						]
					]
				},
				{
					"type": "Polygon",
					"id": 38073,
					"arcs": [
						[
							-1361,
							-3350,
							-9254,
							-8270,
							-6130,
							-9380
						]
					]
				},
				{
					"type": "Polygon",
					"id": 48507,
					"arcs": [
						[
							-9382,
							-1358,
							-2993,
							-3735
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18169,
					"arcs": [
						[
							-1137,
							-2876,
							-2240,
							-496,
							-8852,
							9400
						]
					]
				},
				{
					"type": "Polygon",
					"id": 41015,
					"arcs": [
						[
							-8777,
							-8811,
							-1233,
							-9307,
							9401
						]
					]
				},
				{
					"type": "Polygon",
					"id": 26159,
					"arcs": [
						[
							-310,
							-1497,
							-7729,
							-6412,
							9402
						]
					]
				},
				{
					"type": "Polygon",
					"id": 34031,
					"arcs": [
						[
							-7610,
							-5542,
							-191,
							-8734,
							-7427,
							-3676
						]
					]
				},
				{
					"type": "Polygon",
					"id": 16077,
					"arcs": [
						[
							-8283,
							-8869,
							-3797,
							-6384,
							-9381
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42065,
					"arcs": [
						[
							-9394,
							-8524,
							-806,
							-7826,
							-6791,
							-6564
						]
					]
				},
				{
					"type": "MultiPolygon",
					"id": 2150,
					"arcs": [
						[
							[
								9403
							]
						],
						[
							[
								9404
							]
						],
						[
							[
								9405
							]
						],
						[
							[
								9406
							]
						],
						[
							[
								-1869,
								9407,
								-9090
							]
						]
					]
				},
				{
					"type": "Polygon",
					"id": 45085,
					"arcs": [
						[
							-8227,
							-9399,
							-5336,
							-6610,
							-8972,
							-9118
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18121,
					"arcs": [
						[
							-4793,
							-8622,
							-9398,
							-6485,
							-302,
							-9400
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39103,
					"arcs": [
						[
							-7715,
							-9050,
							-8026,
							-9369,
							-8089
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13025,
					"arcs": [
						[
							-8269,
							-3507,
							-8030,
							-8638,
							-9068,
							-3546
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6047,
					"arcs": [
						[
							-9227,
							-4767,
							-4763,
							-9390,
							-1668,
							-3757
						]
					]
				},
				{
					"type": "Polygon",
					"id": 39117,
					"arcs": [
						[
							-4083,
							-9318,
							-5247,
							-1372,
							-6214
						]
					]
				},
				{
					"type": "Polygon",
					"id": 13051,
					"arcs": [
						[
							-8017,
							-8360,
							9408,
							-6534
						]
					]
				},
				{
					"type": "Polygon",
					"id": 6107,
					"arcs": [
						[
							-9138,
							-9173,
							-333,
							-9389
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17127,
					"arcs": [
						[
							-9392,
							-8833,
							-6967,
							-7017,
							-9082
						]
					]
				},
				{
					"type": "Polygon",
					"id": 17173,
					"arcs": [
						[
							-9378,
							-4774,
							-6802,
							-6813,
							-9359,
							-9312,
							-1526,
							-875
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37147,
					"arcs": [
						[
							-3124,
							-3692,
							-8126,
							-4390,
							-8236,
							-4072,
							-7063
						]
					]
				},
				{
					"type": "Polygon",
					"id": 51115,
					"arcs": [
						[
							-9234,
							9409,
							-8212
						]
					]
				},
				{
					"type": "Polygon",
					"id": 27155,
					"arcs": [
						[
							-9253,
							-8898,
							-9287,
							-1816,
							-8986,
							-7767
						]
					]
				},
				{
					"type": "Polygon",
					"id": 44007,
					"arcs": [
						[
							-6479,
							-6701,
							-6639,
							-6007,
							9410,
							-474,
							-3782
						]
					]
				},
				{
					"type": "Polygon",
					"id": 20197,
					"arcs": [
						[
							-9319,
							-8234,
							-9232,
							-8844,
							-9035,
							-66,
							-2539
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18039,
					"arcs": [
						[
							-7731,
							-9373,
							-3954,
							-1143,
							-1134,
							-1123,
							-3252
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18005,
					"arcs": [
						[
							-8247,
							-4490,
							-1006,
							-5080,
							-5689,
							-218
						]
					]
				},
				{
					"type": "Polygon",
					"id": 21137,
					"arcs": [
						[
							-4981,
							-9174,
							-5090,
							-8618,
							-4693
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42023,
					"arcs": [
						[
							-6885,
							-728,
							-6750,
							-7827,
							-804
						]
					]
				},
				{
					"type": "Polygon",
					"id": 18049,
					"arcs": [
						[
							-1125,
							-1138,
							-9401,
							-8851,
							-9350,
							-9270
						]
					]
				},
				{
					"type": "Polygon",
					"id": 42091,
					"arcs": [
						[
							-4862,
							-6880,
							-6523,
							-5706,
							-6659,
							-8502
						]
					]
				},
				{
					"type": "Polygon",
					"id": 37159,
					"arcs": [
						[
							-8295,
							-7264,
							-8957,
							-8932,
							-6559
						]
					]
				}
			]
		},
		"states": {
			"type": "GeometryCollection",
			"geometries": [
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								2311,
								2312,
								2313,
								-8878,
								-8877,
								-7245,
								7077,
								-3342,
								-4561,
								-4560,
								-4566,
								-4565,
								8387,
								-7151,
								-7237,
								-6913,
								-6897,
								-6914,
								-6915,
								-6901,
								8115,
								-7833,
								3446,
								7559,
								7560,
								-7551,
								-7550,
								3364,
								3365,
								3366,
								3367,
								3368,
								3369,
								-3576,
								6319,
								-3582,
								-3581,
								5266,
								-7288,
								9082,
								7101,
								7102,
								-6857,
								7103,
								6513,
								-4355,
								-4354,
								-4353,
								-7585,
								7351,
								7366,
								7362,
								8196,
								8197,
								8217,
								8372,
								8373,
								-6886,
								-1633,
								-1632,
								-6284,
								-2415,
								-2414,
								0,
								1,
								-2375
							]
						]
					],
					"id": "05"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								6239,
								6452,
								4160,
								6451,
								3753,
								5767,
								6989,
								5951,
								8381,
								7699,
								8382,
								8278,
								5771,
								9307,
								9306,
								-1232,
								-1231,
								3759,
								3760,
								944,
								945,
								946,
								-8835,
								1687,
								2267,
								1697,
								1698,
								1699,
								439,
								5268,
								-5876,
								-7387,
								8741,
								8742,
								-8782,
								-8680,
								-8926,
								699,
								700,
								-152,
								-151,
								-157,
								8410,
								8411,
								8189,
								9010,
								8969,
								3374,
								2897,
								9,
								1430
							]
						],
						[
							[
								2892
							]
						],
						[
							[
								2893
							]
						],
						[
							[
								2894
							]
						],
						[
							[
								3371
							]
						],
						[
							[
								3375
							]
						],
						[
							[
								8965
							]
						],
						[
							[
								8966
							]
						]
					],
					"id": "06"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								7205,
								-6794,
								6258,
								1798,
								1799,
								572,
								573,
								-2659,
								-2197,
								8675,
								7208,
								-300,
								-305,
								-5377,
								-5379,
								-3945,
								2753,
								-3950,
								5664,
								6322,
								6323,
								-6650,
								-3960,
								-3959,
								9294,
								-6969,
								-6968,
								-6967,
								-7017,
								-7016,
								-5034,
								-5037,
								5662,
								-4556,
								5663,
								8923,
								-8909,
								3805,
								-8908,
								-4240,
								-4239,
								8991,
								-4553,
								-4552,
								-8901,
								8253,
								-4550,
								8254,
								6644,
								5845,
								5846,
								5847,
								-6054,
								-6974,
								8458,
								5286,
								5287,
								-8408,
								-7838,
								-9093,
								8004,
								8001,
								7121,
								7122,
								4179,
								4174,
								4175,
								4176,
								-6263,
								-6262,
								-7752,
								5897,
								5898,
								5894,
								5895,
								4542,
								4537,
								5562,
								5563,
								3087,
								-1938,
								10,
								11,
								-3857,
								6796
							]
						]
					],
					"id": "17"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								7444,
								-5866,
								7445,
								7446,
								5739,
								5740,
								-7813,
								-7812,
								-3992,
								-2734,
								-2739,
								3566,
								6449,
								6450,
								1200,
								-710,
								-716,
								-715,
								3570,
								3571,
								4545,
								-3594,
								4546,
								-4019,
								-4018,
								-4743,
								-4742,
								-3630,
								2418,
								2419,
								-7527,
								-7456,
								6964,
								6965,
								1796,
								-431,
								-430,
								707,
								590,
								591,
								-6679,
								-6620,
								5901,
								2709,
								2710,
								173,
								-4604,
								5570,
								-2927,
								-2926,
								5473,
								2442,
								9383,
								-2396,
								-9376,
								3392,
								-162,
								-161,
								-160,
								2776,
								2774,
								1733,
								1734,
								1735,
								-467,
								-466,
								5385,
								822,
								-472,
								-471,
								6787,
								9237,
								-608,
								-607,
								-5142,
								-5141,
								8326,
								-5149,
								-6059,
								-6058,
								-3028,
								17,
								18,
								6575
							]
						]
					],
					"id": "20"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-3087,
								-2089,
								-2092,
								-2166,
								-2170,
								2609,
								2689,
								599,
								600,
								312,
								4215,
								4216,
								7648,
								7649,
								833,
								5522,
								5523,
								7653,
								8075,
								8076,
								4214,
								4211,
								3298,
								8126,
								-9265,
								-9240,
								7476,
								-595,
								7477,
								5799,
								5800,
								5801,
								-5813,
								7472,
								3988,
								7554,
								-7570,
								-5726,
								-7569,
								-5729,
								-8415,
								-8414,
								-3367,
								-3366,
								-3365,
								7549,
								7550,
								-7561,
								-7560,
								-3447,
								7832,
								-8116,
								-6900,
								-6899,
								-4627,
								-4626,
								5791,
								2548,
								-9226,
								-7284,
								-6608,
								23,
								24,
								25,
								26,
								3304,
								-3085
							]
						],
						[
							[
								5520
							]
						],
						[
							[
								5521
							]
						],
						[
							[
								7651
							]
						]
					],
					"id": "28"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								34,
								5939,
								5940,
								5941,
								-7590,
								-7636,
								7242,
								-4752,
								7243,
								-5750,
								5631,
								5632,
								-5904,
								8131,
								-8750,
								-5719,
								-5718,
								-3056,
								-9140,
								7815,
								-4651,
								-5387,
								-3555,
								-2619,
								-167,
								-166,
								2810,
								-4182,
								-7659,
								-3033,
								968,
								963,
								-8673,
								-8840,
								-8839,
								5757,
								5758,
								7878,
								7879,
								-6832,
								-6831,
								-548,
								-547,
								-3984,
								6137,
								322,
								5626,
								7712,
								9047,
								9369,
								4401,
								4402,
								4403,
								-7772,
								-4251,
								2477,
								2478,
								8272,
								-7761,
								8273,
								8123,
								-7578,
								-2764,
								-2768,
								7580,
								-7641,
								8883,
								-3851,
								-3855,
								7678,
								7679
							]
						],
						[
							[
								320
							]
						]
					],
					"id": "39"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								1828,
								2483,
								2484,
								2713,
								2711,
								3258,
								3259,
								-4607,
								-4606,
								4634,
								4637,
								4638,
								43,
								44,
								3221,
								-2681,
								1447,
								1448,
								3166,
								6116,
								-5705,
								-5704,
								8243,
								5785,
								-4027,
								-4026,
								6202,
								8351,
								-7956,
								4428,
								-7955,
								-7536,
								-7671,
								-7670,
								3845,
								3846,
								-7465,
								-4357,
								-4356,
								-6514,
								-7104,
								6856,
								6857,
								-9289,
								6113,
								7212,
								-7049,
								-7048,
								-3965,
								-3964,
								-3963,
								6121,
								-4654,
								-4197,
								-4196,
								-7461,
								6920,
								6921,
								3433,
								7248,
								3435,
								3439,
								7250,
								3841,
								7249,
								3843,
								7998,
								7966,
								6426,
								9125,
								6309,
								6012,
								8734,
								8813,
								8736,
								6014,
								6310,
								9126,
								6424,
								7967,
								6198,
								6428,
								7964,
								6430,
								6200,
								6431,
								3834,
								9127,
								6312,
								6016,
								8737,
								8814,
								8531,
								7920,
								4516,
								9354,
								3736,
								8964,
								4641,
								5849,
								8997,
								7841,
								8534,
								9019,
								-4376,
								-8796,
								8532,
								1457,
								-614,
								-613,
								-612,
								8560,
								-8752,
								8361,
								1921,
								2024,
								1194,
								1195,
								6445,
								-4585,
								37,
								-4584,
								8904
							]
						]
					],
					"id": "48"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								2165,
								2091,
								2088,
								3086,
								3084,
								-3305,
								-27,
								-26,
								-25,
								5157,
								5153,
								5154,
								-4048,
								2695,
								2696,
								-7573,
								-8528,
								4153,
								4154,
								4155,
								5158,
								5159,
								5160,
								8593,
								-5671,
								-6714,
								-6713,
								-954,
								-7799,
								-7798,
								-2548,
								8891,
								1710,
								1711,
								-3796,
								7696,
								4522,
								4523,
								4524,
								8711,
								-8152,
								-822,
								-821,
								-3550,
								3359,
								3360,
								3361,
								3175,
								3176,
								3177,
								3749,
								3750,
								5165,
								5166,
								-3007,
								148,
								149,
								9371,
								-5523,
								-834,
								-7650,
								-7649,
								-4217,
								-4216,
								-313,
								-601,
								-600,
								-2690,
								-2610,
								2169
							]
						],
						[
							[
								9370
							]
						]
					],
					"id": "01"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-5898,
								7751,
								6261,
								6262,
								-4177,
								-4176,
								-4175,
								-4180,
								-7123,
								-7122,
								-8002,
								-8005,
								9092,
								-7837,
								5384,
								-2834,
								1703,
								1704,
								3180,
								3181,
								1057,
								1058,
								3562,
								3563,
								1155,
								1156,
								2264,
								2265,
								5380,
								5381,
								8255,
								8256,
								-5959,
								4185,
								4186,
								-7254,
								-4223,
								7394,
								-8995,
								-8285,
								-8284,
								-8139,
								6861,
								-6497,
								6862,
								7846,
								5642,
								-4035,
								-4034,
								-4728,
								-462,
								5639,
								2170,
								2171,
								-7032,
								-7031,
								-1616,
								577,
								578,
								6821,
								6822,
								1487,
								1488,
								583,
								-1664,
								-7022,
								2501,
								2502,
								8419,
								8420,
								8421,
								8423,
								-8387,
								6447,
								-5899
							]
						]
					],
					"id": "19"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								3962,
								3963,
								3964,
								7047,
								7048,
								-7213,
								-6114,
								9288,
								-6858,
								-7103,
								-7102,
								-9083,
								7287,
								-5267,
								3580,
								3581,
								-6320,
								3575,
								-3370,
								-3369,
								-3368,
								8413,
								8414,
								5728,
								7568,
								5725,
								7569,
								-7555,
								-3989,
								-7473,
								5812,
								-5802,
								-5801,
								-5800,
								-7478,
								594,
								-7477,
								9239,
								9264,
								-8127,
								-3299,
								-4212,
								-4215,
								-8077,
								9206,
								8606,
								8640,
								5722,
								8512,
								8766,
								7988,
								6581,
								9218,
								8301,
								7463,
								-6921,
								7460,
								4195,
								4196,
								4653,
								-6122
							]
						],
						[
							[
								7984
							]
						],
						[
							[
								7985
							]
						],
						[
							[
								8638
							]
						],
						[
							[
								8639
							]
						],
						[
							[
								8764
							]
						],
						[
							[
								9219
							]
						]
					],
					"id": "22"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-6822,
								-579,
								-578,
								1615,
								7030,
								7031,
								-2172,
								-2171,
								-5640,
								461,
								462,
								6052,
								1613,
								-841,
								-840,
								-839,
								6840,
								-7093,
								-7768,
								-7767,
								-9253,
								8898,
								-9252,
								-3348,
								-3347,
								-3625,
								2304,
								2305,
								3723,
								3724,
								3725,
								6744,
								6742,
								8992,
								4663,
								7928,
								2755,
								8051,
								3132,
								8052,
								2757,
								2758,
								6049,
								5891,
								5892,
								-6167,
								-4760,
								-4759,
								-3733,
								-8626,
								3276,
								5518,
								5519,
								4347,
								4348,
								8425,
								8426,
								-4925,
								-4924,
								8632,
								-8420,
								-2503,
								-2502,
								7021,
								1663,
								-584,
								-1489,
								-1488,
								-6823
							]
						]
					],
					"id": "27"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-2313,
								-2312,
								2374,
								-2,
								-1,
								2413,
								2414,
								6283,
								1631,
								1632,
								6885,
								6886,
								6887,
								3596,
								3593,
								-4546,
								-3572,
								-3571,
								714,
								715,
								709,
								-1201,
								-6451,
								-6450,
								-3567,
								2738,
								2733,
								3991,
								7811,
								7812,
								-5741,
								-5740,
								-7447,
								-7446,
								5865,
								5866,
								-4003,
								-4002,
								8428,
								-8256,
								-5382,
								-5381,
								-2266,
								-2265,
								-1157,
								-1156,
								-3564,
								-3563,
								-1059,
								-1058,
								-3182,
								-3181,
								-1705,
								-1704,
								2833,
								-5385,
								7836,
								7837,
								8407,
								-5288,
								-5287,
								-8459,
								6973,
								6053,
								-5848,
								-5847,
								-5846,
								-6645,
								-8255,
								4549,
								-8254,
								8900,
								4551,
								4552,
								-8992,
								4238,
								4239,
								8907,
								-3806,
								8908,
								-8924,
								-5664,
								4555,
								-5663,
								-5036,
								-4647,
								-6806,
								6942,
								5806,
								5807,
								5808,
								5809,
								9017,
								-7146,
								-8388,
								4564,
								4565,
								4559,
								4560,
								3341,
								-7078,
								7244,
								8876,
								8877,
								-2314
							]
						]
					],
					"id": "29"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-1734,
								-2775,
								7320,
								7311,
								7308,
								1321,
								1322,
								7419,
								2683,
								2684,
								-3377,
								6759,
								6760,
								7301,
								-6170,
								1345,
								-6169,
								7194,
								-4882,
								1259,
								1260,
								3188,
								-7770,
								9255,
								-4421,
								-6616,
								-3427,
								-3426,
								6059,
								-7183,
								-6010,
								-6439,
								6062,
								6063,
								4567,
								4568,
								6495,
								6496,
								-6862,
								8138,
								8283,
								8284,
								8994,
								-7395,
								4222,
								7253,
								-4187,
								-4186,
								5958,
								-8257,
								-8429,
								4001,
								4002,
								-5867,
								-7445,
								-6576,
								-19,
								-18,
								3027,
								6057,
								6058,
								5148,
								-8327,
								5140,
								5141,
								606,
								607,
								-9238,
								-6788,
								470,
								471,
								-823,
								-5386,
								465,
								466,
								-1736
							]
						]
					],
					"id": "31"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								3001,
								3002,
								3003,
								284,
								285,
								-1116,
								-1115,
								5074,
								-3358,
								-3387,
								-3156,
								-3160,
								-7129,
								-3609,
								-3613,
								9340,
								3746,
								5456,
								9196,
								-8411,
								156,
								150,
								151,
								-701,
								3005
							]
						]
					],
					"id": "04"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								159,
								160,
								161,
								-3393,
								9375,
								2395,
								-9384,
								-2443,
								-5474,
								2925,
								2926,
								2927,
								2928,
								5827,
								5828,
								-6124,
								8526,
								3777,
								3778,
								-4587,
								5583,
								-8804,
								-8803,
								-1114,
								-1113,
								-1112,
								-1111,
								3768,
								570,
								564,
								-7974,
								3774,
								3769,
								3770,
								3771,
								8082,
								-8394,
								-4737,
								-4736,
								6453,
								7948,
								-6760,
								3376,
								-2685,
								-2684,
								-7420,
								-1323,
								-1322,
								-7309,
								-7312,
								-7321,
								-2777
							]
						]
					],
					"id": "08"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								165,
								166,
								2618,
								3554,
								3555,
								-5390,
								-5389,
								-5053,
								5899,
								4716,
								4717,
								5024,
								5025,
								-4189,
								-4188,
								-4192,
								-959,
								5636,
								5637,
								-5753,
								5734,
								5735,
								5736,
								8569,
								8570,
								6460,
								6461,
								8047,
								6648,
								-3955,
								6649,
								-6324,
								-6323,
								-5665,
								3949,
								-2754,
								3944,
								5378,
								5376,
								304,
								299,
								-7209,
								-8676,
								2196,
								2658,
								-574,
								-573,
								-1800,
								-1799,
								-6259,
								6793,
								6794,
								8653,
								3557,
								3558,
								3249,
								3250,
								-7731,
								-9373,
								3950,
								3951,
								-7298,
								-6833,
								-7880,
								-7879,
								-5759,
								-5758,
								8838,
								8839,
								8672,
								-964,
								-969,
								3032,
								7658,
								4181,
								-2811
							]
						]
					],
					"id": "18"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								9043,
								9323,
								8575,
								4662,
								5788,
								8558,
								9268,
								8718,
								2846,
								9229,
								4242,
								9165,
								8948,
								7959,
								8758,
								4204,
								9235,
								3982,
								3983,
								546,
								547,
								6830,
								6831,
								6832,
								7297,
								-3952,
								-3951,
								9372,
								7730,
								-3251,
								-3250,
								-3559,
								6410,
								9402,
								310,
								4346,
								3418,
								830,
								9395,
								2944,
								178,
								5449
							]
						],
						[
							[
								2899,
								9140,
								8773,
								9277,
								8875,
								3406,
								3407,
								9222,
								-6468,
								-6467,
								-4450,
								-3475,
								-3474,
								5888,
								5885,
								7312,
								6902,
								8303,
								6904,
								9145,
								9275,
								4207
							]
						],
						[
							[
								5447
							]
						],
						[
							[
								5450
							]
						],
						[
							[
								8304
							]
						],
						[
							[
								8576
							]
						],
						[
							[
								8577
							]
						],
						[
							[
								8771
							]
						],
						[
							[
								8872
							]
						]
					],
					"id": "26"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-2274,
								3998,
								-7106,
								-7055,
								720,
								721,
								319,
								315,
								316,
								2468,
								9230,
								3600,
								9335,
								5953,
								9097,
								8949,
								7887,
								8309,
								7883,
								7884,
								-6895,
								5869,
								7853,
								7820,
								-2447,
								-2446,
								-4603,
								-4741,
								-6687,
								-6686,
								-6592,
								-4456,
								-4455,
								-854,
								6472,
								6932,
								6933,
								6836,
								-1655,
								-1654,
								-1661,
								6976,
								-6703,
								3607,
								183,
								184,
								185,
								-1146,
								-2275
							]
						]
					],
					"id": "30"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-3420,
								-8199,
								7520,
								7574,
								-3281,
								-3286,
								-8433,
								-8435,
								-1380,
								-1379,
								-724,
								-723,
								2625,
								3268,
								-1396,
								-1395,
								9142,
								9141,
								6027,
								9308,
								4592,
								5876,
								8353,
								8563,
								8508,
								8611,
								8557,
								9096,
								8429,
								-8138,
								-6210,
								-6209,
								-6024,
								-6023,
								-5305,
								7672,
								5931,
								5932,
								8784,
								8879,
								-5835,
								-8551,
								8515,
								-8553,
								8603,
								4010,
								5970,
								7203,
								7786,
								7202,
								5972,
								7137,
								7664,
								-7625,
								7663,
								4008,
								8604,
								189,
								190,
								5541,
								5542,
								-3421
							]
						],
						[
							[
								6279,
								6280,
								6281,
								6282
							]
						],
						[
							[
								7785
							]
						]
					],
					"id": "36"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								4608,
								-3462,
								-3461,
								-9162,
								-4448,
								-4447,
								-618,
								4612,
								4613,
								-2277,
								4614,
								-8583,
								-7171,
								-7170,
								-6995,
								-5284,
								-7401,
								-5962,
								-5961,
								-8836,
								4030,
								-946,
								-945,
								-3761,
								-3760,
								1230,
								1231,
								-9307,
								9401,
								8777,
								8811,
								9160,
								6144,
								6748,
								8119,
								8117,
								8159,
								-8080,
								-6103,
								-6102,
								-5316,
								-5315,
								-6924,
								2823,
								191,
								1980
							]
						]
					],
					"id": "41"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								6872,
								7302,
								7275,
								982,
								8601,
								8367,
								3193,
								3194,
								8804,
								-8364,
								985,
								986,
								8461,
								8462,
								-6035,
								-6034,
								-6033,
								-4503,
								-4502,
								-3090,
								-6501,
								-6500,
								7845,
								-5184,
								-5183,
								-5182,
								-5181,
								-9000,
								-8999,
								-3213,
								-3212,
								-7074,
								6375,
								-7073,
								-7070,
								-4391,
								-7865,
								-7864,
								-4040,
								1401,
								-4039,
								-4038,
								7141,
								-6603,
								-6602,
								-8930,
								-7261,
								-8299,
								-8298,
								-6962,
								8502,
								8390,
								7687,
								-3470,
								7683,
								7828,
								7829,
								8955,
								8036,
								-7086,
								-7595,
								-7594,
								-7593,
								-4747,
								-4746,
								-852,
								-851,
								-4501,
								-4500,
								-4499,
								7737,
								6189,
								-7943,
								-7993,
								-5907,
								-8102,
								7341,
								9176,
								-6253,
								-5885,
								-3977,
								-3976,
								7226,
								-9281,
								-6996,
								6182,
								6183,
								6184,
								9265,
								2175,
								9201,
								9278,
								3453,
								5856,
								6547,
								4361,
								9232,
								9409,
								8212,
								8880,
								8599,
								8549,
								197,
								4442
							]
						],
						[
							[
								-5983,
								-6267,
								6528,
								6211,
								6529
							]
						],
						[
							[
								6530,
								-5985
							]
						]
					],
					"id": "51"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								199,
								200,
								201,
								-733,
								-4883,
								-7195,
								6168,
								-1346,
								6169,
								-7302,
								-6761,
								-7949,
								-6454,
								4735,
								4736,
								8393,
								-8083,
								-3772,
								-3771,
								7279,
								-978,
								438,
								435,
								-5855,
								5914,
								5909,
								5910,
								-6249,
								-7801,
								-6704,
								-6977,
								1660,
								1653,
								1654,
								-6837,
								-6934,
								-6933,
								-6473,
								853,
								4454,
								4455,
								4456,
								-2510
							]
						]
					],
					"id": "56"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								6499,
								6500,
								3089,
								4501,
								4502,
								6032,
								6033,
								6034,
								-8463,
								-8462,
								-987,
								-986,
								8363,
								-8805,
								-3195,
								9385,
								6341,
								9386,
								8365,
								4597,
								8545,
								9357,
								8770,
								4380,
								6671,
								9310,
								7109,
								6343,
								7110,
								4386,
								9203,
								8237,
								8828,
								8927,
								9064,
								7291,
								5618,
								5619,
								1949,
								-6663,
								-4414,
								962,
								-4413,
								6031,
								-6599,
								-6108,
								6040,
								6041,
								8935,
								7315,
								7316,
								7367,
								-7269,
								5936,
								5937,
								8356,
								6388,
								6389,
								-5778,
								-5777,
								-8855,
								8191,
								8192,
								-8129,
								3621,
								-446,
								3622,
								3617,
								4016,
								4013,
								-6298,
								-4632,
								-4631,
								6439,
								5625,
								5620,
								5621,
								7008,
								5197,
								5193,
								-6372,
								-7867,
								-7866,
								4394,
								4390,
								7069,
								7072,
								-6376,
								7073,
								3211,
								3212,
								8998,
								8999,
								5180,
								5181,
								5182,
								5183,
								-7846
							]
						],
						[
							[
								6337
							]
						],
						[
							[
								6338,
								7107
							]
						]
					],
					"id": "37"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-8373,
								-8218,
								-8198,
								-8197,
								-7363,
								-7367,
								-7352,
								7584,
								4352,
								4353,
								4354,
								4355,
								4356,
								7464,
								-3847,
								-3846,
								7669,
								7670,
								7535,
								7954,
								-4429,
								7955,
								-8352,
								-6203,
								4025,
								4026,
								-5786,
								-8244,
								5703,
								5704,
								-6117,
								-3167,
								-1449,
								-1448,
								2680,
								-3222,
								-45,
								-44,
								-4639,
								-4638,
								-4635,
								4605,
								4606,
								-3260,
								-3259,
								-2712,
								6139,
								-2928,
								-5571,
								4603,
								-174,
								-2711,
								-2710,
								-5902,
								6619,
								6678,
								-592,
								-591,
								-708,
								429,
								430,
								-1797,
								-6966,
								-6965,
								7455,
								7526,
								-2420,
								-2419,
								3629,
								4741,
								4742,
								4017,
								4018,
								-4547,
								-3597,
								-6888,
								-6887,
								-8374
							]
						]
					],
					"id": "40"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								5186,
								5187,
								2557,
								-1525,
								-1524,
								7038,
								7039,
								-7160,
								-5646,
								-5645,
								-3165,
								-3164,
								4143,
								4144,
								970,
								971,
								8165,
								8166,
								6766,
								-5748,
								-5747,
								-7262,
								8929,
								6601,
								6602,
								-7142,
								4037,
								4038,
								-1402,
								4039,
								7863,
								7864,
								-4395,
								7865,
								7866,
								6371,
								-5194,
								-5198,
								-7009,
								-5622,
								-5621,
								-5626,
								-6440,
								4630,
								4631,
								6297,
								-4014,
								-4017,
								-3618,
								-3623,
								-445,
								-5561,
								-5560,
								7946,
								7115,
								7116,
								-5656,
								-5279,
								-5278,
								-4155,
								-4154,
								8527,
								7572,
								-2697,
								-2696,
								4047,
								-5155,
								-5154,
								-5158,
								-24,
								6607,
								7283,
								9225,
								-2549,
								-5792,
								4625,
								4626,
								6898,
								6899,
								6900,
								6914,
								6913,
								6896,
								6912,
								7236,
								7150,
								7145,
								-9018,
								-5810,
								-9188,
								-5808,
								-9187,
								7338,
								-6804,
								-6803,
								-4236,
								-4235,
								-1564,
								-1563
							]
						]
					],
					"id": "47"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-8426,
								-4349,
								-4348,
								-5520,
								-5519,
								-3277,
								8625,
								3732,
								4758,
								4759,
								6166,
								-5893,
								-5892,
								-6050,
								-2759,
								8342,
								9242,
								8333,
								9039,
								-5889,
								3473,
								3474,
								4449,
								6466,
								6467,
								-9223,
								-3408,
								9366,
								9272,
								1927,
								1103,
								9282,
								1105,
								739,
								7225,
								7036,
								8787,
								990,
								3855,
								3856,
								-12,
								-11,
								1937,
								-3088,
								-5564,
								-5563,
								-4538,
								-4543,
								-5896,
								-5895,
								-6448,
								8386,
								-8424,
								-8422,
								-8421,
								-8633,
								4923,
								4924,
								-8427
							]
						],
						[
							[
								8329
							]
						],
						[
							[
								8330
							]
						],
						[
							[
								8331
							]
						],
						[
							[
								8332
							]
						],
						[
							[
								9281
							]
						]
					],
					"id": "55"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								7501,
								4163,
								1579,
								1348,
								1351,
								9363,
								290,
								9364,
								1353,
								1350,
								1580,
								4164,
								1582,
								4165,
								7502,
								1577,
								4963,
								7622,
								1864,
								5010,
								8703,
								1867,
								9407,
								9090,
								2980,
								9086,
								7564,
								9087,
								7612,
								9290,
								7615,
								9291,
								846,
								2511,
								1968,
								2208,
								9396,
								9315,
								7621,
								4962,
								1575,
								7503,
								4761
							]
						],
						[
							[
								292
							]
						],
						[
							[
								293
							]
						],
						[
							[
								294
							]
						],
						[
							[
								296,
								1346
							]
						],
						[
							[
								297,
								1951
							]
						],
						[
							[
								1354
							]
						],
						[
							[
								1573,
								1953
							]
						],
						[
							[
								1584,
								4161
							]
						],
						[
							[
								1952
							]
						],
						[
							[
								2512
							]
						],
						[
							[
								2974
							]
						],
						[
							[
								2975
							]
						],
						[
							[
								2976
							]
						],
						[
							[
								2977
							]
						],
						[
							[
								2978
							]
						],
						[
							[
								2981
							]
						],
						[
							[
								2982
							]
						],
						[
							[
								7485
							]
						],
						[
							[
								7486
							]
						],
						[
							[
								7487
							]
						],
						[
							[
								7488
							]
						],
						[
							[
								7489
							]
						],
						[
							[
								7490
							]
						],
						[
							[
								7491
							]
						],
						[
							[
								7492
							]
						],
						[
							[
								7493
							]
						],
						[
							[
								7494
							]
						],
						[
							[
								7495
							]
						],
						[
							[
								7496
							]
						],
						[
							[
								7497
							]
						],
						[
							[
								7498
							]
						],
						[
							[
								7499
							]
						],
						[
							[
								7500
							]
						],
						[
							[
								7614
							]
						],
						[
							[
								7617
							]
						],
						[
							[
								7618
							]
						],
						[
							[
								9292
							]
						],
						[
							[
								9293
							]
						],
						[
							[
								9361
							]
						],
						[
							[
								9362
							]
						],
						[
							[
								9403
							]
						],
						[
							[
								9404
							]
						],
						[
							[
								9405
							]
						],
						[
							[
								9406
							]
						]
					],
					"id": "02"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								3449,
								7372,
								6097,
								-4573,
								-4578,
								-5930,
								-4656,
								-4655,
								-8977,
								-5932,
								-7673,
								5304,
								6022,
								6023,
								6208,
								6209,
								8137,
								8136,
								6334,
								326,
								733,
								734,
								735
							]
						]
					],
					"id": "50"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-2305,
								3624,
								3346,
								3347,
								9251,
								-8899,
								9252,
								-7766,
								-7094,
								-7335,
								6131,
								-2152,
								-2151,
								3401,
								-3429,
								3626,
								-4424,
								-4423,
								6134,
								6135,
								4739,
								4740,
								4602,
								2445,
								2446,
								-7821,
								-7854,
								-5870,
								6894,
								-7885,
								8786,
								3062,
								4509,
								8767,
								8322,
								9390,
								2231,
								8500,
								-6745,
								-3726,
								-3725,
								-3724,
								-2306
							]
						]
					],
					"id": "38"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-8193,
								-8192,
								8854,
								-5785,
								-5784,
								-5783,
								-5782,
								-5781,
								-6361,
								-6360,
								-7338,
								-9027,
								5835,
								7850,
								7851,
								5029,
								5030,
								7692,
								-5699,
								-6288,
								-6287,
								-9094,
								8014,
								8015,
								-8360,
								9408,
								6534,
								8109,
								8140,
								8027,
								8635,
								-8248,
								-8251,
								9068,
								3547,
								1931,
								1932,
								-3534,
								5557,
								-7776,
								7778,
								-7995,
								-8156,
								7412,
								7413,
								2158,
								2159,
								4536,
								-3786,
								-3785,
								-3361,
								-3360,
								3549,
								820,
								821,
								8151,
								-8712,
								-4525,
								-4524,
								-4523,
								-7697,
								3795,
								-1712,
								-1711,
								-8892,
								2547,
								7797,
								7798,
								953,
								6712,
								6713,
								5670,
								-8594,
								-5161,
								-5160,
								-5159,
								-4156,
								5277,
								5278,
								5655,
								-7117,
								-7116,
								-7947,
								5559,
								5560,
								444,
								445,
								-3622,
								8128
							]
						]
					],
					"id": "13"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								451
							]
						],
						[
							[
								454,
								5974,
								456,
								3589,
								5976,
								6550,
								8164,
								5819,
								8168,
								8169,
								-4580,
								8170,
								4200,
								-2555,
								4201,
								5979,
								5442,
								9348,
								2636
							]
						],
						[
							[
								3586
							]
						],
						[
							[
								5975
							]
						]
					],
					"id": "23"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								9410,
								474,
								7759,
								-5462,
								476,
								477,
								-3782,
								-6479,
								-6701,
								-6639,
								6004,
								6005
							]
						],
						[
							[
								5390,
								5391
							]
						],
						[
							[
								5392
							]
						],
						[
							[
								7758
							]
						]
					],
					"id": "44"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-7176,
								-7175,
								7734,
								7991,
								5908,
								5904,
								-6255,
								-6254,
								-9177,
								-7342,
								8101,
								5906,
								7992,
								7942,
								-6190,
								-7738,
								4498,
								4499,
								4500,
								850,
								851,
								4745,
								4746,
								7592,
								7593,
								7594,
								7085,
								-8037,
								-8956,
								-7830,
								-7829,
								-7684,
								3469,
								3470,
								3471,
								4754,
								4755,
								4750,
								4751,
								-7243,
								7635,
								7589,
								-5942,
								-5941,
								-5940,
								-35,
								-7680,
								-7679,
								3854,
								3850,
								-8884,
								7640,
								-7581,
								2767,
								2763,
								7577,
								-8124,
								-8274,
								-7765,
								-6044,
								-6043,
								2765,
								-6049,
								-7639,
								-7638,
								478,
								479,
								7177,
								-7177
							]
						]
					],
					"id": "54"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								2273,
								2274,
								1145,
								-186,
								-185,
								-184,
								-3608,
								6702,
								6703,
								7800,
								6248,
								-5911,
								-5910,
								-5915,
								-5854,
								7744,
								3799,
								3800,
								6384,
								-5532,
								-5531,
								-5530,
								-5963,
								7400,
								5283,
								6994,
								7169,
								7170,
								8582,
								-4615,
								2276,
								-4614,
								-7281,
								-6405,
								-6404,
								3541,
								3542,
								4173,
								6670,
								-3038,
								-3037,
								9204,
								-316,
								-320,
								-722,
								-721,
								7054,
								7105,
								-3999
							]
						]
					],
					"id": "16"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								4033,
								4034,
								-5643,
								-7847,
								-6863,
								-6496,
								-4569,
								-4568,
								-6064,
								-6063,
								6438,
								6009,
								7182,
								-6060,
								3425,
								3426,
								6615,
								4420,
								-9256,
								7769,
								-3189,
								-1261,
								-1260,
								4881,
								4882,
								732,
								-202,
								-201,
								-200,
								2509,
								-4457,
								6591,
								6685,
								6686,
								-4740,
								-6136,
								-6135,
								4422,
								4423,
								-3627,
								3428,
								-3402,
								2150,
								2151,
								-6132,
								7334,
								7093,
								7765,
								7766,
								7767,
								7092,
								-6841,
								838,
								839,
								840,
								-1614,
								-6053,
								-463,
								4727
							]
						]
					],
					"id": "46"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								611,
								612,
								613,
								-1458,
								-8533,
								8795,
								4375,
								4376,
								8305,
								3611,
								3612,
								3608,
								7128,
								3159,
								3155,
								3386,
								3357,
								-5075,
								8802,
								8803,
								-5584,
								4586,
								-3779,
								-3778,
								-8527,
								6123,
								-5829,
								-5828,
								-2929,
								-6140,
								-2714,
								-2485,
								-2484,
								-1829,
								-8905,
								4583,
								-38,
								4584,
								-6446,
								-1196,
								-1195,
								-2025,
								-1922,
								-8362,
								8751,
								-8561
							]
						]
					],
					"id": "35"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								7280,
								-4613,
								617,
								4446,
								4447,
								9161,
								3460,
								3461,
								-4609,
								-1981,
								-192,
								-2824,
								6923,
								5314,
								5315,
								6101,
								6102,
								8079,
								-8160,
								-8118,
								8612,
								8825,
								9279,
								9009,
								9122,
								9006,
								9105,
								7402,
								6986,
								9106,
								8061,
								6981,
								5860,
								7470,
								9099,
								7468,
								8055,
								4919,
								8752,
								6103,
								8057,
								3035,
								3036,
								3037,
								-6671,
								-4174,
								-3543,
								-3542,
								6403,
								6404
							]
						],
						[
							[
								5861
							]
						],
						[
							[
								8012
							]
						],
						[
							[
								8013
							]
						],
						[
							[
								8053
							]
						],
						[
							[
								8056
							]
						],
						[
							[
								9100
							]
						]
					],
					"id": "53"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								8434,
								8432,
								3285,
								3280,
								-7575,
								-7521,
								8198,
								3419,
								3420,
								3421,
								4408,
								4409,
								6952,
								6518,
								6519,
								6520,
								6521,
								5707,
								5708,
								5709,
								6659,
								6660,
								-8455,
								-7058,
								4619,
								4620,
								5713,
								5714,
								5715,
								-9225,
								-5882,
								-5881,
								-6252,
								5946,
								5947,
								6573,
								7246,
								-7173,
								-7172,
								-7178,
								-480,
								-479,
								7637,
								7638,
								6048,
								-2766,
								6042,
								6043,
								7764,
								7760,
								-8273,
								-2479,
								-2478,
								4250,
								7771,
								-4404,
								-4403,
								9365,
								-9143,
								1394,
								1395,
								-3269,
								-2626,
								722,
								723,
								1378,
								1379
							]
						]
					],
					"id": "42"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								9033,
								8699,
								9185,
								7904,
								9184,
								7902,
								9213,
								4960,
								8158,
								7872,
								9321,
								8157,
								4168,
								8746,
								9326,
								8312,
								7406,
								5555,
								8163,
								3008,
								-149,
								3006,
								-5167,
								-5166,
								-3751,
								-3750,
								-3178,
								-3177,
								-3176,
								-3362,
								3784,
								3785,
								-4537,
								-2160,
								-2159,
								-7414,
								-7413,
								8155,
								7994,
								-7779,
								7775,
								-5558,
								3533,
								-1933,
								-1932,
								-3548,
								-9069,
								8250,
								8247,
								8248,
								7708,
								8010,
								2134,
								9011,
								9343,
								7356,
								7359,
								8401,
								7689,
								2002,
								5273,
								5544,
								5270,
								5545,
								5275,
								5549,
								5654,
								6393,
								6651,
								6396,
								6652,
								9130
							]
						],
						[
							[
								5546
							]
						],
						[
							[
								5547
							]
						],
						[
							[
								5550
							]
						],
						[
							[
								5551
							]
						],
						[
							[
								5552
							]
						],
						[
							[
								5553
							]
						],
						[
							[
								6394
							]
						],
						[
							[
								8745
							]
						]
					],
					"id": "12"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-7280,
								-3770,
								-3775,
								7973,
								-565,
								-571,
								-3769,
								1110,
								1111,
								1112,
								1113,
								1114,
								1115,
								-286,
								-285,
								-3004,
								-3003,
								-8207,
								1605,
								4436,
								-8206,
								-9229,
								9159,
								7971,
								-5534,
								-5533,
								-6385,
								-3801,
								-3800,
								-7745,
								5853,
								5854,
								-436,
								-439,
								977
							]
						]
					],
					"id": "49"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								6966,
								6967,
								6968,
								-9295,
								3958,
								3959,
								3954,
								-6649,
								-8048,
								-6462,
								-6461,
								-8571,
								-8570,
								-5737,
								-5736,
								-5735,
								5752,
								-5638,
								-5637,
								958,
								4191,
								4187,
								4188,
								-5026,
								-5025,
								-4718,
								-4717,
								-5900,
								5052,
								5388,
								5389,
								-3556,
								5386,
								4650,
								-7816,
								9139,
								3055,
								5717,
								5718,
								8749,
								-8132,
								5903,
								-5633,
								-5632,
								5749,
								-7244,
								-4751,
								-4756,
								-4755,
								-3472,
								-3471,
								-7688,
								-8391,
								-8503,
								6961,
								8297,
								8298,
								7260,
								7261,
								5746,
								5747,
								-6767,
								-8167,
								-8166,
								-972,
								-971,
								-4145,
								-4144,
								3163,
								3164,
								5644,
								5645,
								7159,
								-7040,
								-7039,
								1523,
								1524,
								-2558,
								-5188,
								-5187,
								1562,
								1563,
								4234,
								4235,
								6802,
								6803,
								-7339,
								9186,
								-5807,
								-6943,
								6805,
								4646,
								5035,
								5036,
								5033,
								7015,
								7016
							]
						],
						[
							[
								9187,
								-5809
							]
						]
					],
					"id": "21"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								4579,
								-8170,
								8610,
								-8498,
								6850,
								6851,
								-6476,
								5928,
								-4657,
								5929,
								4577,
								4572,
								-6098,
								-7373,
								-3450,
								-736,
								-735,
								2553,
								2554,
								-4201,
								-8171
							]
						]
					],
					"id": "33"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-6041,
								6107,
								6598,
								-6032,
								4412,
								-963,
								4413,
								6662,
								-1950,
								-5620,
								5773,
								8240,
								6526,
								7705,
								6434,
								8358,
								8359,
								-8016,
								-8015,
								9093,
								6286,
								6287,
								5698,
								-7693,
								-5031,
								-5030,
								-7852,
								-7851,
								-5836,
								9026,
								7337,
								6359,
								6360,
								5780,
								5781,
								5782,
								5783,
								5784,
								5776,
								5777,
								-6390,
								-6389,
								-8357,
								-5938,
								-5937,
								7268,
								-7368,
								-7317,
								-7316,
								-8936,
								-6042
							]
						]
					],
					"id": "45"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-2268,
								-1688,
								8834,
								-947,
								-4031,
								8835,
								5960,
								5961,
								5962,
								5529,
								5530,
								5531,
								5532,
								5533,
								-7972,
								-9160,
								9228,
								8205,
								-4437,
								-1606,
								8206,
								-3002,
								-3006,
								-700,
								8925,
								8679,
								8781,
								-8743,
								-8742,
								7386,
								5875,
								-5269,
								-440,
								-1700,
								-1699,
								-1698
							]
						]
					],
					"id": "32"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								3093
							]
						],
						[
							[
								3094
							]
						],
						[
							[
								3095
							]
						],
						[
							[
								3097,
								9143
							]
						],
						[
							[
								7823
							]
						],
						[
							[
								7824
							]
						],
						[
							[
								9104
							]
						],
						[
							[
								9331
							]
						]
					],
					"id": "15"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-3422,
								-5543,
								-5542,
								-191,
								-190,
								-8605,
								-4009,
								-7664,
								7624,
								7625,
								-6281,
								-6280,
								-6283,
								7417,
								4370,
								9045,
								6568,
								4007,
								6269,
								6274,
								6275,
								6271,
								6272,
								-8456,
								-6660,
								-5710,
								-5709,
								-5708,
								-6522,
								-6521,
								-6520,
								-6519,
								-6953,
								-4410,
								-4409
							]
						]
					],
					"id": "34"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								6728,
								5649,
								8551,
								8552,
								-8516,
								8550,
								5834,
								5830,
								5831,
								6653,
								-8389,
								-6480,
								3780,
								3781,
								-478,
								-477,
								5461,
								5462
							]
						]
					],
					"id": "09"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								7171,
								7172,
								-7247,
								-6574,
								-5948,
								-5947,
								6251,
								5880,
								5881,
								9224,
								-5716,
								-5715,
								-5714,
								-4621,
								-4620,
								7057,
								7058,
								-8458,
								-8046,
								-8045,
								-8044,
								9078,
								-9117,
								6326,
								6264,
								6265,
								6266,
								5982,
								5983,
								6327,
								9209,
								5824,
								9258,
								8780,
								7060,
								7232,
								7050,
								8656,
								6717,
								9295,
								9384,
								9016,
								-6184,
								-6183,
								6995,
								6996,
								3974,
								3975,
								3976,
								5884,
								6252,
								6253,
								6254,
								-5905,
								-5909,
								-7992,
								-7735,
								7174,
								7175,
								7176
							]
						],
						[
							[
								5984,
								5985
							]
						],
						[
							[
								5987,
								9208
							]
						]
					],
					"id": "24"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								3977
							]
						],
						[
							[
								-6851,
								8497,
								8498,
								6294,
								6698,
								9036,
								6694,
								9037,
								7267,
								3979,
								7265,
								9038,
								6636,
								-5391,
								6637,
								-6005,
								6638,
								6700,
								6478,
								-3781,
								6479,
								8388,
								-6654,
								-5832,
								-5831,
								-8880,
								-8785,
								-5933,
								8976,
								4654,
								4655,
								4656,
								-5929,
								6475,
								-6852
							]
						],
						[
							[
								5198
							]
						]
					],
					"id": "25"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								8454,
								-6661,
								8455,
								-6273,
								8456,
								8041,
								9115,
								-6265,
								-6327,
								9116,
								-9079,
								8043,
								8044,
								8045,
								8457,
								-7059
							]
						],
						[
							[
								-6276,
								8453
							]
						]
					],
					"id": "10"
				},
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								-3975,
								-6997,
								9280,
								-7227
							]
						]
					],
					"id": "11"
				}
			]
		},
		"nation": {
			"type": "GeometryCollection",
			"geometries": [
				{
					"type": "MultiPolygon",
					"arcs": [
						[
							[
								9206,
								8606,
								8640,
								5722,
								8512,
								8766,
								7988,
								6581,
								9218,
								8301,
								7463,
								6921,
								3433,
								7248,
								3435,
								3439,
								7250,
								3841,
								7249,
								3843,
								7998,
								7966,
								6426,
								9125,
								6309,
								6012,
								8734,
								8813,
								8736,
								6014,
								6310,
								9126,
								6424,
								7967,
								6198,
								6428,
								7964,
								6430,
								6200,
								6431,
								3834,
								9127,
								6312,
								6016,
								8737,
								8814,
								8531,
								7920,
								4516,
								9354,
								3736,
								8964,
								4641,
								5849,
								8997,
								7841,
								8534,
								9019,
								4376,
								8305,
								3611,
								9340,
								3746,
								5456,
								9196,
								8411,
								8189,
								9010,
								8969,
								3374,
								2897,
								9,
								1430,
								6239,
								6452,
								4160,
								6451,
								3753,
								5767,
								6989,
								5951,
								8381,
								7699,
								8382,
								8278,
								5771,
								9307,
								9401,
								8777,
								8811,
								9160,
								6144,
								6748,
								8119,
								8612,
								8825,
								9279,
								9009,
								9122,
								9006,
								9105,
								7402,
								6986,
								9106,
								8061,
								6981,
								5860,
								7470,
								9099,
								7468,
								8055,
								4919,
								8752,
								6103,
								8057,
								3035,
								9204,
								316,
								2468,
								9230,
								3600,
								9335,
								5953,
								9097,
								8949,
								7887,
								8309,
								7883,
								8786,
								3062,
								4509,
								8767,
								8322,
								9390,
								2231,
								8500,
								6742,
								8992,
								4663,
								7928,
								2755,
								8051,
								3132,
								8052,
								2757,
								8342,
								9242,
								8333,
								9039,
								5885,
								7312,
								6902,
								8303,
								6904,
								9145,
								9275,
								4207,
								2899,
								9140,
								8773,
								9277,
								8875,
								3406,
								9366,
								9272,
								1927,
								1103,
								9282,
								1105,
								739,
								7225,
								7036,
								8787,
								990,
								3855,
								6796,
								7205,
								6794,
								8653,
								3557,
								6410,
								9402,
								310,
								4346,
								3418,
								830,
								9395,
								2944,
								178,
								5449,
								9043,
								9323,
								8575,
								4662,
								5788,
								8558,
								9268,
								8718,
								2846,
								9229,
								4242,
								9165,
								8948,
								7959,
								8758,
								4204,
								9235,
								3982,
								6137,
								322,
								5626,
								7712,
								9047,
								9369,
								4401,
								9365,
								9141,
								6027,
								9308,
								4592,
								5876,
								8353,
								8563,
								8508,
								8611,
								8557,
								9096,
								8429,
								8136,
								6334,
								326,
								733,
								2553,
								4201,
								5979,
								5442,
								9348,
								2636,
								454,
								5974,
								456,
								3589,
								5976,
								6550,
								8164,
								5819,
								8168,
								8610,
								8498,
								6294,
								6698,
								9036,
								6694,
								9037,
								7267,
								3979,
								7265,
								9038,
								6636,
								5391,
								6637,
								6005,
								9410,
								474,
								7759,
								5462,
								6728,
								5649,
								8551,
								8603,
								4010,
								5970,
								7203,
								7786,
								7202,
								5972,
								7137,
								7664,
								7625,
								6281,
								7417,
								4370,
								9045,
								6568,
								4007,
								6269,
								6274,
								8453,
								6271,
								8456,
								8041,
								9115,
								6265,
								6528,
								6211,
								6529,
								5983,
								6327,
								9209,
								5824,
								9258,
								8780,
								7060,
								7232,
								7050,
								8656,
								6717,
								9295,
								9384,
								9016,
								6184,
								9265,
								2175,
								9201,
								9278,
								3453,
								5856,
								6547,
								4361,
								9232,
								9409,
								8212,
								8880,
								8599,
								8549,
								197,
								4442,
								6872,
								7302,
								7275,
								982,
								8601,
								8367,
								3193,
								9385,
								6341,
								9386,
								8365,
								4597,
								8545,
								9357,
								8770,
								4380,
								6671,
								9310,
								7109,
								6343,
								7110,
								4386,
								9203,
								8237,
								8828,
								8927,
								9064,
								7291,
								5618,
								5773,
								8240,
								6526,
								7705,
								6434,
								8358,
								9408,
								6534,
								8109,
								8140,
								8027,
								8635,
								8248,
								7708,
								8010,
								2134,
								9011,
								9343,
								7356,
								7359,
								8401,
								7689,
								2002,
								5273,
								5544,
								5270,
								5545,
								5275,
								5549,
								5654,
								6393,
								6651,
								6396,
								6652,
								9130,
								9033,
								8699,
								9185,
								7904,
								9184,
								7902,
								9213,
								4960,
								8158,
								7872,
								9321,
								8157,
								4168,
								8746,
								9326,
								8312,
								7406,
								5555,
								8163,
								3008,
								149,
								9371,
								5523,
								7653,
								8075
							],
							[
								1734
							]
						],
						[
							[
								2892
							]
						],
						[
							[
								2893
							]
						],
						[
							[
								2894
							]
						],
						[
							[
								3371
							]
						],
						[
							[
								3375
							]
						],
						[
							[
								8965
							]
						],
						[
							[
								8966
							]
						],
						[
							[
								5520
							]
						],
						[
							[
								5521
							]
						],
						[
							[
								7651
							]
						],
						[
							[
								320
							]
						],
						[
							[
								9370
							]
						],
						[
							[
								7984
							]
						],
						[
							[
								7985
							]
						],
						[
							[
								8638
							]
						],
						[
							[
								8639
							]
						],
						[
							[
								8764
							]
						],
						[
							[
								9219
							]
						],
						[
							[
								5447
							]
						],
						[
							[
								5450
							]
						],
						[
							[
								8304
							]
						],
						[
							[
								8576
							]
						],
						[
							[
								8577
							]
						],
						[
							[
								8771
							]
						],
						[
							[
								8872
							]
						],
						[
							[
								7785
							]
						],
						[
							[
								6530,
								5985
							]
						],
						[
							[
								6337
							]
						],
						[
							[
								6338,
								7107
							]
						],
						[
							[
								8329
							]
						],
						[
							[
								8330
							]
						],
						[
							[
								8331
							]
						],
						[
							[
								8332
							]
						],
						[
							[
								9281
							]
						],
						[
							[
								7501,
								4163,
								1579,
								1348,
								1351,
								9363,
								290,
								9364,
								1353,
								1350,
								1580,
								4164,
								1582,
								4165,
								7502,
								1577,
								4963,
								7622,
								1864,
								5010,
								8703,
								1867,
								9407,
								9090,
								2980,
								9086,
								7564,
								9087,
								7612,
								9290,
								7615,
								9291,
								846,
								2511,
								1968,
								2208,
								9396,
								9315,
								7621,
								4962,
								1575,
								7503,
								4761
							]
						],
						[
							[
								292
							]
						],
						[
							[
								293
							]
						],
						[
							[
								294
							]
						],
						[
							[
								296,
								1346
							]
						],
						[
							[
								297,
								1951
							]
						],
						[
							[
								1354
							]
						],
						[
							[
								1573,
								1953
							]
						],
						[
							[
								1584,
								4161
							]
						],
						[
							[
								1952
							]
						],
						[
							[
								2512
							]
						],
						[
							[
								2974
							]
						],
						[
							[
								2975
							]
						],
						[
							[
								2976
							]
						],
						[
							[
								2977
							]
						],
						[
							[
								2978
							]
						],
						[
							[
								2981
							]
						],
						[
							[
								2982
							]
						],
						[
							[
								7485
							]
						],
						[
							[
								7486
							]
						],
						[
							[
								7487
							]
						],
						[
							[
								7488
							]
						],
						[
							[
								7489
							]
						],
						[
							[
								7490
							]
						],
						[
							[
								7491
							]
						],
						[
							[
								7492
							]
						],
						[
							[
								7493
							]
						],
						[
							[
								7494
							]
						],
						[
							[
								7495
							]
						],
						[
							[
								7496
							]
						],
						[
							[
								7497
							]
						],
						[
							[
								7498
							]
						],
						[
							[
								7499
							]
						],
						[
							[
								7500
							]
						],
						[
							[
								7614
							]
						],
						[
							[
								7617
							]
						],
						[
							[
								7618
							]
						],
						[
							[
								9292
							]
						],
						[
							[
								9293
							]
						],
						[
							[
								9361
							]
						],
						[
							[
								9362
							]
						],
						[
							[
								9403
							]
						],
						[
							[
								9404
							]
						],
						[
							[
								9405
							]
						],
						[
							[
								9406
							]
						],
						[
							[
								451
							]
						],
						[
							[
								3586
							]
						],
						[
							[
								5975
							]
						],
						[
							[
								5392
							]
						],
						[
							[
								7758
							]
						],
						[
							[
								5861
							]
						],
						[
							[
								8012
							]
						],
						[
							[
								8013
							]
						],
						[
							[
								8053
							]
						],
						[
							[
								8056
							]
						],
						[
							[
								9100
							]
						],
						[
							[
								5546
							]
						],
						[
							[
								5547
							]
						],
						[
							[
								5550
							]
						],
						[
							[
								5551
							]
						],
						[
							[
								5552
							]
						],
						[
							[
								5553
							]
						],
						[
							[
								6394
							]
						],
						[
							[
								8745
							]
						],
						[
							[
								3093
							]
						],
						[
							[
								3094
							]
						],
						[
							[
								3095
							]
						],
						[
							[
								3097,
								9143
							]
						],
						[
							[
								7823
							]
						],
						[
							[
								7824
							]
						],
						[
							[
								9104
							]
						],
						[
							[
								9331
							]
						],
						[
							[
								5987,
								9208
							]
						],
						[
							[
								3977
							]
						],
						[
							[
								5198
							]
						]
					]
				}
			]
		}
	},
	"arcs": [
		[
			[
				60335,
				57541
			],
			[
				145,
				-7
			]
		],
		[
			[
				60480,
				57534
			],
			[
				432,
				-29
			]
		],
		[
			[
				60912,
				57505
			],
			[
				2,
				432
			],
			[
				-107,
				130
			],
			[
				39,
				173
			],
			[
				89,
				23
			],
			[
				-28,
				127
			],
			[
				133,
				63
			],
			[
				-16,
				200
			],
			[
				126,
				136
			],
			[
				9,
				383
			]
		],
		[
			[
				61159,
				59172
			],
			[
				-761,
				18
			],
			[
				-4,
				-169
			],
			[
				-96,
				4
			]
		],
		[
			[
				60298,
				59025
			],
			[
				-17,
				-1452
			],
			[
				54,
				-32
			]
		],
		[
			[
				9743,
				50089
			],
			[
				1031,
				492
			],
			[
				931,
				427
			]
		],
		[
			[
				11705,
				51008
			],
			[
				34,
				16
			]
		],
		[
			[
				11739,
				51024
			],
			[
				-99,
				653
			],
			[
				189,
				83
			],
			[
				-51,
				328
			],
			[
				77,
				145
			],
			[
				30,
				249
			],
			[
				204,
				91
			],
			[
				-49,
				328
			],
			[
				124,
				56
			],
			[
				-49,
				326
			],
			[
				249,
				113
			],
			[
				-49,
				328
			],
			[
				202,
				67
			],
			[
				-64,
				339
			],
			[
				149,
				108
			],
			[
				-97,
				656
			]
		],
		[
			[
				12505,
				54894
			],
			[
				-114,
				-37
			],
			[
				-191,
				-374
			],
			[
				-139,
				-74
			],
			[
				-130,
				-185
			],
			[
				-138,
				-268
			],
			[
				-89,
				-39
			],
			[
				-184,
				-297
			],
			[
				-140,
				90
			],
			[
				-109,
				166
			],
			[
				-199,
				-71
			],
			[
				9,
				330
			],
			[
				-27,
				96
			],
			[
				-198,
				-408
			],
			[
				-108,
				-66
			],
			[
				-243,
				9
			],
			[
				-27,
				-60
			]
		],
		[
			[
				10478,
				53706
			],
			[
				105,
				-461
			],
			[
				-1,
				-151
			],
			[
				-135,
				-217
			],
			[
				-49,
				50
			],
			[
				-148,
				-251
			],
			[
				-47,
				-187
			],
			[
				98,
				-272
			],
			[
				41,
				-285
			],
			[
				-41,
				-201
			],
			[
				-160,
				-120
			],
			[
				-119,
				-407
			],
			[
				-62,
				-375
			],
			[
				-183,
				-239
			],
			[
				-34,
				-501
			]
		],
		[
			[
				66666,
				33795
			],
			[
				657,
				-94
			]
		],
		[
			[
				67323,
				33701
			],
			[
				172,
				-29
			]
		],
		[
			[
				67495,
				33672
			],
			[
				63,
				1311
			]
		],
		[
			[
				67558,
				34983
			],
			[
				-64,
				9
			]
		],
		[
			[
				67494,
				34992
			],
			[
				-574,
				81
			]
		],
		[
			[
				66920,
				35073
			],
			[
				-192,
				26
			]
		],
		[
			[
				66728,
				35099
			],
			[
				-62,
				-1304
			]
		],
		[
			[
				54331,
				44181
			],
			[
				388,
				1
			]
		],
		[
			[
				54719,
				44182
			],
			[
				377,
				0
			]
		],
		[
			[
				55096,
				44182
			],
			[
				1,
				1341
			]
		],
		[
			[
				55097,
				45523
			],
			[
				0,
				336
			],
			[
				-422,
				0
			]
		],
		[
			[
				54675,
				45859
			],
			[
				-346,
				-2
			]
		],
		[
			[
				54329,
				45857
			],
			[
				2,
				-1676
			]
		],
		[
			[
				68585,
				62543
			],
			[
				295,
				-42
			]
		],
		[
			[
				68880,
				62501
			],
			[
				96,
				270
			],
			[
				109,
				102
			]
		],
		[
			[
				69085,
				62873
			],
			[
				-19,
				1203
			]
		],
		[
			[
				69066,
				64076
			],
			[
				-7,
				459
			]
		],
		[
			[
				69059,
				64535
			],
			[
				-316,
				43
			]
		],
		[
			[
				68743,
				64578
			],
			[
				-53,
				-1064
			],
			[
				-65,
				-49
			]
		],
		[
			[
				68625,
				63465
			],
			[
				-40,
				-922
			]
		],
		[
			[
				78116,
				43672
			],
			[
				-13,
				-343
			],
			[
				193,
				-22
			],
			[
				-15,
				-349
			]
		],
		[
			[
				78281,
				42958
			],
			[
				190,
				-25
			]
		],
		[
			[
				78471,
				42933
			],
			[
				16,
				350
			],
			[
				360,
				-53
			]
		],
		[
			[
				78847,
				43230
			],
			[
				29,
				507
			],
			[
				75,
				159
			],
			[
				165,
				-31
			],
			[
				12,
				207
			]
		],
		[
			[
				79128,
				44072
			],
			[
				-40,
				148
			]
		],
		[
			[
				79088,
				44220
			],
			[
				-878,
				132
			]
		],
		[
			[
				78210,
				44352
			],
			[
				-14,
				-344
			],
			[
				-66,
				8
			],
			[
				-14,
				-344
			]
		],
		[
			[
				41847,
				65309
			],
			[
				75,
				-1670
			]
		],
		[
			[
				41922,
				63639
			],
			[
				940,
				117
			]
		],
		[
			[
				42862,
				63756
			],
			[
				-68,
				1668
			]
		],
		[
			[
				42794,
				65424
			],
			[
				-163,
				-19
			]
		],
		[
			[
				42631,
				65405
			],
			[
				-784,
				-96
			]
		],
		[
			[
				46612,
				59071
			],
			[
				965,
				78
			]
		],
		[
			[
				47577,
				59149
			],
			[
				-16,
				673
			]
		],
		[
			[
				47561,
				59822
			],
			[
				-25,
				1009
			]
		],
		[
			[
				47536,
				60831
			],
			[
				-971,
				-75
			]
		],
		[
			[
				46565,
				60756
			],
			[
				47,
				-1685
			]
		],
		[
			[
				70692,
				69935
			],
			[
				191,
				-41
			],
			[
				-5,
				-338
			],
			[
				47,
				-159
			],
			[
				154,
				-15
			],
			[
				-14,
				-252
			],
			[
				80,
				-152
			],
			[
				91,
				28
			],
			[
				65,
				-108
			]
		],
		[
			[
				71301,
				68898
			],
			[
				72,
				-10
			]
		],
		[
			[
				71373,
				68888
			],
			[
				20,
				308
			],
			[
				95,
				0
			],
			[
				23,
				241
			],
			[
				73,
				121
			],
			[
				101,
				38
			]
		],
		[
			[
				71685,
				69596
			],
			[
				55,
				817
			],
			[
				-266,
				40
			]
		],
		[
			[
				71474,
				70453
			],
			[
				-556,
				110
			],
			[
				-10,
				-167
			],
			[
				-188,
				32
			]
		],
		[
			[
				70720,
				70428
			],
			[
				-28,
				-493
			]
		],
		[
			[
				63658,
				60348
			],
			[
				965,
				-87
			],
			[
				384,
				-10
			]
		],
		[
			[
				65007,
				60251
			],
			[
				35,
				1006
			]
		],
		[
			[
				65042,
				61257
			],
			[
				-389,
				27
			]
		],
		[
			[
				64653,
				61284
			],
			[
				-386,
				7
			],
			[
				-387,
				66
			],
			[
				-195,
				7
			]
		],
		[
			[
				63685,
				61364
			],
			[
				-27,
				-1016
			]
		],
		[
			[
				62348,
				35019
			],
			[
				382,
				-31
			]
		],
		[
			[
				62730,
				34988
			],
			[
				381,
				-32
			]
		],
		[
			[
				63111,
				34956
			],
			[
				31,
				1006
			]
		],
		[
			[
				63142,
				35962
			],
			[
				10,
				336
			]
		],
		[
			[
				63152,
				36298
			],
			[
				-770,
				63
			]
		],
		[
			[
				62382,
				36361
			],
			[
				-34,
				-1342
			]
		],
		[
			[
				54124,
				49887
			],
			[
				4,
				-838
			]
		],
		[
			[
				54128,
				49049
			],
			[
				702,
				1
			]
		],
		[
			[
				54830,
				49050
			],
			[
				-7,
				1177
			]
		],
		[
			[
				54823,
				50227
			],
			[
				1,
				673
			],
			[
				-16,
				343
			]
		],
		[
			[
				54808,
				51243
			],
			[
				-693,
				-9
			]
		],
		[
			[
				54115,
				51234
			],
			[
				9,
				-1347
			]
		],
		[
			[
				45882,
				48790
			],
			[
				534,
				51
			]
		],
		[
			[
				46416,
				48841
			],
			[
				226,
				18
			]
		],
		[
			[
				46642,
				48859
			],
			[
				-43,
				1681
			]
		],
		[
			[
				46599,
				50540
			],
			[
				-726,
				-65
			]
		],
		[
			[
				45873,
				50475
			],
			[
				-39,
				-4
			]
		],
		[
			[
				45834,
				50471
			],
			[
				48,
				-1681
			]
		],
		[
			[
				60515,
				79171
			],
			[
				297,
				-7
			],
			[
				-2,
				-55
			]
		],
		[
			[
				60810,
				79109
			],
			[
				432,
				-49
			]
		],
		[
			[
				61242,
				79060
			],
			[
				26,
				1205
			],
			[
				28,
				70
			],
			[
				-84,
				292
			]
		],
		[
			[
				61212,
				80627
			],
			[
				-276,
				15
			],
			[
				0,
				194
			],
			[
				-557,
				27
			],
			[
				-125,
				64
			]
		],
		[
			[
				60254,
				80927
			],
			[
				-10,
				-667
			],
			[
				290,
				-17
			],
			[
				-19,
				-1072
			]
		],
		[
			[
				58301,
				27967
			],
			[
				388,
				-16
			]
		],
		[
			[
				58689,
				27951
			],
			[
				190,
				-11
			]
		],
		[
			[
				58879,
				27940
			],
			[
				21,
				1336
			]
		],
		[
			[
				58900,
				29276
			],
			[
				-388,
				17
			]
		],
		[
			[
				58512,
				29293
			],
			[
				-192,
				9
			]
		],
		[
			[
				58320,
				29302
			],
			[
				-19,
				-1335
			]
		],
		[
			[
				62409,
				55274
			],
			[
				-23,
				-1443
			]
		],
		[
			[
				62386,
				53831
			],
			[
				764,
				-34
			]
		],
		[
			[
				63150,
				53797
			],
			[
				64,
				-3
			],
			[
				11,
				394
			],
			[
				36,
				219
			],
			[
				64,
				-4
			],
			[
				1,
				213
			],
			[
				66,
				-20
			],
			[
				35,
				153
			],
			[
				64,
				-31
			],
			[
				38,
				281
			]
		],
		[
			[
				63529,
				54999
			],
			[
				-351,
				68
			],
			[
				13,
				780
			]
		],
		[
			[
				63191,
				55847
			],
			[
				-770,
				45
			]
		],
		[
			[
				62421,
				55892
			],
			[
				-12,
				-618
			]
		],
		[
			[
				53058,
				36113
			],
			[
				322,
				6
			]
		],
		[
			[
				53380,
				36119
			],
			[
				442,
				7
			],
			[
				0,
				285
			]
		],
		[
			[
				53822,
				36411
			],
			[
				-4,
				1055
			]
		],
		[
			[
				53818,
				37466
			],
			[
				-581,
				-11
			]
		],
		[
			[
				53237,
				37455
			],
			[
				-188,
				-4
			]
		],
		[
			[
				53049,
				37451
			],
			[
				9,
				-1338
			]
		],
		[
			[
				74951,
				41294
			],
			[
				-12,
				-345
			]
		],
		[
			[
				74939,
				40949
			],
			[
				390,
				-34
			],
			[
				3,
				58
			],
			[
				397,
				-27
			]
		],
		[
			[
				75729,
				40946
			],
			[
				96,
				-7
			],
			[
				18,
				439
			]
		],
		[
			[
				75843,
				41378
			],
			[
				9,
				392
			]
		],
		[
			[
				75852,
				41770
			],
			[
				-883,
				79
			]
		],
		[
			[
				74969,
				41849
			],
			[
				-18,
				-555
			]
		],
		[
			[
				74097,
				38343
			],
			[
				95,
				-21
			],
			[
				-47,
				-669
			]
		],
		[
			[
				74145,
				37653
			],
			[
				187,
				-41
			]
		],
		[
			[
				74332,
				37612
			],
			[
				575,
				-132
			]
		],
		[
			[
				74907,
				37480
			],
			[
				72,
				946
			]
		],
		[
			[
				74979,
				38426
			],
			[
				-191,
				43
			],
			[
				4,
				57
			],
			[
				-190,
				42
			],
			[
				13,
				168
			],
			[
				-384,
				89
			]
		],
		[
			[
				74231,
				38825
			],
			[
				-13,
				-171
			],
			[
				-95,
				22
			],
			[
				-26,
				-333
			]
		],
		[
			[
				52814,
				71203
			],
			[
				351,
				13
			]
		],
		[
			[
				53165,
				71216
			],
			[
				609,
				27
			]
		],
		[
			[
				53774,
				71243
			],
			[
				-6,
				649
			]
		],
		[
			[
				53768,
				71892
			],
			[
				-11,
				1032
			],
			[
				-13,
				0
			]
		],
		[
			[
				53744,
				72924
			],
			[
				-952,
				-27
			]
		],
		[
			[
				52792,
				72897
			],
			[
				22,
				-1694
			]
		],
		[
			[
				43860,
				74124
			],
			[
				153,
				14
			]
		],
		[
			[
				44013,
				74138
			],
			[
				810,
				81
			]
		],
		[
			[
				44823,
				74219
			],
			[
				-60,
				1672
			]
		],
		[
			[
				44763,
				75891
			],
			[
				-962,
				-97
			]
		],
		[
			[
				43801,
				75794
			],
			[
				59,
				-1670
			]
		],
		[
			[
				49295,
				67826
			],
			[
				976,
				39
			]
		],
		[
			[
				50271,
				67865
			],
			[
				-17,
				1421
			]
		],
		[
			[
				50254,
				69286
			],
			[
				-3,
				272
			]
		],
		[
			[
				50251,
				69558
			],
			[
				-988,
				-53
			]
		],
		[
			[
				49263,
				69505
			],
			[
				32,
				-1679
			]
		],
		[
			[
				61343,
				50549
			],
			[
				298,
				-8
			],
			[
				659,
				-48
			]
		],
		[
			[
				62300,
				50493
			],
			[
				14,
				520
			],
			[
				25,
				-2
			]
		],
		[
			[
				62339,
				51011
			],
			[
				7,
				396
			],
			[
				-458,
				34
			],
			[
				-119,
				169
			],
			[
				-96,
				3
			]
		],
		[
			[
				61673,
				51613
			],
			[
				-287,
				-1
			]
		],
		[
			[
				61386,
				51612
			],
			[
				-6,
				-559
			],
			[
				-28,
				0
			],
			[
				-9,
				-504
			]
		],
		[
			[
				50187,
				40038
			],
			[
				727,
				34
			]
		],
		[
			[
				50914,
				40072
			],
			[
				-2,
				685
			]
		],
		[
			[
				50912,
				40757
			],
			[
				-10,
				656
			]
		],
		[
			[
				50902,
				41413
			],
			[
				-737,
				-35
			]
		],
		[
			[
				50165,
				41378
			],
			[
				22,
				-1340
			]
		],
		[
			[
				42606,
				35662
			],
			[
				1095,
				131
			]
		],
		[
			[
				43701,
				35793
			],
			[
				33,
				2
			]
		],
		[
			[
				43734,
				35795
			],
			[
				-33,
				783
			],
			[
				13,
				226
			],
			[
				47,
				6
			],
			[
				-48,
				1169
			]
		],
		[
			[
				43713,
				37979
			],
			[
				-1215,
				-148
			]
		],
		[
			[
				42498,
				37831
			],
			[
				44,
				-1005
			]
		],
		[
			[
				42542,
				36826
			],
			[
				20,
				-168
			],
			[
				44,
				-996
			]
		],
		[
			[
				70041,
				78968
			],
			[
				-47,
				-257
			],
			[
				64,
				-232
			],
			[
				78,
				-72
			],
			[
				-81,
				-218
			],
			[
				100,
				-205
			],
			[
				-84,
				-105
			],
			[
				30,
				-317
			],
			[
				-75,
				-149
			],
			[
				58,
				-230
			],
			[
				-65,
				-50
			]
		],
		[
			[
				70019,
				77133
			],
			[
				44,
				-123
			]
		],
		[
			[
				70063,
				77010
			],
			[
				127,
				-38
			],
			[
				81,
				-310
			],
			[
				116,
				-102
			]
		],
		[
			[
				70387,
				76560
			],
			[
				89,
				-35
			],
			[
				86,
				145
			],
			[
				118,
				50
			]
		],
		[
			[
				70680,
				76720
			],
			[
				50,
				944
			],
			[
				32,
				-5
			]
		],
		[
			[
				70762,
				77659
			],
			[
				24,
				123
			],
			[
				-67,
				390
			],
			[
				188,
				307
			],
			[
				31,
				130
			],
			[
				254,
				224
			],
			[
				34,
				165
			],
			[
				-79,
				476
			],
			[
				74,
				193
			],
			[
				89,
				89
			],
			[
				-101,
				97
			],
			[
				-35,
				248
			],
			[
				-81,
				121
			],
			[
				59,
				51
			],
			[
				-94,
				99
			]
		],
		[
			[
				71058,
				80372
			],
			[
				-260,
				157
			],
			[
				-344,
				138
			],
			[
				-239,
				26
			],
			[
				45,
				-129
			],
			[
				86,
				72
			],
			[
				239,
				-124
			],
			[
				16,
				-113
			],
			[
				-189,
				-303
			],
			[
				-123,
				-105
			],
			[
				-67,
				-290
			],
			[
				44,
				-199
			],
			[
				-29,
				-297
			],
			[
				-54,
				-152
			],
			[
				-142,
				-85
			]
		],
		[
			[
				20453,
				63748
			],
			[
				167,
				-329
			],
			[
				71,
				-56
			],
			[
				45,
				-484
			],
			[
				69,
				-46
			],
			[
				6,
				-591
			],
			[
				57,
				-59
			],
			[
				-30,
				-272
			],
			[
				220,
				-292
			],
			[
				24,
				-195
			]
		],
		[
			[
				21082,
				61424
			],
			[
				47,
				-94
			],
			[
				185,
				-59
			],
			[
				135,
				-93
			],
			[
				206,
				-263
			],
			[
				58,
				-158
			]
		],
		[
			[
				21713,
				60757
			],
			[
				87,
				46
			],
			[
				85,
				182
			],
			[
				322,
				140
			],
			[
				12,
				107
			],
			[
				187,
				-2
			],
			[
				52,
				135
			],
			[
				184,
				-16
			],
			[
				150,
				-254
			],
			[
				315,
				148
			],
			[
				61,
				-73
			]
		],
		[
			[
				23168,
				61170
			],
			[
				-131,
				1206
			]
		],
		[
			[
				23037,
				62376
			],
			[
				-254,
				2355
			]
		],
		[
			[
				22783,
				64731
			],
			[
				-1137,
				-366
			],
			[
				37,
				-329
			],
			[
				-564,
				-182
			],
			[
				-188,
				1637
			],
			[
				-454,
				-143
			]
		],
		[
			[
				20477,
				65348
			],
			[
				-155,
				-44
			],
			[
				-122,
				-91
			],
			[
				-42,
				-247
			],
			[
				80,
				-216
			],
			[
				53,
				-417
			],
			[
				-85,
				-155
			],
			[
				84,
				-202
			],
			[
				-29,
				-178
			],
			[
				192,
				-50
			]
		],
		[
			[
				42537,
				45075
			],
			[
				598,
				67
			]
		],
		[
			[
				43135,
				45142
			],
			[
				1284,
				124
			]
		],
		[
			[
				44419,
				45266
			],
			[
				-1,
				23
			]
		],
		[
			[
				44418,
				45289
			],
			[
				-58,
				1676
			]
		],
		[
			[
				44360,
				46965
			],
			[
				-11,
				331
			]
		],
		[
			[
				44349,
				47296
			],
			[
				-1150,
				-99
			],
			[
				-767,
				-92
			]
		],
		[
			[
				42432,
				47105
			],
			[
				29,
				-346
			],
			[
				76,
				-1684
			]
		],
		[
			[
				73373,
				43445
			],
			[
				-3,
				-56
			],
			[
				373,
				-65
			]
		],
		[
			[
				73743,
				43324
			],
			[
				40,
				610
			]
		],
		[
			[
				73783,
				43934
			],
			[
				12,
				175
			]
		],
		[
			[
				73795,
				44109
			],
			[
				-376,
				59
			]
		],
		[
			[
				73419,
				44168
			],
			[
				-46,
				-723
			]
		],
		[
			[
				44971,
				53775
			],
			[
				54,
				6
			]
		],
		[
			[
				45025,
				53781
			],
			[
				766,
				75
			]
		],
		[
			[
				45791,
				53856
			],
			[
				38,
				4
			]
		],
		[
			[
				45829,
				53860
			],
			[
				-45,
				1502
			]
		],
		[
			[
				45784,
				55362
			],
			[
				-863,
				-72
			]
		],
		[
			[
				44921,
				55290
			],
			[
				50,
				-1515
			]
		],
		[
			[
				70427,
				24404
			],
			[
				407,
				-59
			]
		],
		[
			[
				70834,
				24345
			],
			[
				59,
				997
			]
		],
		[
			[
				70893,
				25342
			],
			[
				-659,
				98
			]
		],
		[
			[
				70234,
				25440
			],
			[
				10,
				-188
			],
			[
				-72,
				-301
			],
			[
				21,
				-227
			],
			[
				218,
				-175
			],
			[
				16,
				-145
			]
		],
		[
			[
				26874,
				17822
			],
			[
				54,
				-31
			],
			[
				12,
				-180
			],
			[
				85,
				-110
			],
			[
				49,
				136
			],
			[
				241,
				-283
			],
			[
				165,
				27
			],
			[
				110,
				-85
			],
			[
				42,
				-210
			]
		],
		[
			[
				27632,
				17086
			],
			[
				31,
				20
			],
			[
				85,
				686
			],
			[
				109,
				-147
			],
			[
				95,
				11
			],
			[
				91,
				-159
			],
			[
				85,
				-47
			],
			[
				118,
				51
			],
			[
				14,
				86
			]
		],
		[
			[
				28260,
				17587
			],
			[
				128,
				242
			],
			[
				121,
				147
			],
			[
				174,
				117
			],
			[
				44,
				315
			],
			[
				51,
				52
			],
			[
				1,
				201
			]
		],
		[
			[
				28779,
				18661
			],
			[
				-63,
				337
			],
			[
				1,
				193
			],
			[
				81,
				191
			],
			[
				75,
				65
			],
			[
				115,
				-17
			],
			[
				45,
				205
			],
			[
				-106,
				1153
			],
			[
				191,
				58
			],
			[
				-34,
				331
			],
			[
				222,
				66
			],
			[
				-32,
				331
			],
			[
				37,
				12
			],
			[
				-33,
				323
			],
			[
				158,
				50
			],
			[
				-16,
				160
			],
			[
				443,
				138
			],
			[
				-27,
				272
			],
			[
				468,
				134
			]
		],
		[
			[
				30304,
				22663
			],
			[
				-2,
				167
			],
			[
				-104,
				206
			],
			[
				69,
				225
			],
			[
				-54,
				31
			],
			[
				-124,
				-124
			],
			[
				-55,
				37
			]
		],
		[
			[
				30034,
				23205
			],
			[
				-132,
				-80
			],
			[
				-203,
				140
			],
			[
				-56,
				-229
			],
			[
				-183,
				54
			],
			[
				-78,
				-62
			],
			[
				-126,
				64
			],
			[
				-116,
				-82
			],
			[
				-79,
				-159
			],
			[
				-67,
				-22
			],
			[
				-129,
				116
			],
			[
				-76,
				292
			],
			[
				-122,
				-161
			],
			[
				-49,
				51
			],
			[
				-71,
				-106
			],
			[
				-172,
				-55
			],
			[
				-84,
				-98
			],
			[
				-105,
				44
			],
			[
				-110,
				208
			],
			[
				16,
				183
			]
		],
		[
			[
				28092,
				23303
			],
			[
				-55,
				56
			],
			[
				-50,
				-162
			],
			[
				-162,
				-264
			],
			[
				-17,
				-185
			],
			[
				41,
				-100
			],
			[
				-89,
				-324
			],
			[
				55,
				-57
			],
			[
				1,
				-227
			],
			[
				-40,
				-82
			],
			[
				-22,
				-300
			],
			[
				-160,
				-245
			],
			[
				-163,
				97
			],
			[
				-8,
				-139
			],
			[
				-135,
				-221
			],
			[
				-28,
				-332
			],
			[
				84,
				-18
			],
			[
				28,
				-377
			],
			[
				-92,
				-161
			],
			[
				19,
				-80
			],
			[
				-89,
				-80
			],
			[
				-13,
				-248
			],
			[
				-106,
				-278
			],
			[
				-49,
				-294
			],
			[
				30,
				-252
			],
			[
				-51,
				-260
			],
			[
				56,
				-237
			],
			[
				-106,
				-35
			],
			[
				77,
				-292
			],
			[
				-124,
				-203
			],
			[
				-50,
				-181
			]
		],
		[
			[
				90756,
				32694
			],
			[
				318,
				-847
			]
		],
		[
			[
				91074,
				31847
			],
			[
				-1,
				12
			]
		],
		[
			[
				91073,
				31859
			],
			[
				74,
				92
			],
			[
				-16,
				177
			],
			[
				192,
				356
			],
			[
				62,
				534
			]
		],
		[
			[
				91385,
				33018
			],
			[
				-590,
				-305
			]
		],
		[
			[
				90795,
				32713
			],
			[
				-39,
				-19
			]
		],
		[
			[
				16233,
				13824
			],
			[
				109,
				-69
			],
			[
				276,
				-49
			],
			[
				66,
				-55
			]
		],
		[
			[
				16684,
				13651
			],
			[
				287,
				699
			],
			[
				-15,
				138
			],
			[
				42,
				209
			],
			[
				-221,
				58
			],
			[
				-148,
				410
			],
			[
				-75,
				349
			],
			[
				15,
				190
			],
			[
				62,
				68
			],
			[
				22,
				207
			],
			[
				-115,
				193
			]
		],
		[
			[
				16538,
				16172
			],
			[
				-335,
				-155
			],
			[
				27,
				-174
			],
			[
				-56,
				-151
			],
			[
				-166,
				-237
			],
			[
				-173,
				-105
			],
			[
				23,
				-298
			],
			[
				297,
				-262
			],
			[
				40,
				-203
			],
			[
				100,
				-235
			],
			[
				-76,
				-84
			],
			[
				14,
				-444
			]
		],
		[
			[
				88699,
				49173
			],
			[
				12,
				-192
			]
		],
		[
			[
				88711,
				48981
			],
			[
				42,
				-39
			],
			[
				240,
				388
			],
			[
				42,
				8
			]
		],
		[
			[
				89035,
				49338
			],
			[
				24,
				293
			],
			[
				107,
				75
			]
		],
		[
			[
				89166,
				49706
			],
			[
				-62,
				100
			],
			[
				-88,
				-196
			],
			[
				-196,
				-127
			],
			[
				-112,
				-126
			],
			[
				-9,
				-184
			]
		],
		[
			[
				40253,
				26930
			],
			[
				1121,
				156
			],
			[
				510,
				80
			]
		],
		[
			[
				41884,
				27166
			],
			[
				-7,
				151
			]
		],
		[
			[
				41877,
				27317
			],
			[
				-56,
				1099
			]
		],
		[
			[
				41821,
				28416
			],
			[
				-66,
				1339
			]
		],
		[
			[
				41755,
				29755
			],
			[
				-1359,
				-193
			]
		],
		[
			[
				40396,
				29562
			],
			[
				-289,
				-43
			]
		],
		[
			[
				40107,
				29519
			],
			[
				146,
				-2589
			]
		],
		[
			[
				59480,
				65692
			],
			[
				840,
				-14
			],
			[
				-4,
				-230
			],
			[
				63,
				-1
			],
			[
				-7,
				-222
			],
			[
				223,
				-3
			]
		],
		[
			[
				60595,
				65222
			],
			[
				100,
				-5
			],
			[
				1,
				114
			],
			[
				98,
				-3
			],
			[
				35,
				225
			]
		],
		[
			[
				60829,
				65553
			],
			[
				3,
				1019
			]
		],
		[
			[
				60832,
				66572
			],
			[
				-382,
				-1
			]
		],
		[
			[
				60450,
				66571
			],
			[
				-255,
				-2
			],
			[
				-22,
				-293
			],
			[
				-303,
				-30
			],
			[
				0,
				-113
			],
			[
				-291,
				3
			],
			[
				-2,
				-225
			],
			[
				-95,
				1
			]
		],
		[
			[
				59482,
				65912
			],
			[
				-2,
				-220
			]
		],
		[
			[
				72903,
				43254
			],
			[
				136,
				-30
			]
		],
		[
			[
				73039,
				43224
			],
			[
				63,
				-12
			],
			[
				16,
				280
			],
			[
				255,
				-47
			]
		],
		[
			[
				73419,
				44168
			],
			[
				-444,
				90
			]
		],
		[
			[
				72975,
				44258
			],
			[
				-72,
				-1004
			]
		],
		[
			[
				71178,
				45308
			],
			[
				220,
				-46
			]
		],
		[
			[
				71398,
				45262
			],
			[
				283,
				-60
			]
		],
		[
			[
				71681,
				45202
			],
			[
				78,
				1127
			]
		],
		[
			[
				71759,
				46329
			],
			[
				-407,
				77
			]
		],
		[
			[
				71352,
				46406
			],
			[
				-88,
				17
			],
			[
				-51,
				-776
			],
			[
				-35,
				-339
			]
		],
		[
			[
				65551,
				67832
			],
			[
				-12,
				-337
			],
			[
				291,
				-33
			],
			[
				94,
				-64
			],
			[
				-11,
				-285
			]
		],
		[
			[
				65913,
				67113
			],
			[
				289,
				-29
			],
			[
				5,
				115
			],
			[
				480,
				-56
			]
		],
		[
			[
				66687,
				67143
			],
			[
				23,
				559
			]
		],
		[
			[
				66710,
				67702
			],
			[
				8,
				170
			]
		],
		[
			[
				66718,
				67872
			],
			[
				-516,
				63
			]
		],
		[
			[
				66202,
				67935
			],
			[
				-628,
				67
			]
		],
		[
			[
				65574,
				68002
			],
			[
				-23,
				-170
			]
		],
		[
			[
				47710,
				35876
			],
			[
				164,
				13
			]
		],
		[
			[
				47874,
				35889
			],
			[
				792,
				55
			]
		],
		[
			[
				48666,
				35944
			],
			[
				-30,
				1330
			]
		],
		[
			[
				48636,
				37274
			],
			[
				-934,
				-64
			]
		],
		[
			[
				47702,
				37210
			],
			[
				-23,
				-2
			]
		],
		[
			[
				47679,
				37208
			],
			[
				31,
				-1332
			]
		],
		[
			[
				85056,
				55504
			],
			[
				-35,
				-1463
			]
		],
		[
			[
				85021,
				54041
			],
			[
				263,
				-70
			]
		],
		[
			[
				85284,
				53971
			],
			[
				52,
				537
			],
			[
				108,
				59
			]
		],
		[
			[
				85444,
				54567
			],
			[
				13,
				154
			],
			[
				101,
				42
			],
			[
				-15,
				217
			],
			[
				-55,
				174
			],
			[
				-86,
				-11
			],
			[
				-21,
				244
			],
			[
				-132,
				38
			]
		],
		[
			[
				85249,
				55425
			],
			[
				-193,
				79
			]
		],
		[
			[
				56154,
				59323
			],
			[
				161,
				-2
			],
			[
				-2,
				-336
			],
			[
				191,
				-4
			]
		],
		[
			[
				56504,
				58981
			],
			[
				383,
				-6
			]
		],
		[
			[
				56887,
				58975
			],
			[
				7,
				1005
			],
			[
				-18,
				0
			],
			[
				8,
				1012
			]
		],
		[
			[
				56884,
				60992
			],
			[
				-577,
				10
			]
		],
		[
			[
				56307,
				61002
			],
			[
				-3,
				-671
			],
			[
				-248,
				2
			]
		],
		[
			[
				56056,
				60333
			],
			[
				60,
				-147
			],
			[
				-91,
				-203
			],
			[
				5,
				-232
			],
			[
				94,
				-175
			],
			[
				30,
				-253
			]
		],
		[
			[
				69019,
				57227
			],
			[
				287,
				53
			],
			[
				181,
				-180
			],
			[
				219,
				-30
			]
		],
		[
			[
				69706,
				57070
			],
			[
				15,
				98
			],
			[
				132,
				7
			]
		],
		[
			[
				69853,
				57175
			],
			[
				-1,
				333
			],
			[
				-62,
				284
			]
		],
		[
			[
				69790,
				57792
			],
			[
				-38,
				-71
			],
			[
				-137,
				7
			],
			[
				-67,
				-73
			],
			[
				-184,
				-58
			],
			[
				-62,
				57
			],
			[
				-206,
				-11
			]
		],
		[
			[
				69096,
				57643
			],
			[
				-25,
				-264
			],
			[
				-52,
				-152
			]
		],
		[
			[
				50597,
				77001
			],
			[
				794,
				-773
			]
		],
		[
			[
				51391,
				76228
			],
			[
				147,
				-143
			],
			[
				155,
				477
			]
		],
		[
			[
				51693,
				76562
			],
			[
				345,
				1037
			]
		],
		[
			[
				52038,
				77599
			],
			[
				-940,
				934
			]
		],
		[
			[
				51098,
				78533
			],
			[
				-501,
				-1532
			]
		],
		[
			[
				49227,
				74579
			],
			[
				714,
				-670
			]
		],
		[
			[
				49941,
				73909
			],
			[
				403,
				1248
			],
			[
				146,
				-143
			],
			[
				77,
				244
			]
		],
		[
			[
				50567,
				75258
			],
			[
				94,
				294
			],
			[
				-589,
				582
			]
		],
		[
			[
				50072,
				76134
			],
			[
				-53,
				-155
			],
			[
				-334,
				73
			]
		],
		[
			[
				49685,
				76052
			],
			[
				-458,
				-1473
			]
		],
		[
			[
				86530,
				43600
			],
			[
				-32,
				-23
			]
		],
		[
			[
				86498,
				43577
			],
			[
				32,
				23
			]
		],
		[
			[
				70893,
				25342
			],
			[
				765,
				-142
			]
		],
		[
			[
				71658,
				25200
			],
			[
				14,
				333
			],
			[
				71,
				990
			]
		],
		[
			[
				71743,
				26523
			],
			[
				-364,
				71
			]
		],
		[
			[
				71379,
				26594
			],
			[
				-408,
				78
			]
		],
		[
			[
				70971,
				26672
			],
			[
				-78,
				-1330
			]
		],
		[
			[
				82733,
				50539
			],
			[
				-3,
				178
			]
		],
		[
			[
				82730,
				50717
			],
			[
				-26,
				48
			],
			[
				-134,
				-96
			],
			[
				137,
				-185
			],
			[
				26,
				55
			]
		],
		[
			[
				61614,
				25241
			],
			[
				1150,
				-103
			]
		],
		[
			[
				62764,
				25138
			],
			[
				31,
				998
			]
		],
		[
			[
				62795,
				26136
			],
			[
				-386,
				32
			]
		],
		[
			[
				62409,
				26168
			],
			[
				-576,
				51
			]
		],
		[
			[
				61833,
				26219
			],
			[
				-192,
				14
			]
		],
		[
			[
				61641,
				26233
			],
			[
				-9,
				-333
			]
		],
		[
			[
				61632,
				25900
			],
			[
				-18,
				-659
			]
		],
		[
			[
				44675,
				58898
			],
			[
				962,
				94
			]
		],
		[
			[
				45637,
				58992
			],
			[
				-53,
				1656
			]
		],
		[
			[
				45584,
				60648
			],
			[
				-965,
				-89
			]
		],
		[
			[
				44619,
				60559
			],
			[
				56,
				-1661
			]
		],
		[
			[
				51727,
				60633
			],
			[
				958,
				30
			]
		],
		[
			[
				52685,
				60663
			],
			[
				-8,
				1005
			]
		],
		[
			[
				52677,
				61668
			],
			[
				-3,
				336
			]
		],
		[
			[
				52674,
				62004
			],
			[
				-956,
				-26
			]
		],
		[
			[
				51718,
				61978
			],
			[
				9,
				-1345
			]
		],
		[
			[
				25648,
				51421
			],
			[
				2071,
				598
			]
		],
		[
			[
				27719,
				52019
			],
			[
				1047,
				278
			]
		],
		[
			[
				28766,
				52297
			],
			[
				-955,
				10439
			]
		],
		[
			[
				27811,
				62736
			],
			[
				-51,
				-192
			],
			[
				-123,
				136
			],
			[
				-77,
				-164
			],
			[
				-107,
				-76
			],
			[
				-67,
				-183
			],
			[
				-153,
				-197
			],
			[
				-99,
				56
			],
			[
				-101,
				-157
			],
			[
				-57,
				-191
			],
			[
				-145,
				79
			],
			[
				-43,
				-84
			],
			[
				-87,
				34
			],
			[
				-23,
				178
			],
			[
				-46,
				-40
			],
			[
				7,
				-233
			],
			[
				-150,
				77
			],
			[
				-67,
				-32
			],
			[
				156,
				-105
			],
			[
				-145,
				-98
			]
		],
		[
			[
				26433,
				61544
			],
			[
				126,
				-1257
			],
			[
				-405,
				-119
			],
			[
				66,
				-674
			],
			[
				-439,
				-100
			],
			[
				-560,
				-161
			],
			[
				65,
				-666
			],
			[
				-189,
				-61
			],
			[
				45,
				-421
			],
			[
				-65,
				67
			],
			[
				-185,
				-75
			],
			[
				-182,
				-322
			],
			[
				-109,
				-13
			],
			[
				-333,
				-297
			],
			[
				-26,
				-152
			],
			[
				-271,
				-420
			],
			[
				-35,
				-120
			],
			[
				-147,
				-137
			],
			[
				-128,
				-34
			]
		],
		[
			[
				23661,
				56582
			],
			[
				113,
				-1043
			],
			[
				64,
				-210
			],
			[
				-20,
				-208
			],
			[
				53,
				-200
			],
			[
				-29,
				-320
			],
			[
				81,
				-172
			],
			[
				162,
				76
			],
			[
				64,
				-208
			],
			[
				117,
				-31
			],
			[
				260,
				-201
			],
			[
				198,
				-2
			],
			[
				65,
				-88
			],
			[
				123,
				32
			],
			[
				161,
				-201
			],
			[
				69,
				44
			],
			[
				123,
				-227
			],
			[
				-22,
				-153
			],
			[
				56,
				-127
			],
			[
				-47,
				-136
			],
			[
				16,
				-152
			],
			[
				87,
				-209
			],
			[
				-8,
				-230
			],
			[
				69,
				-237
			],
			[
				-2,
				-121
			],
			[
				134,
				-444
			],
			[
				97,
				-203
			],
			[
				3,
				-190
			]
		],
		[
			[
				25334,
				93326
			],
			[
				53,
				-62
			],
			[
				87,
				232
			],
			[
				-10,
				219
			]
		],
		[
			[
				25464,
				93715
			],
			[
				-147,
				-158
			],
			[
				55,
				-116
			],
			[
				-38,
				-115
			]
		],
		[
			[
				25034,
				95023
			],
			[
				14,
				-161
			],
			[
				-46,
				-173
			],
			[
				92,
				49
			],
			[
				55,
				249
			],
			[
				-115,
				36
			]
		],
		[
			[
				24024,
				95001
			],
			[
				0,
				-142
			],
			[
				132,
				-88
			],
			[
				66,
				85
			],
			[
				-25,
				152
			],
			[
				-95,
				166
			],
			[
				-7,
				-170
			],
			[
				-71,
				-3
			]
		],
		[
			[
				23894,
				94360
			],
			[
				61,
				-318
			],
			[
				-63,
				-29
			],
			[
				7,
				-201
			],
			[
				181,
				-50
			],
			[
				182,
				317
			],
			[
				134,
				63
			],
			[
				103,
				138
			],
			[
				166,
				313
			],
			[
				-134,
				-41
			],
			[
				-16,
				137
			],
			[
				77,
				-81
			],
			[
				139,
				130
			],
			[
				20,
				194
			],
			[
				78,
				-104
			],
			[
				28,
				94
			],
			[
				-17,
				286
			],
			[
				53,
				-91
			],
			[
				72,
				293
			],
			[
				-8,
				132
			],
			[
				-225,
				18
			],
			[
				52,
				-130
			],
			[
				-141,
				-80
			],
			[
				-37,
				-261
			],
			[
				-58,
				78
			],
			[
				28,
				178
			],
			[
				-83,
				-21
			],
			[
				-48,
				-206
			],
			[
				-88,
				-9
			],
			[
				184,
				397
			],
			[
				57,
				-93
			],
			[
				90,
				178
			],
			[
				-71,
				-22
			],
			[
				68,
				159
			],
			[
				-88,
				20
			],
			[
				-187,
				-257
			],
			[
				-92,
				-329
			],
			[
				-80,
				70
			],
			[
				-35,
				-149
			],
			[
				133,
				-186
			],
			[
				-117,
				-158
			],
			[
				-235,
				-176
			],
			[
				49,
				-97
			],
			[
				-18,
				-246
			],
			[
				-64,
				209
			],
			[
				-57,
				-69
			]
		],
		[
			[
				23847,
				92914
			],
			[
				44,
				99
			],
			[
				-82,
				102
			],
			[
				126,
				477
			]
		],
		[
			[
				23935,
				93592
			],
			[
				-92,
				116
			],
			[
				-45,
				-119
			],
			[
				6,
				641
			],
			[
				-54,
				147
			],
			[
				-77,
				-120
			],
			[
				-68,
				-291
			],
			[
				-1,
				-247
			],
			[
				-56,
				-4
			],
			[
				-106,
				-356
			],
			[
				39,
				-143
			],
			[
				94,
				-32
			],
			[
				70,
				128
			],
			[
				-28,
				-204
			],
			[
				-68,
				-59
			],
			[
				50,
				-123
			],
			[
				248,
				-12
			]
		],
		[
			[
				23479,
				94128
			],
			[
				13,
				155
			]
		],
		[
			[
				23492,
				94283
			],
			[
				-13,
				-155
			]
		],
		[
			[
				69190,
				45100
			],
			[
				-27,
				-500
			]
		],
		[
			[
				69163,
				44600
			],
			[
				254,
				-42
			]
		],
		[
			[
				69417,
				44558
			],
			[
				312,
				-46
			]
		],
		[
			[
				69729,
				44512
			],
			[
				16,
				336
			],
			[
				-66,
				8
			],
			[
				52,
				1005
			]
		],
		[
			[
				69731,
				45861
			],
			[
				-621,
				95
			]
		],
		[
			[
				69110,
				45956
			],
			[
				-5,
				-207
			],
			[
				111,
				-152
			],
			[
				-26,
				-497
			]
		],
		[
			[
				70678,
				32118
			],
			[
				691,
				-127
			]
		],
		[
			[
				71369,
				31991
			],
			[
				384,
				-71
			]
		],
		[
			[
				71753,
				31920
			],
			[
				90,
				1324
			]
		],
		[
			[
				71843,
				33244
			],
			[
				-361,
				71
			]
		],
		[
			[
				71482,
				33315
			],
			[
				-830,
				155
			]
		],
		[
			[
				70652,
				33470
			],
			[
				25,
				-241
			],
			[
				15,
				-927
			],
			[
				-14,
				-184
			]
		],
		[
			[
				68053,
				73313
			],
			[
				905,
				-133
			]
		],
		[
			[
				68958,
				73180
			],
			[
				-20,
				1289
			]
		],
		[
			[
				68938,
				74469
			],
			[
				-279,
				181
			],
			[
				-257,
				113
			],
			[
				-276,
				72
			]
		],
		[
			[
				68126,
				74835
			],
			[
				-73,
				-1522
			]
		],
		[
			[
				24960,
				6235
			],
			[
				231,
				-1844
			]
		],
		[
			[
				25191,
				4391
			],
			[
				1222,
				445
			],
			[
				700,
				237
			]
		],
		[
			[
				27113,
				5073
			],
			[
				50,
				122
			],
			[
				-65,
				111
			],
			[
				-2,
				371
			],
			[
				-73,
				102
			],
			[
				84,
				66
			],
			[
				66,
				207
			],
			[
				-109,
				67
			],
			[
				-39,
				158
			],
			[
				69,
				105
			],
			[
				-365,
				-124
			],
			[
				-38,
				316
			],
			[
				57,
				19
			],
			[
				-149,
				1290
			],
			[
				-253,
				-87
			],
			[
				-78,
				779
			]
		],
		[
			[
				26268,
				8575
			],
			[
				-198,
				-70
			],
			[
				-109,
				348
			],
			[
				-147,
				56
			],
			[
				-51,
				-135
			],
			[
				-305,
				-67
			],
			[
				-33,
				-124
			],
			[
				44,
				-140
			],
			[
				-103,
				-421
			],
			[
				15,
				-214
			],
			[
				-52,
				-181
			],
			[
				46,
				-107
			],
			[
				-69,
				-229
			],
			[
				-108,
				107
			],
			[
				-219,
				76
			],
			[
				-45,
				112
			],
			[
				-74,
				-67
			],
			[
				-33,
				-226
			]
		],
		[
			[
				24827,
				7293
			],
			[
				133,
				-1058
			]
		],
		[
			[
				76474,
				35259
			],
			[
				-5,
				-240
			],
			[
				90,
				37
			],
			[
				-85,
				203
			]
		],
		[
			[
				75542,
				35585
			],
			[
				410,
				-111
			]
		],
		[
			[
				75952,
				35474
			],
			[
				172,
				69
			],
			[
				127,
				191
			],
			[
				115,
				67
			],
			[
				117,
				-160
			],
			[
				25,
				-159
			],
			[
				94,
				160
			],
			[
				111,
				-32
			],
			[
				53,
				174
			]
		],
		[
			[
				76766,
				35784
			],
			[
				-85,
				86
			],
			[
				-117,
				-2
			],
			[
				-210,
				154
			]
		],
		[
			[
				76354,
				36022
			],
			[
				-636,
				150
			],
			[
				-14,
				-166
			],
			[
				-124,
				32
			]
		],
		[
			[
				75580,
				36038
			],
			[
				-38,
				-453
			]
		],
		[
			[
				91362,
				17161
			],
			[
				376,
				-145
			],
			[
				628,
				-293
			]
		],
		[
			[
				92366,
				16723
			],
			[
				9,
				395
			],
			[
				100,
				78
			],
			[
				-102,
				400
			],
			[
				62,
				42
			]
		],
		[
			[
				92435,
				17638
			],
			[
				-72,
				310
			],
			[
				-185,
				-120
			],
			[
				76,
				227
			],
			[
				-99,
				-34
			],
			[
				-90,
				676
			],
			[
				-195,
				-80
			]
		],
		[
			[
				91870,
				18617
			],
			[
				-193,
				-113
			],
			[
				51,
				-374
			],
			[
				-279,
				-111
			]
		],
		[
			[
				91449,
				18019
			],
			[
				42,
				-223
			],
			[
				-129,
				-635
			]
		],
		[
			[
				11597,
				50490
			],
			[
				772,
				-751
			],
			[
				123,
				-820
			],
			[
				355,
				152
			],
			[
				161,
				3
			],
			[
				199,
				-192
			]
		],
		[
			[
				13207,
				48882
			],
			[
				77,
				38
			],
			[
				-48,
				322
			],
			[
				93,
				42
			],
			[
				-73,
				494
			],
			[
				-94,
				-44
			],
			[
				-85,
				488
			],
			[
				-196,
				1301
			]
		],
		[
			[
				12881,
				51523
			],
			[
				-1142,
				-499
			]
		],
		[
			[
				11705,
				51008
			],
			[
				-47,
				-243
			],
			[
				45,
				-63
			],
			[
				-39,
				-177
			],
			[
				-67,
				-35
			]
		],
		[
			[
				67468,
				51595
			],
			[
				-8,
				-168
			]
		],
		[
			[
				67460,
				51427
			],
			[
				578,
				-81
			]
		],
		[
			[
				68038,
				51346
			],
			[
				55,
				1186
			]
		],
		[
			[
				68093,
				52532
			],
			[
				-65,
				7
			]
		],
		[
			[
				68028,
				52539
			],
			[
				-518,
				72
			]
		],
		[
			[
				67510,
				52611
			],
			[
				-42,
				-1016
			]
		],
		[
			[
				56232,
				35655
			],
			[
				382,
				-4
			]
		],
		[
			[
				56614,
				35651
			],
			[
				377,
				-8
			]
		],
		[
			[
				56991,
				35643
			],
			[
				12,
				1334
			]
		],
		[
			[
				57003,
				36977
			],
			[
				-192,
				6
			]
		],
		[
			[
				56811,
				36983
			],
			[
				-575,
				8
			]
		],
		[
			[
				56236,
				36991
			],
			[
				-4,
				-1336
			]
		],
		[
			[
				46642,
				48859
			],
			[
				760,
				69
			]
		],
		[
			[
				47402,
				48928
			],
			[
				-39,
				1681
			]
		],
		[
			[
				47363,
				50609
			],
			[
				-764,
				-69
			]
		],
		[
			[
				71553,
				29250
			],
			[
				767,
				-139
			]
		],
		[
			[
				72320,
				29111
			],
			[
				383,
				-77
			]
		],
		[
			[
				72703,
				29034
			],
			[
				46,
				664
			],
			[
				17,
				-4
			],
			[
				43,
				662
			]
		],
		[
			[
				72809,
				30356
			],
			[
				-767,
				152
			]
		],
		[
			[
				72042,
				30508
			],
			[
				-44,
				-670
			],
			[
				-402,
				77
			]
		],
		[
			[
				71596,
				29915
			],
			[
				-43,
				-665
			]
		],
		[
			[
				55094,
				20725
			],
			[
				969,
				-7
			]
		],
		[
			[
				56063,
				20718
			],
			[
				16,
				1273
			]
		],
		[
			[
				56079,
				21991
			],
			[
				0,
				55
			]
		],
		[
			[
				56079,
				22046
			],
			[
				-965,
				6
			]
		],
		[
			[
				55114,
				22052
			],
			[
				-2,
				-664
			],
			[
				-17,
				0
			],
			[
				-1,
				-663
			]
		],
		[
			[
				29243,
				9796
			],
			[
				54,
				513
			],
			[
				-43,
				234
			],
			[
				-3,
				263
			],
			[
				103,
				357
			],
			[
				375,
				11
			],
			[
				201,
				171
			],
			[
				23,
				214
			],
			[
				125,
				80
			],
			[
				48,
				149
			],
			[
				346,
				64
			]
		],
		[
			[
				30472,
				11852
			],
			[
				-115,
				1212
			],
			[
				96,
				62
			],
			[
				39,
				167
			],
			[
				225,
				122
			],
			[
				-81,
				806
			],
			[
				200,
				59
			]
		],
		[
			[
				30836,
				14280
			],
			[
				67,
				100
			],
			[
				-74,
				168
			],
			[
				58,
				154
			],
			[
				150,
				110
			],
			[
				-13,
				103
			]
		],
		[
			[
				31024,
				14915
			],
			[
				-153,
				-104
			],
			[
				-70,
				135
			],
			[
				-51,
				635
			],
			[
				-237,
				-66
			]
		],
		[
			[
				30513,
				15515
			],
			[
				-367,
				-103
			],
			[
				-102,
				172
			],
			[
				-77,
				-43
			],
			[
				-115,
				52
			],
			[
				28,
				176
			],
			[
				-156,
				114
			],
			[
				-61,
				-42
			]
		],
		[
			[
				29663,
				15841
			],
			[
				48,
				-578
			],
			[
				48,
				-105
			],
			[
				-23,
				-203
			],
			[
				-136,
				-41
			],
			[
				16,
				-163
			],
			[
				-189,
				-57
			],
			[
				52,
				-505
			],
			[
				-394,
				-110
			],
			[
				135,
				-1293
			],
			[
				-381,
				-118
			],
			[
				109,
				-1169
			],
			[
				-82,
				-32
			],
			[
				-3,
				-407
			]
		],
		[
			[
				28863,
				11060
			],
			[
				50,
				-238
			],
			[
				-32,
				-236
			],
			[
				138,
				-73
			],
			[
				81,
				-498
			],
			[
				-23,
				-133
			],
			[
				166,
				-86
			]
		],
		[
			[
				59654,
				52540
			],
			[
				2,
				-392
			],
			[
				192,
				-4
			]
		],
		[
			[
				59848,
				52144
			],
			[
				380,
				6
			]
		],
		[
			[
				60228,
				52150
			],
			[
				5,
				674
			],
			[
				24,
				-1
			],
			[
				5,
				915
			]
		],
		[
			[
				60262,
				53738
			],
			[
				-383,
				8
			],
			[
				2,
				279
			]
		],
		[
			[
				59881,
				54025
			],
			[
				-192,
				2
			]
		],
		[
			[
				59689,
				54027
			],
			[
				-5,
				-1206
			],
			[
				-32,
				0
			],
			[
				2,
				-281
			]
		],
		[
			[
				82378,
				54815
			],
			[
				-7,
				-78
			]
		],
		[
			[
				82371,
				54737
			],
			[
				735,
				-193
			]
		],
		[
			[
				83106,
				54544
			],
			[
				79,
				942
			]
		],
		[
			[
				83185,
				55486
			],
			[
				-301,
				24
			],
			[
				5,
				116
			],
			[
				-192,
				55
			],
			[
				-120,
				126
			]
		],
		[
			[
				82577,
				55807
			],
			[
				-154,
				-306
			],
			[
				-51,
				77
			]
		],
		[
			[
				82372,
				55578
			],
			[
				-52,
				-165
			],
			[
				119,
				-206
			],
			[
				-61,
				-392
			]
		],
		[
			[
				51729,
				14717
			],
			[
				155,
				5
			]
		],
		[
			[
				51884,
				14722
			],
			[
				621,
				20
			]
		],
		[
			[
				52505,
				14742
			],
			[
				-15,
				1318
			],
			[
				35,
				2
			],
			[
				-3,
				325
			]
		],
		[
			[
				52522,
				16387
			],
			[
				-388,
				-15
			]
		],
		[
			[
				52134,
				16372
			],
			[
				-389,
				-14
			]
		],
		[
			[
				51745,
				16358
			],
			[
				5,
				-325
			],
			[
				-40,
				-2
			],
			[
				19,
				-1314
			]
		],
		[
			[
				50929,
				64635
			],
			[
				767,
				25
			]
		],
		[
			[
				51696,
				64660
			],
			[
				192,
				7
			],
			[
				-5,
				671
			]
		],
		[
			[
				51883,
				65338
			],
			[
				-9,
				839
			]
		],
		[
			[
				51874,
				66177
			],
			[
				-1056,
				-38
			]
		],
		[
			[
				50818,
				66139
			],
			[
				6,
				-837
			]
		],
		[
			[
				50824,
				65302
			],
			[
				9,
				-671
			],
			[
				96,
				4
			]
		],
		[
			[
				48389,
				80589
			],
			[
				652,
				42
			]
		],
		[
			[
				49041,
				80631
			],
			[
				716,
				30
			]
		],
		[
			[
				49757,
				80661
			],
			[
				-15,
				1382
			]
		],
		[
			[
				49742,
				82043
			],
			[
				-641,
				-29
			]
		],
		[
			[
				49101,
				82014
			],
			[
				-735,
				-26
			],
			[
				11,
				-583
			]
		],
		[
			[
				48377,
				81405
			],
			[
				12,
				-816
			]
		],
		[
			[
				48064,
				87681
			],
			[
				1169,
				39
			]
		],
		[
			[
				49233,
				87720
			],
			[
				0,
				1
			]
		],
		[
			[
				49233,
				87721
			],
			[
				-28,
				1696
			],
			[
				-15,
				551
			]
		],
		[
			[
				49190,
				89968
			],
			[
				-1161,
				39
			],
			[
				4,
				-664
			]
		],
		[
			[
				48033,
				89343
			],
			[
				31,
				-1662
			]
		],
		[
			[
				85184,
				47878
			],
			[
				230,
				-898
			]
		],
		[
			[
				85414,
				46980
			],
			[
				460,
				249
			]
		],
		[
			[
				85874,
				47229
			],
			[
				-99,
				648
			]
		],
		[
			[
				85775,
				47877
			],
			[
				-114,
				265
			]
		],
		[
			[
				85661,
				48142
			],
			[
				-304,
				-78
			],
			[
				-110,
				-62
			],
			[
				-63,
				-124
			]
		],
		[
			[
				65473,
				25523
			],
			[
				979,
				-113
			],
			[
				14,
				336
			]
		],
		[
			[
				66466,
				25746
			],
			[
				-207,
				27
			],
			[
				55,
				1327
			]
		],
		[
			[
				66314,
				27100
			],
			[
				-234,
				33
			]
		],
		[
			[
				66080,
				27133
			],
			[
				-539,
				64
			]
		],
		[
			[
				65541,
				27197
			],
			[
				-68,
				-1674
			]
		],
		[
			[
				45111,
				50407
			],
			[
				723,
				64
			]
		],
		[
			[
				45873,
				50475
			],
			[
				-54,
				1678
			],
			[
				24,
				2
			],
			[
				-10,
				358
			]
		],
		[
			[
				45833,
				52513
			],
			[
				-765,
				-73
			]
		],
		[
			[
				45068,
				52440
			],
			[
				12,
				-352
			],
			[
				-27,
				-3
			],
			[
				58,
				-1678
			]
		],
		[
			[
				66521,
				73506
			],
			[
				765,
				-95
			]
		],
		[
			[
				67286,
				73411
			],
			[
				59,
				1337
			],
			[
				19,
				276
			]
		],
		[
			[
				67364,
				75024
			],
			[
				-159,
				39
			]
		],
		[
			[
				67205,
				75063
			],
			[
				-472,
				118
			]
		],
		[
			[
				66733,
				75181
			],
			[
				-38,
				-893
			],
			[
				-19,
				-127
			],
			[
				-128,
				15
			]
		],
		[
			[
				66548,
				74176
			],
			[
				-27,
				-670
			]
		],
		[
			[
				71212,
				41905
			],
			[
				639,
				-127
			]
		],
		[
			[
				71851,
				41778
			],
			[
				66,
				1056
			]
		],
		[
			[
				71917,
				42834
			],
			[
				-123,
				86
			]
		],
		[
			[
				71794,
				42920