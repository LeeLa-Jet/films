from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название')

    def __str__(self):
        return self.title

class Tag(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название')

    def __str__(self):
        return self.title

class Item(models.Model):
    category = models.ForeignKey(Category, verbose_name='Категория')
    title = models.CharField(max_length=200, verbose_name='Название')
    image = models.ImageField(verbose_name='Постер')
    year = models.DecimalField(verbose_name='Год выхода', blank=True , max_digits=4, decimal_places=0)
    kp_rating = models.FloatField(verbose_name='Оценка на кинопоиске', blank=True)
    tags = models.ManyToManyField(Tag, blank=True, verbose_name='Теги')
    description = models.TextField(verbose_name='Описание на кинопоиске' ,blank=True)
    man_rating = models.FloatField(verbose_name='Мужская оценка', blank=True)
    woman_rating = models.FloatField(verbose_name='Женская оценка', blank=True)
    comments = models.TextField(verbose_name='Комментарии' ,blank=True)

    class Meta:
        ordering = ('year',)
        verbose_name = 'Сущность'
        verbose_name_plural = 'Сущности'

    def __str__(self):
        return self.title
