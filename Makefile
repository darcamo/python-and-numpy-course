

all: presentation.html

presentation.html: *.do.txt Makefile
	doconce format html presentation --pygments_html_style=monokai --keep_pygments_html_bg --encoding=utf-8 --labelcheck=on --css=css/mystyles.css
	doconce slides_html presentation reveal --html_slide_theme=night
