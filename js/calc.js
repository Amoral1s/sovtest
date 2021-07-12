jQuery(document).ready(function ($) {
  $('.add').on('click', function() {
    let newRow = document.createElement('div');
    const rowWrap = document.querySelector('.section-one');

    newRow.classList.add('calc-form-row');
    newRow.innerHTML = `
      <div class="calc-form-row-item">
        <label for="">Тип лампы:</label>
        <div>
          <select name="" id="">
            <option value="1" selected>Светодиодная</option>
            <option value="2">Светодиодная 0-10V</option>
            <option value="3">Светодиодная DALI</option>
          </select>
        </div>
      </div>
      <div class="calc-form-row-item">
        <label for="">Кол-во:</label>
        <div>
          <input type="text" value="1">
        </div>
      </div>
      <div class="calc-form-row-item">
        <label for="">Мощность W:</label>
        <div>
          <input type="text" value="100">
        </div>
      </div>
      <div class="calc-form-row-item btn-item">
        <div class="button alt-btn remove">
          Удалить
        </div>
      </div>`

    rowWrap.appendChild(newRow);

    const rowDelete = document.querySelectorAll('.section-one .calc-form-row');

    rowDelete.forEach((elem) => {
      const btn = elem.querySelector('.button');
      btn.addEventListener('click', () => {
        if (!btn.parentElement.parentElement.classList.contains('no-del')) {
          btn.parentElement.parentElement.remove();
        }
      });
    })

  });

});