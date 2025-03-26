import User from '../models/User.js';
import OverallStat from "../models/OverallStat.js";
import Transaction from "../models/Transaction.js";

export const getUser = async (req, res) => {
    try {
        const {id} = req.params;
        console.log(`id: ${id}`);
        const user = await User.findById(id).select("-password");
        res.status(200).json(user);

    } catch (error) {
        //TODO: Add error handling
        res.status(404).json({message: error.message});
    }
}

export const getDashboardStats = async (req, res) => {
    try {
        // hardcoded values
        const currentMonth = "November";
        const currentYear = 2021;
        const currentDay = "2021-11-15";

        //     Recent Transactions
        const transactions = await Transaction.find().limit(50).sort({createdOn: -1});

        //     Overall Stats
        const overallStats = await OverallStat.find({year: currentYear});

        const {
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,

        } = overallStats[0];

        const thisMonthStats = overallStats[0].monthlyData.find(({month}) => {
            return month === currentMonth;
        });

        const todayStats = overallStats[0].dailyData.find(({date}) => {
            return date === currentDay;
        });

        res.status(200).json({
            totalCustomers,
            yearlyTotalSoldUnits,
            yearlySalesTotal,
            monthlyData,
            salesByCategory,
            thisMonthStats,
            todayStats,
            transactions
        })
    } catch (error) {
        //TODO: Add error handling
        res.status(404).json({message: error.message});
    }
}