document.addEventListener("DOMContentLoaded", () => {
    //API URL
    const url = "https://staging-server.sandclock.org/graphql";
    // const url = "https://backend.sandclock.org/graphql";
  
    queryFetch(`
            {
              strategy(id: "amethyst") {
                id
                tvl
                apy
                allYield
                last30daysYield
                metavaults
              }
            }
        `).then((data) => {
      //storing the elements that need to be changed
      const tvl = document.querySelector("[data-api='tvl']"),
        metavaults = document.querySelector("[data-api='metavaults']"),
        yieldText = document.querySelector("[data-api='yield']"),
        apy = document.querySelector("[data-api='apy']");
  
      //store strategy info
      const strategy = data.data.strategy;
      // console.log(ethers.utils.formatUnits(tvlData, 2));
  
      //set tvl
      if (strategy.tvl) {
        tvl.innerText = "$" + parseInt(strategy.tvl).toLocaleString("en-US");
      }
  
      //set all yield
      if (strategy.allYield) {
        yieldText.innerText =
          "$" + parseInt(strategy.allYield).toLocaleString("en-US");
      }
  
      //set apy
      if (strategy.apy) {
        apy.innerText = strategy.apy + "%";
      } else {
        apy.innerText = "—";
      }
  
      //set metavults
      if (strategy.metavaults) {
        metavaults.innerText = parseInt(strategy.metavaults).toLocaleString(
          "en-US"
        );
      }
    });
  
    //function to fetch data from url and returns the data
    function queryFetch(query) {
      return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: query
        })
      }).then((res) => res.json());
    }
  });
  