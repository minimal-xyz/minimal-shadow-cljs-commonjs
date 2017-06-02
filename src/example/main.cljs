
(ns example.main)

; ^:export to keep this function during dead code elimination
(defn ^:export main []
  (println "App loaded!"))
