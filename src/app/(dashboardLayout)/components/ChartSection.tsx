"use client"
import React from 'react';
import ProductSellingChart from './ProductSellingChart';
import TotalEaringChart from './TotalEaringChart';

const ChartSection = () => {
    return (
        <div className="grid md:grid-cols-2 gap-5">
        <ProductSellingChart/>
        <TotalEaringChart/>
      </div>
    );
};

export default ChartSection;