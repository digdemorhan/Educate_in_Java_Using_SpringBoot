document.addEventListener('DOMContentLoaded', () => {
    // Kategorileri ve kursları tutan nesne
    const categories = {
        default: [

        ],       
        category1: [
            { title: 'R İle Veri Bilimi',
            description: 'Yirmi birinci yüzyılın en kârlı işi olan veri bilimi için gereken her beceriyi kapsayan Educateteki R ile Veri Bilimi ve Makine Öğrenimi sınıfına hoş geldiniz! Bir iş uzmanının yardımıyla, yeni başlayanlardan yetenekli veri bilimcilerine ilerlemek için gerekli tüm becerileri pekiştirme şansına sahip olacaksınız.Yeni başlayanları ileri bir seviyeye taşımayı amaçlayan kurs müfredatı, veri bilimi ve makine öğrenimi konusunda teorik eğitim vermekten ziyade mevcut kurumsal dünyadan gerçek senaryolara odaklanmaktadır.', 
            price: 'Ücretsiz', pageUrl: 'icerik.html' },
            { title: 'Python İle Makine Öğrenmesi', description: 'Bu kursta amaçlanan, hiç bilmeyen ve yeni başlayan birisini makine öğrenmesi konusunda uzman seviyesine çıkarmaktır. Adım adım, makine öğrenmesi dünyasına giriş yapılacak ve her bölümde farklı yetenekler kazandırılarak makine öğrenmesi ve bir alt çalışma alanı olarak görülebilecek veri bilimi konularındaki gerçek uygulamalar hakkında fikir verilecektir. Ayrıca güncel ve gözde konular olan derin öğrenme veya arttırımlı öğrenme gibi konulara da giriş yapılacak ve bu kavramların kullanımları ve uygulamaları örnekler üzerinden gösterilecektir. ', 
            price: '239.99TRY', pageUrl: 'ücretli.html' },
            { title: 'A-Z™|Derin Öğrenme', description: 'Tüm bu yöntemleri Python programlama dili kullanarak TensorFlow ve gerisinde çalışan Keras kütüphanelerinde uygulayacaksınız.apay zeka ve derin öğrenme çoklu endüstrileri geliştirmekte ve dönüştürmektedir. Bu dersi tamamladıktan sonra, bunu işinize uygulamak için yaratıcı yollar bulabilirsiniz.', 
            price: 'Ücretsiz', pageUrl: 'icerik3.html'},
            { title: 'Python Dilinde OpenCV ile Görüntü İşleme', description: 'Bu görüntü işleme kursu, python-opencv dilinde yeni başlayandan profesyonele gitmek amacıyla tasarlanmıştır. OpenCV hakkında bilinmesi gereken her şey bu kursta öğretilmektedir. Önceden bilgi sahibi olmayan ve yeni başlayanlar için mükemmel bir python-opencv öğreticisidir.', 
            price: 'Ücretsiz', pageUrl: 'icerik4.html' },
            { title: 'PyTorch ile Derin Öğrenme', description: 'Veri bilimine meraklı, başlangıç seviyesindeki Python geliştiricileri için tasarlanmış bir kurstur.', 
            price: 'Ücretsiz', pageUrl: 'icerik5.html' },
        ],
        category2: [
            { title: 'Sıfırdan Adım Adım HTML', description: 'Web geliştirme dünyasına adım atmak istiyor musunuz? O zaman HTML ile başlamak harika bir seçenek! HTML (Hypertext Markup Language), web sayfalarını oluşturmak için temel bir yapı taşıdır ve her web geliştiricinin bilmesi gereken bir dildir. Eğer bu heyecan verici dünyada yolculuğunuza başlamak istiyorsanız, HTML Temel Kursu tam size göre!', 
            price: 'Ücretsiz', pageUrl: 'icerik6.html' },
            { title: 'JavaScript Programlama Eğitimi', description: 'Bu kurs Javascript"i A"dan Z"ye öğretecek şekilde tasarlanmıştır. Javascripti kullanarak profesyonel dinamik web siteleri geliştirmenin inceliklerini öğreneceksiniz. ', 
            price: '129.99 TRY', pageUrl: 'ücretli2.html' },
            { title: 'A"dan Z"ye CSS', description: 'Web dünyasında görsel çekiciliği yakalamak ve kullanıcı deneyimini geliştirmek için CSS"i öğrenmeye hazır mısınız? CSS (Cascading Style Sheets), web sitelerinin görünümünü özelleştirmenin ve tasarlamanın temel taşıdır. Şimdi, CSS ile profesyonel web tasarımını anlamak ve uygulamak için mükemmel bir fırsat sunuyoruz.', 
            price: 'Ücretsiz', pageUrl: 'icerik8.html' },
            { title: 'ReactJS Hakkında Her Şey', description: 'React, programcıların aynı anda birden fazla platformda JavaScript"te gerçek yerel uygulamalar yazmalarını sağlayarak iOS ve Android için ayrı kod yazma ihtiyacını ortadan kaldırıyor. React ayrıca, çerçeveyi verimliliği düşünen geliştiriciler arasında favori kılan "hot reloading" (sıcak yeniden yükleme) gibi özellikler de içeriyor.', 
            price: 'Ücretsiz', pageUrl: 'icerik9.html' },
            { title: 'VSCode İle Bootstrap', description: 'Bu heyecan verici kurs, web tasarım dünyasına hızlı ve etkili bir giriş yapmak isteyenler için tasarlanmıştır. Bootstrap, modern ve kullanıcı dostu web siteleri oluşturmanın en güçlü araçlarından biri olarak kabul edilir. Bu kurs, web tasarımının temellerinden başlayarak, başlangıçtan itibaren güzel ve duyarlı web siteleri oluşturmayı öğretmektedir.', 
            price: 'Ücretsiz', pageUrl: 'icerik10.html' },
        ],
        category3: [
            { title: 'Swift Başlangıç', description: 'Bu kurs, Swift programlama dilinin temellerini adım adım öğrenmenize yardımcı olacak. İster kodlama dünyasına yeni adım atıyor olun, ister başka bir dilde deneyiminiz olsun, bu kurs size Swift"i öğrenmeniz ve etkili bir şekilde kullanmanız için gerekli bilgiyi sunacak.', 
            price: 'Ücretsiz', pageUrl: 'icerik11.html' },
            { title: 'SwiftUI ile iOS Programlama', description: 'SwiftUI ile iOS Programlama Kursu, mobil uygulama geliştirme dünyasına giriş yapmak veya becerilerinizi daha da geliştirmek isteyen herkes için mükemmel bir başlangıç noktasıdır. Bu kurs, Apple"ın güçlü ve kullanıcı dostu SwiftUI çerçevesi ile iOS uygulamaları geliştirmeyi öğrenmek isteyenler için tasarlanmıştır.', 
            price: 'Ücretsiz', pageUrl: 'icerik12.html' },
            { title: 'Flutter Dersleri', description: 'Flutter, modern ve etkileyici mobil uygulamalar geliştirmek isteyenler için mükemmel bir çözümdür. Flutter Dersleri kursu, Flutter"ın temellerinden başlayarak, ileri düzey konulara kadar kapsamlı bir eğitim sunmaktadır. Bu kurs, hem yeni başlayanlar hem de deneyimli geliştiriciler için tasarlanmıştır ve mobil uygulama geliştirme konusundaki becerilerinizi hızla geliştirmenize yardımcı olacaktır.', 
            price: '169.99 TRY', pageUrl: 'ücretli3.html' },
            { title: 'Android Studio - Kotlin Dersleri', description: '"Android Studio - Kotlin Dersleri" kursu, mobil uygulama geliştirme konusunda temel ve ileri düzeyde bilgi sahibi olmak isteyenler için mükemmel bir başlangıç ​​noktasıdır. Bu kurs, Android uygulama geliştirmenin temellerini öğrenmek ve Kotlin programlama dilini kullanarak güçlü ve etkili uygulamalar oluşturmayı hedefler.', 
            price: 'Ücretsiz', pageUrl: 'icerik14.html' },
            { title: 'React Native Öğreniyoruz', description: 'React Native ile Mobil Uygulama Geliştirme kursu, mobil uygulama geliştirmeye yeni başlayanlar ve deneyimli geliştiriciler için mükemmel bir başlangıç noktasıdır. Bu kurs, Facebook tarafından geliştirilen React ve JavaScript temelinde çalışan bir çerçeve olan React Native"i kullanarak mobil uygulama geliştirmeyi öğrenmek isteyen herkes için tasarlanmıştır.', 
            price: 'Ücretsiz', pageUrl: 'icerik15.html' },
        ],
        category4: [
            { title: '0"dan Yazılım : Java', description: 'Java, dünyanın en popüler programlama dillerinden biridir ve yazılım geliştirme dünyasında geniş bir kullanım alanına sahiptir. Java, kullanımı kolay, güvenilir ve platformdan bağımsızdır. Eğer yazılım dünyasına adım atmak veya mevcut becerilerinizi geliştirmek istiyorsanız, Java programlama dilini öğrenmek için harika bir başlangıç noktasıdır.', 
            price: 'Ücretsiz', pageUrl: 'icerik16.html' },
            { title: 'C# Eğitim Serisi', description: 'C# Eğitim Serisi kursu, C# programlama dilini temelinden başlayarak derinlemesine öğrenmek isteyenler için mükemmel bir fırsat sunar. Bu kurs, yazılım geliştirme dünyasına adım atmak isteyenlerden deneyimli geliştiricilere kadar her seviyeden katılımcıya hitap ediyor.', 
            price: 'Ücretsiz', pageUrl: 'icerik17.html' },
            { title: 'Sıfırdan Zirveye C++', description: 'C++ programlama dilini öğrenmek istiyor musunuz? Sıfırdan başlayarak C++"ı öğrenmek ve uygulama geliştirmenin temellerini atmaya hazır mısınız? O zaman "Sıfırdan Zirveye C++" kursu tam size göre!', 
            price: 'Ücretsiz', pageUrl: 'icerik18.html' },
            { title: 'C Programlamaya Giriş', description: 'Bu kurs, C programlamaya adım atmak isteyenler için mükemmel bir başlangıç ​​noktasıdır. C dili, bilgisayar programlamasının temellerini anlamanıza ve daha karmaşık programlama dilleri öğrenmeye hazırlar. ', 
            price: 'Ücretsiz', pageUrl: 'icerik19.html' },
            { title: 'Python İle Kodluyoruz', description: 'Python, programlamaya yeni başlayanlar için mükemmel bir dil olarak kabul edilir ve "Python İle Kodluyoruz" kursu bu dilin temellerini size öğretmek için ideal bir seçenektir. Bu kurs, yazılım dünyasına adım atmak veya programlamayı öğrenmek isteyen herkes için mükemmel bir başlangıç noktasıdır.', 
            price: '269.99TRY', pageUrl: 'ücretli4.html' },
        ],
    };

    const categorySelect = document.getElementById('category-select');
    const courseList = document.getElementById('course-list');
    const courseDetails = document.getElementById('course-details');

    // Başlangıçta seçili kategori ve kursları boş bırak
    categorySelect.selectedIndex = 0;
    courseList.innerHTML = '';
    courseDetails.innerHTML = '';

    // Kategori değiştikçe kursları güncelle
    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        const selectedCourses = categories[selectedCategory];
        updateCourseList(selectedCourses);
    });

    // Kurs listesini güncelle
    function updateCourseList(courses) {
        courseList.innerHTML = '';
        courses.forEach((course, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="#" data-course-index="${index}">${course.title}</a>`;
            courseList.appendChild(listItem);
        });
        // Kurs listesi güncellendiğinde kurs ayrıntılarını temizle
        courseDetails.innerHTML = '';
    }

    // Kursa tıklanınca ayrıntıları göster
    courseList.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const courseIndex = parseInt(e.target.getAttribute('data-course-index'));
            const selectedCategory = categorySelect.value;
            const selectedCourse = categories[selectedCategory][courseIndex];
            displayCourseDetails(selectedCourse);
        }
    });

    // Kurs ayrıntılarını göster
    function displayCourseDetails(course) {
        courseDetails.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <p>Fiyat: ${course.price}</p>
            <p>Video: <a href="${course.videoUrl}" target="_blank">Video Linki</a></p>
        `;
    }

    //YENİ
    function displayCourseDetails(course) {
        courseDetails.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <p>Fiyat: ${course.price}</p>
            <p><a href="${course.pageUrl}" target="_blank">Daha fazla bilgi için tıklayın</a></p>
        `;
    }
    
    

    courseList.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName === 'A') {
            const courseIndex = parseInt(e.target.getAttribute('data-course-index'));
            const selectedCategory = categorySelect.value;
            const selectedCourse = categories[selectedCategory][courseIndex];
            // Kullanıcıyı kurs sayfasına yönlendir
            displayCourseDetails(selectedCourse);
        }
    });
    
    

    // Sayfa yüklendiğinde kategori seçimi işlemini tetikle
    const initialCategory = categorySelect.value;
    const initialCourses = categories[initialCategory];
    updateCourseList(initialCourses);
})


document.addEventListener('DOMContentLoaded', () => {
    // Kategorileri ve kursları tutan nesne
    const categories = {
        // Kategorilere ait kurslar burada tanımlanır
    };

    const categorySelect = document.getElementById('category-select');
    const courseCarousel = document.getElementById('course-carousel');
    const courseDetails = document.getElementById('course-details');

    // Kategori değiştikçe kursları güncelle
    categorySelect.addEventListener('change', () => {
        const selectedCategory = categorySelect.value;
        const selectedCourses = categories[selectedCategory];
        updateCourseCarousel(selectedCourses);
    });

    // Kurs kartları carousel'ını güncelle
    function updateCourseCarousel(courses) {
        courseCarousel.innerHTML = '';
        courses.forEach((course) => {
            const card = document.createElement('div');
            card.classList.add('course-card');
            card.innerHTML = `
                <img src="${course.imageUrl}" alt="${course.title}">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <p>Fiyat: ${course.price}</p>
            `;
            card.addEventListener('click', () => {
                displayCourseDetails(course);
            });
            courseCarousel.appendChild(card);
        });
    }

    // Kurs ayrıntılarını göster
    function displayCourseDetails(course) {
        courseDetails.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <p>Fiyat: ${course.price}</p>
            <p>Video: <a href="${course.videoUrl}" target="_blank">Video Linki</a></p>
        `;
    }

    // Başlangıçta ilk kategoriye ait kursları göster
    const initialCategory = categorySelect.value;
    const initialCourses = categories[initialCategory];
    updateCourseCarousel(initialCourses);
});
