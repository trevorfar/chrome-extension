# Additional clean files
cmake_minimum_required(VERSION 3.16)

if("${CONFIG}" STREQUAL "" OR "${CONFIG}" STREQUAL "Debug")
  file(REMOVE_RECURSE
  "CMakeFiles\\ELEC376_PROJECT_autogen.dir\\AutogenUsed.txt"
  "CMakeFiles\\ELEC376_PROJECT_autogen.dir\\ParseCache.txt"
  "ELEC376_PROJECT_autogen"
  )
endif()
