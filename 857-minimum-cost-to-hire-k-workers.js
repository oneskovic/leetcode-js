/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} K
 * @return {number}
 */
const mincostToHireWorkers = function(quality, wage, K) {
    const workers = [], n = quality.length;
    for (let i = 0; i < n; i++) {
        workers[i] = { ratio: wage[i] / quality[i], quality: quality[i] }
    }
    workers.sort((a, b) => a.ratio - b.ratio);
    const heap = new MaxPriorityQueue({ priority: x => x.quality });
    let totalQuality = 0, res = Infinity;
    while (workers.length) {
        const curWorker = workers.shift();
        totalQuality += curWorker.quality;
        heap.enqueue(curWorker);
        
        if (heap.size() > K) {
            totalQuality -= heap.dequeue().element.quality;
        }
        if (heap.size() === K) {
            res = Math.min(res, curWorker.ratio * totalQuality)
        }
    }
    return res;
};



