let selectedTime = 0;

function setTime(value) {
    selectedTime = value;
    console.log(`Selected time is: ${selectedTime}`);
}

function calculate() {
    // 入力フィールドから値を取得
    let iniGauge = parseFloat(document.getElementById('ini_gauge').value);
    let riseSpeed = parseFloat(document.getElementById('rise_speed').value);

    if (selectedTime === 0) {
        alert('時間を選択してください。');
        return;
    }

    // 計算式を実行
    let result = selectedTime / (1 + riseSpeed / 100) * (1 - iniGauge / 100);

    // 結果を表示
    document.getElementById('result').textContent = result.toFixed(2); // 小数点以下2桁まで表示
}
