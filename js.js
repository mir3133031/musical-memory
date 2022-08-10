let bank = [
    {
        name: "uztelecom",
        budget: 200000,
        tax: 12,
        expensesPerYear: [
            {
                title: "rent",
                total: 13000,
            },
            {
                title: "salaries",
                total: 85000,
            },
            {
                title: "furniture",
                total: 15000,
            },
        ],
    },
    {
        name: "artel",
        budget: 500000,
        tax: 12,
        expensesPerYear: [{
            title: "rent",
            total: 15000,
        },
        {
            title: "salaries",
            total: 150000,
        },
        {
            title: "furniture",
            total: 25000,
        },
        ],
    },
    {
        name: "gm",
        budget: 1000000,
        tax: 12,
        expensesPerYear: [{
            title: "rent",
            total: 30000,
        },
        {
            title: "salaries",
            total: 350000,
        },
        {
            title: "furniture",
            total: 90000,
        }
        ]
    }

]
let jim = []
let forMe = []
for (let item of bank) {
    item.expensesPerManth = item.expensesPerYear.reduce((a, b) => {
        return a + b.total
    }, 0) / 12
    item.expensesPerManth = Math.floor(item.expensesPerManth)
    jim.push(item.expensesPerManth)
    item.allTotal = item.expensesPerManth / 100 * 12
    // 2
    item.taxPaid = item.budget / 100 * 12
    item.allTotal = Math.floor(item.allTotal)
    forMe.push(item.taxPaid)

}
let taxMax = Math.max(...forMe)
let taxMin = Math.min(...forMe)
taxMax = bank.find(item => item.taxPaid === taxMax)
taxMin = bank.find(item => item.taxPaid === taxMin)


console.log(taxMax, taxMin);
console.log(bank);
