import { downLoadFile } from '@/api/index'

export function downloadFileFun(fileid){
	downLoadFile(fileid)
		.then(response =>{
			const url = window.URL.createObjectURL(new Blob([response.data]))
			const link = document.createElement('a')
			let fname = 'file.pdf'
			link.href = url
			link.setAttribute('download',fname);
			document.body.appendChild(link)
			link.click()
		})
		.catch(err => {
			console.log(err)
		})
}