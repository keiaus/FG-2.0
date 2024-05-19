import datetime

# consider the start date as 2021-february 1 st
currentDate = datetime.date.today()
 
# consider the end date as 2021-march 1 st
deadlineDate = datetime.date(2024, 6, 14)
 
# delta time
delta = datetime.timedelta(days=1)
dayLoop = 1
 
# iterate over range of dates
while (currentDate <= deadlineDate):
    dayLoop += 1
    currentDate += delta

print("DEADLINE IN", dayLoop, "DAYS")