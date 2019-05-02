const actualMoment = jest.requireActual('moment');

export { moment as default };

const moment = (timestamp = 0) => {
	return actualMoment(timestamp);
};