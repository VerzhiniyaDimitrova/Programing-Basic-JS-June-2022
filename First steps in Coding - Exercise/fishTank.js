function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let tankVolume = length * width * height;
    let tankVolumeLitters = tankVolume * 0.001;
    let tankVolumeWater = tankVolumeLitters * (tankVolumeLitters - percentage / 100);
    console.log(tankVolumeWater)
}

fishTank(["105", "77","89","18.5"]);
