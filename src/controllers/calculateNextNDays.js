const calculateNextNDaysFactory = (Ndays) => {
	return (currentDay, WeekList) => {
		let resultList = [];
		for (let i = currentDay + 1; i <= currentDay + Ndays; i++) {
			const index = i < WeekList.length ? i : i % WeekList.length;
			resultList.push(WeekList[index]);
		}
		return resultList;
	};
};

export { calculateNextNDaysFactory };
