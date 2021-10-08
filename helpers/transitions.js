export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelay1 = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.7, delay: 0.1,  ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelay2 = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.7, delay: 0.2, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelay3 = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.7, delay: 0.3, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] }
	}
}

export const imageScale = {
	initial: { scale: 1.1 },
  enter: { 
    scale: 1,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 1.1,
		transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] }
	}
}