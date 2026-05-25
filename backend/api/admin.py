from django.contrib import admin
from .models import Location, Treatment, Doctor, LandingPage, Blog, FAQ, Testimonial, Review, Gallery, Appointment

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'phone')

@admin.register(Treatment)
class TreatmentAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ('title',)

@admin.register(LandingPage)
class LandingPageAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ('title', 'treatment', 'location')

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'specialization')

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}
    list_display = ('title', 'author', 'created_at')

admin.site.register(FAQ)
admin.site.register(Testimonial)
admin.site.register(Review)
admin.site.register(Gallery)

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'treatment', 'location', 'preferred_date', 'created_at')
    list_filter = ('location', 'treatment', 'preferred_date')
