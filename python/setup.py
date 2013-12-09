from setuptools import setup, find_packages

setup(
    name='osmtlpy',
    include_package_data=True,
    packages=find_packages(exclude=['ez_setup']),
    install_requires=[
        "Flask",
        "peewee",
    ],
    entry_points="""
    [console_scripts]
    osmtlpy = osmtlpy.application:main
    """)
