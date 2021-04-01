;;
;; Connect-4 Gewinner feststellen
;; 17.03.2021
;;

;;
;; Hilfsfunktionen
;; zur Listen-Verarbeitung
;;

;; Mapping mit Index-Argument
;;
(defun map-list-index (fn lst &optional (n 0))
  (cond ((null lst) nil)
        (t (cons (funcall fn (car lst) n) (map-list-index fn (cdr lst) (1+ n))))))

;; Zeilen in einer Matrix stufenweise verschieben
;;
(defun shift-2d (mat fill &optional to-left)
  (let ((len (length mat)))
    (map-list-index
     (lambda (row i)
       (let ((dir (if to-left (cons (- len i 1) i) (cons i (- len i 1)))))
         (append (ntimes (car dir) fill) row (ntimes (cdr dir) fill))))
     mat)))

;; zur Erklärung von shift-2d
;;
; > (shift-2d board 'X)
; 
; (
; (0 0 0 0 0 0 0 X X X X X) 
; (X 0 0 0 0 1 0 0 X X X X) 
; (X X 1 0 0 1 0 0 0 X X X) 
; (X X X 1 0 1 0 1 0 0 X X) 
; (X X X X 1 0 0 0 0 1 0 X) 
; (X X X X X 1 0 1 1 0 0 0)
; )
; 
; > (shift-2d board 'X :left)
; 
; (
; (X X X X X 0 0 0 0 0 0 0) 
; (X X X X 0 0 0 0 1 0 0 X) 
; (X X X 1 0 0 1 0 0 0 X X) 
; (X X 1 0 1 0 1 0 0 X X X) 
; (X 1 0 0 0 0 1 0 X X X X) 
; (1 0 1 1 0 0 0 X X X X X)
; )

;; Spalten einer Matrix
;;
(defun columns (mat)
  (map-list-index 
   (lambda (col i) (mapcar (lambda (row) (nth i row)) mat))
   (car mat)))

;; Element n mal in eine Liste nehmen
;;
(defun ntimes (n el)
  (if (= n 0) nil
      (cons el (ntimes (- n 1) el))))

;; Feststellen ob eine Liste n aufeinanderfolgende el-Elemente hat
;;
(defun has-subseq (el n seq) 
  (search (ntimes n el) seq))

;; Standard partial-Funktion
;;
(defun partial (f &rest args)
  (lambda (&rest more-args)
    (apply f (append args more-args))))

;;
;; anwendungsspezifischer Teil
;;

;; Suche ob Spieler n gewonnen hat
;;
(defun connect4-winner (n board)
  (or (some (partial #'has-subseq n 4) board)
      (some (partial #'has-subseq n 4) (columns board))
      (some (partial #'has-subseq n 4) (columns (shift-2d board nil)))
      (some (partial #'has-subseq n 4) (columns (shift-2d board nil t)))))

;; zum Testen
;;
(setq board (quote (
(0 0 0 0 0 0 0)
(0 0 0 0 1 0 0)
(1 0 0 1 0 0 0)
(1 0 1 0 1 0 0)
(1 0 0 0 0 1 0)
(1 0 1 1 0 0 0)
)))

; (connect4-winner 1 board)

 