let isRunningJob = false;

export function setRunning(running) {
	isRunningJob = running;
}

export function isRunning() {
	return isRunningJob;
}
