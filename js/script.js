// Data BMI yang berisi status, penjelasan, dan penyakit terkait untuk berbagai kategori BMI
const dataBmi = {
	kurang: {
		status: "Kekurangan berat badan",
		penjelasan:
			"Berat badan Anda berada di bawah kisaran yang dianggap sehat. Ini mungkin menunjukkan bahwa Anda kekurangan nutrisi penting atau mengalami masalah kesehatan yang mempengaruhi berat badan Anda.",
		penyakit: [
			"Anemia",
			"Osteoporosis",
			"Sistem kekebalan tubuh yang lemah",
			"Gangguan pertumbuhan pada anak-anak dan remaja",
		],
	},
	normal: {
		status: "Normal",
		penjelasan:
			"Berat badan Anda berada dalam kisaran yang dianggap sehat dan ideal untuk tinggi badan Anda. Ini biasanya menunjukkan keseimbangan yang baik antara asupan nutrisi dan aktivitas fisik.",
		penyakit: [
			"Risiko penyakit kronis lebih rendah, tetapi tetap penting untuk menjaga gaya hidup sehat untuk menghindari masalah kesehatan seperti tekanan darah tinggi atau kolesterol tinggi.",
		],
	},
	berlebih: {
		status: "Berat Badan Berlebih",
		penjelasan:
			"Berat badan Anda berada di atas kisaran yang dianggap sehat untuk tinggi badan Anda. Ini menunjukkan bahwa Anda mungkin memiliki kelebihan lemak tubuh, yang dapat meningkatkan risiko masalah kesehatan.",
		penyakit: [
			"Hipertensi (tekanan darah tinggi)",
			"Diabetes tipe 2",
			"Penyakit jantung",
			"Masalah pernapasan, seperti sleep apnea",
		],
	},
	obesitas: {
		status: "Obesitas",
		penjelasan:
			"Berat badan Anda jauh di atas kisaran yang dianggap sehat untuk tinggi badan Anda. Ini menunjukkan bahwa Anda memiliki kelebihan lemak tubuh yang signifikan, yang dapat meningkatkan risiko serius terhadap kesehatan.",
		penyakit: [
			"Penyakit jantung dan pembuluh darah",
			"Diabetes tipe 2",
			"Stroke",
			"Osteoartritis",
		],
	},
};

// Mendapatkan elemen-elemen HTML yang diperlukan
const beratBadan = document.getElementById("beratBadan");
const usia = document.getElementById("usia");
const tinggiBadan = document.getElementById("tinggiBadan");
const pria = document.getElementById("pria");
const wanita = document.getElementById("wanita");
const skor = document.querySelector(".skor");
const statusBmi = document.querySelector(".status");
const penjelasan = document.querySelector(".penjelasan");
const listPenyakit = document.querySelector(".list-penyakit");
const reset = document.getElementById("reset");

// Fungsi untuk menghitung BMI dan menampilkan hasilnya
function hitungBmi() {
	listPenyakit.innerHTML = "";

	// Menghitung BMI
	let bmi =
		Number(beratBadan.value) /
		((Number(tinggiBadan.value) / 100) * (Number(tinggiBadan.value) / 100));

	// Menentukan kategori BMI dan menampilkan hasil
	if (bmi < 18.5) {
		skor.textContent = bmi.toFixed(1);
		statusBmi.textContent = dataBmi.kurang.status;
		penjelasan.textContent = dataBmi.kurang.penjelasan;
		for (kurang of dataBmi.kurang.penyakit) {
			const penyakit = document.createElement("li");
			penyakit.textContent = kurang;
			listPenyakit.appendChild(penyakit);
		}
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		skor.textContent = bmi.toFixed(1);
		statusBmi.textContent = dataBmi.normal.status;
		penjelasan.textContent = dataBmi.normal.penjelasan;
		for (normal of dataBmi.normal.penyakit) {
			const penyakit = document.createElement("li");
			penyakit.textContent = normal;
			listPenyakit.appendChild(penyakit);
		}
	} else if (bmi >= 25 && bmi <= 29.9) {
		skor.textContent = bmi.toFixed(1);
		statusBmi.textContent = dataBmi.berlebih.status;
		penjelasan.textContent = dataBmi.berlebih.penjelasan;
		for (berlebih of dataBmi.berlebih.penyakit) {
			const penyakit = document.createElement("li");
			penyakit.textContent = berlebih;
			listPenyakit.appendChild(penyakit);
		}
	} else if (bmi >= 30) {
		skor.textContent = bmi.toFixed(1);
		statusBmi.textContent = dataBmi.obesitas.status;
		penjelasan.textContent = dataBmi.obesitas.penjelasan;
		for (obesitas of dataBmi.obesitas.penyakit) {
			const penyakit = document.createElement("li");
			penyakit.textContent = obesitas;
			listPenyakit.appendChild(penyakit);
		}
	}
	resetForm();
	return false;
}

// Fungsi untuk mereset form input
function resetForm() {
	beratBadan.value = "";
	usia.value = "";
	tinggiBadan.value = "";
	pria.checked = false;
	wanita.checked = false;
}

// Fungsi untuk mereset hasil BMI yang ditampilkan
function resetHasil() {
	resetForm();
	skor.textContent = "0.0";
	statusBmi.textContent = "Hitung BMI";
	listPenyakit.innerHTML = "";
}
