import { GitHub, Twitter, Facebook, LinkedIn, Instagram } from '@mui/icons-material';
import { FaReact, FaJs, FaHtml5, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiAutodesk, SiDotnet } from 'react-icons/si';

export const personalInfo = {
    name: "Emin Latif Bozkurt",
    title: "Bilgisayar Mühendisliği Öğrencisi",
    bio: "Merhaba, ben Emin Latif Bozkurt. Fırat Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim. Teknolojiye ve yazılıma olan tutkumla, kendimi sürekli geliştirmeyi ve yeni şeyler öğrenmeyi hedefliyorum. Henüz iş deneyimim bulunmasa da, geliştirdiğim projelerle teorik bilgilerimi pratiğe döküyorum. Yazılım dünyasındaki gelişmeleri yakından takip ediyor ve her geçen gün yeteneklerime bir yenisini eklemek için çalışıyorum. Boş zamanlarımda da kod yazarak ve araştırma yaparak kendimi dinç tutuyorum.",
    email: "eminlatifbozkurt@gmail.com", // Assuming standard email pattern or will be replaced by form
};

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/EminLatifBozkurt', icon: GitHub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/emin-latif-bozkurt-040bab295/', icon: LinkedIn },
    { name: 'Instagram', url: 'https://www.instagram.com/b.eminltf_01/', icon: Instagram },
    { name: 'Facebook', url: 'https://www.facebook.com/emin.bozkurt.5036459/', icon: Facebook },
    { name: 'Twitter', url: 'https://x.com/beminltf_01', icon: Twitter },
];

export const skills = [
    { name: 'React', url: 'https://reactjs.org', icon: FaReact },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: FaJs },
    { name: 'HTML/CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: FaHtml5 },
    { name: 'Node.js', url: 'https://nodejs.org', icon: FaNodeJs },
    { name: 'Python', url: 'https://www.python.org', icon: FaPython },
    { name: 'SQL', url: 'https://www.w3schools.com/sql', icon: FaDatabase },
    { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp', icon: SiDotnet },
    { name: 'Fusion 360', url: 'https://www.autodesk.com/products/fusion-360', icon: SiAutodesk }
];

export const projects = [
    {
        title: 'Oyun Satış Uygulaması',
        description: 'Mini bir oyun satın alma uygulaması',
        github: 'https://github.com/EminLatifBozkurt/oyun-sat-uygulamas-',
        image: '/images/oyun.png',
        technologies: ['PyQt5', 'SQLite', 'CSS', 'Python'],
    },
    {
        title: 'Basit Word',
        description: 'Word uygulamasının basitleştirilmiş hali',
        github: 'https://github.com/EminLatifBozkurt/Basit-word-uygulamas-',
        image: '/images/mini word.png',
        technologies: ['PyQt5', 'Python'],
    },
    {
        title: 'Soru Bankası',
        description: 'Soru bankası hazırlamak için basit bir proje',
        github: 'https://github.com/EminLatifBozkurt/Soru-Bankas-',
        image: '/images/sorubankası.png',
        technologies: ['PyQt5', 'Python', 'QTDesigner'],
    },
];
