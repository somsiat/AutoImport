export const site = {
	name: 'AutoImport USA',
	legalName: 'AutoImport USA',
	tagline: 'Sprowadzamy samochody z USA - szybko i bezpiecznie',
	description:
		'Sprowadzamy samochody z aukcji Copart i IAAI. Transport, odprawa celna, akcyza i naprawa - pod klucz, ze stałą ceną ustaloną przed zakupem.',
	foundingYear: 2016,
	phone: '+48 000 000 000',
	phoneHref: 'tel:+48000000000',
	whatsappNumber: '48000000000',
	whatsappGroup: '',
	email: 'kontakt@przyklad.pl',
	address: 'Warszawa, Polska',
	hours: 'Pon.–Pt. 9:00–18:00, Sob. 10:00–14:00',
	nav: [
		{ label: 'O nas', href: '/o-nas' },
		{ label: 'Auta', href: '/auta' },
		{ label: 'Kontakt', href: '/kontakt' },
	],
};

export function whatsappHref(text) {
	const base = `https://wa.me/${site.whatsappNumber}`;
	return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function groupHref() {
	return site.whatsappGroup || whatsappHref('Cześć, chcę dołączyć do grupy z ofertami aut z USA.');
}
