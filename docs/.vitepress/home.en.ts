import { home } from './home'
export const englishHome = {
 ...home,
 eyebrow: 'Civil Service Exam Assistant · Study resources',
 title: 'Civil Service Exam Assistant\nYour study resource library',
 lead: 'Explore application guides, aptitude tests, essays and interviews in one searchable, regularly updated library.',
 primary: {text:'Start studying',link:'/en/guide/'}, secondary:{text:'Browse resources',link:'/en/kb/'},
 notice:{text:'2027 national exam registration closes on October 24 at 18:00',link:'/en/guide/2027-guokao-gonggao'},
 modes: [
 {tag:'01 · Application',title:'From announcement to application',desc:'Understand eligibility, role selection, registration and key dates.',link:'/en/guide/',cta:'Read the guide'},
 {tag:'02 · Aptitude test',title:'Question types and practice',desc:'Explore core question types, techniques and review methods.',link:'/en/xingce/',cta:'Explore aptitude tests'},
 {tag:'03 · Essay and interview',title:'Writing and speaking',desc:'Study essay structures, examples and interview practice.',link:'/en/shenlun/',cta:'Explore the topic'},
 {tag:'04 · Resources',title:'Past papers and experience',desc:'Find past papers, notes, common questions and study experience.',link:'/en/kb/',cta:'Browse resources'},
 {tag:'05 · Shandong exam',title:'Local exams and role selection',desc:'Explore the 2027 Shandong exam, eligibility and local knowledge.',link:'/en/shandong/',cta:'Explore Shandong'},
 {tag:'06 · Revision',title:'2026 current affairs notes',desc:'Review public activities, government reports and political theory.',link:'/en/sprint/',cta:'Start revising'}],
 features:[
 {icon:'layout',title:'Organized by stage',desc:'Find resources for applications, written exams and interviews.'},
 {icon:'list',title:'Clear navigation',desc:'Use titles, summaries and contents to find the right material.'},
 {icon:'sparkles',title:'AI friendly',desc:'Markdown copies and llms.txt support summaries and questions.'},
 {icon:'search',title:'Local search',desc:'Search the site without signing in or using an external service.'},
 {icon:'rocket',title:'Regular updates',desc:'Study resources are maintained and published as they develop.'},
 {icon:'code',title:'Lightweight and open source',desc:'A static site built with VitePress for straightforward maintenance.'}],
 steps:[{k:'Read the guide',v:'Understand the process, role selection and schedule'},{k:'Make a plan',v:'Plan weekly aptitude and essay practice'},{k:'Practice and review',v:'Keep a record of errors and useful techniques'},{k:'Prepare for interviews',v:'Develop answer structures and practise speaking'}]
}
