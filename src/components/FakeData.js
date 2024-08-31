
export const lineChartData ={
    labels: [
        "6/30/2024 - 7/6/2024",
        "7/7/2024 - 7/13/2024",
        "7/21/2024 - 7/27/2024",
    ],
    datasets: [
        {
            label: "orders",
            
            // data: ["0k", "0.4k", "0.8k", "1.2k", "1.6k"],
            data: [1.6, 0.8, 0.8],
            borderColor: "#7cb342",
            backgroundColor: "#7cb342",
            yAxisID: 'y',
            tension: 0.1,
        },
        {
            label: 'sales',
            data: [1.4, 0.8, 0.5],
            borderColor: "#4dd0e1",
            backgroundColor: "#4dd0e1",
           
            tension: 0.2,
          }
    ],
}; 


export const PieChartData = {
    labels:[
        "WooCommerce Store",
        "Shopify Store"
    ],
    datasets:[
        {
            label : "WooCommerce Store",
            data:[120,80],
            backgroundColor: ["#ff8080", "#d1dae4"],
            hoverOffset: 4,
        },
    ],
};