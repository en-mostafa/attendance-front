'use client'
import { DefaultizedPieValueType } from '@mui/x-charts/models';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

interface Props {
    balance: number,
    credits: number,
    penalties: number,
    salary: number
}

export default function WalletChart({ fetchData }: { fetchData: Props }) {
    const total = fetchData.salary;
    const used = fetchData.balance;
    const percentUsed = (used / total) * 100;
    const percentLeft = 100 - percentUsed;

    const data = [
        { label: 'Group A', value: percentUsed, color: '#6366f1' },
        { label: 'Group B', value: percentLeft, color: '#93c5fd' },
    ];

    const sizing = {
        width: 200,
        height: 200,
        hideLegend: true,
    };
    const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

    const getArcLabel = (params: DefaultizedPieValueType) => {
        const percent = params.value / TOTAL;
        return `${(percent * 100).toFixed(0)}%`;
    };
    console.log(getArcLabel)
    return (
        <PieChart
            series={[
                {
                    innerRadius: 20,
                    outerRadius: 70,
                    data,
                    arcLabel: getArcLabel,
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontSize: 14,
                },
            }}
            {...sizing}
        />
    );
}
