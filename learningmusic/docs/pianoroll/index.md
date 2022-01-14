# SimplePianoRoll

Параметры:
* material - указывает тип проигрывателя звуков, доступные значения:
  * "tonal" - пианино
  * "drums" - ударные
* tempo - темп в BPM (float)
* onPlay - ???
  * "takeover" - ?
  * "join" - ?
* targetState - целевой State
* defaultState - State по умолчанию
* lanes - массив Lane
* beats - количество битов в Loop-е (int кратный 4-м)
* gridSize - размер сетки (int)
* allowResize - ??? (bool)
* disableExport - "yes"/"no"
* instrument - описание инструмента (Instrument)
* showTempoSlider - скрывает контролл управления темпом при значении "no"
* showRootChooser - показывает выбора базовой ноты при значении "yes"
* showScaleChooser - позволяет изменять длину нот при значении "yes"
* defaultScale - ???
* defaultRoot - ???
* defaultOctave - ???
* defaultOctaveCount - ???
* tip - ???
* tips - тексты всплывашек
* highlightedLanes -  массив номеров подсвеченных линий
* lang - тексты кнопок

## State

Параметры:
* events - массив Event-ов
* lanes - массив Lane
* gridSize
* beats
* nextId - ???
* page - ???
* tempo 
* scaleName - ???
* rootName - ???
* version - ???

### Event

* id - ID (int)
* start - (float)
* duration - (float)
* lane - (int)

##Lane

Параметры:
* name - название (string)
* color - цвет подсветки строки (string hex color code - например "#757575"/"none")
* midi - ?
* freq - частота звука (float)

## Instrument

* livePreset - название пресета для Ableton Live (string)
* fadeout - настройки Fadeout
* samples - массив Sample-ов

### Fadeout

* duration - длительность в секундах? (float)
* offset - ???

### Sample

* midi - код миди (int)
* path - путь до файла сэмпла (string)
