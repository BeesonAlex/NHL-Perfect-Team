// Boston
axios
  .get("https://statsapi.web.nhl.com/api/v1/teams/6/roster")
  .then(function(response) {
    console.log(response);
  });

// Toronto
axios
  .get("https://statsapi.web.nhl.com/api/v1/teams/10/roster")
  .then(function(response) {
    console.log(response);
  });
