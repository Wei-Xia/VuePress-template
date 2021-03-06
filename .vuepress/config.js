module.exports = {
	base: '/vuepress-template/',
	title: 'VuePress Template',
	dest: './docs',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Single Page', link: '/singlePage/' },
			{ text: 'Multiple Pages', link: '/multiplePages/' },
			{
				text: 'Dropdown Menus',
				items: [
					{ text: 'Single Page', link: '/singlePage/' },
					{ text: 'Single Page', link: '/singlePage/' },
					{ text: 'Single Page', link: '/singlePage/' }
				]
			}
		],
		sidebar: {
			'/multiplePages/': genSidebarConfig('Multiple Pages')
		},
		lastUpdated: 'Last Updated',
		displayAllHeaders: true,
		repo: 'Wei-Xia/vuepress-template',
		repoLabel: 'Contribute!',
		docsRepo: 'Wei-Xia/vuepress-template/',
		docsBranch: 'master',
		editLinks: true,
		editLinkText: 'Help us improve this page!',
		serviceWorker: {
			updatePopup: true,
			updatePopup: {
				message: 'New content is available.',
				buttonText: 'Refresh'
			}
		}
	}
};

function genSidebarConfig(title) {
	return [
		{
			title,
			collapsable: false,
			children: ['', 'pageOne', 'pageTwo']
		}
	];
}
