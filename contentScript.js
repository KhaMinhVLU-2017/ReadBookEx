{
	let meoClass =null
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {

			SwitchColorMe(request.Color)
		})
	function SwitchColorMe(data) {
		let nodeParent = document.body.getElementsByTagName('*')
		switch(data) {
			case 'Dark':
  			//console.log('color dark is start')
  			removeColorClass(meoClass,nodeParent)
  			meoClass='ColorDark'
  			addColorClass(meoClass,nodeParent)
  			break
  			case 'Clear':
  			removeColorClass(meoClass,nodeParent)
  			break
  			case 'Judas':
  			removeColorClass(meoClass,nodeParent)
  			meoClass='ColorJudas'
  			addColorClass(meoClass,nodeParent)
  			break
  			case 'Romantic':
  			removeColorClass(meoClass,nodeParent)
  			meoClass='ColorRomantic'
  			addColorClass(meoClass,nodeParent)
  			break
  			default:
  			console.log('Default value')
  			break
  		}
  	}

  	function addColorClass(meoClass,nodeParent) {
  		document.body.classList.add(meoClass)
  		for(let item of nodeParent) {
  			item.classList.add(meoClass)
  		}
  	}

  	function removeColorClass(meoClass,nodeParent) {
  		document.body.classList.remove(meoClass)
  		for(let item of nodeParent) {
  			item.classList.remove(meoClass)
  		}
  	}
  	document.addEventListener('keyup', (e) => {
  		 if (e.ctrlKey && e.shiftKey && e.which == 89) {
  		 	let color = 'Dark'
  		 	SwitchColorMe(color)
  		 }
  	})
  }