import { DefaultizedPieValueType } from '@mui/x-charts/models';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
    { label: 'Group A', value: 400, color: '#6366f1' },
    { label: 'Group B', value: 300, color: '#93c5fd' },
];

const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL;
    return `${(percent * 100).toFixed(0)}%`;
};

export default function WalletChart() {
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
