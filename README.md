# teamtrees-api
This teamtrees api will give you information about how many trees, last donator and top donator feel free to give suggestions

# Example response
```json
{
  "total_trees": "15000000",
  "precentage_done": "75",
  "time_remaining_milliseconds": 4971601168,
  "time_remaining": {
    "days": 60,
    "hours": 12,
    "minutes": 6,
    "seconds": 2
  },
  "last_donator": {
    "name": "Elaine and Dan Jemuel",
    "trees": 7,
    "timestamp": 1572865185080,
    "message": "Love from the Philippines"
  },
  "top_donator": {
    "name": "Tobi Lutke",
    "trees": 1000001,
    "timestamp": 1572469200000,
    "message": "For the Lorax"
  }
}
```

The "time_remaining" object shows detailed info about how long will it take until 2020.
The "message" property may be null if the donated user didn't provide a message.
